import fs from "node:fs";
import path from "node:path";
import { createClient } from "/Users/julianotorriani/claude/area/app/node_modules/@supabase/supabase-js/dist/index.mjs";

const envPath = "/Users/julianotorriani/claude/area/app/.env.local";
const env = Object.fromEntries(
  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const i = line.indexOf("=");
      return [line.slice(0, i), line.slice(i + 1).replace(/^['"]|['"]$/g, "")];
    }),
);

const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const productId = "96895ed9-bea9-45e4-a991-bd7c797a8291";
const manualPath = "/Users/julianotorriani/claude/agentesIA/workshop/manual-workshop-times-de-ia.json";
const manual = JSON.parse(fs.readFileSync(manualPath, "utf8"));
const lessons = manual.modules.flatMap((module) => module.lessons);
// A recepção operacional contém links que mudam a cada edição. Ela é mantida
// diretamente na Área de Membros e nunca deve ser sobrescrita pelo publicador.
const protectedLessonIds = new Set(["welcome-operacional"]);
const targetLessons = lessons.filter((lesson) => !protectedLessonIds.has(lesson.id));

const { data: modules, error: moduleError } = await sb
  .from("modulos")
  .select("id")
  .eq("produto_id", productId)
  .is("deleted_at", null);
if (moduleError) throw moduleError;

const moduleIds = modules.map((module) => module.id);
const { data: links, error: linkError } = await sb
  .from("modulo_aula")
  .select("aula_id")
  .in("modulo_id", moduleIds);
if (linkError) throw linkError;

const lessonIds = [...new Set(links.map((link) => link.aula_id))];
const { data: currentLessons, error: lessonError } = await sb
  .from("aulas")
  .select("id,titulo,lesson_payload")
  .in("id", lessonIds)
  .is("deleted_at", null);
if (lessonError) throw lessonError;

const byPayloadId = new Map(
  currentLessons
    .filter((lesson) => lesson.lesson_payload?.id)
    .map((lesson) => [lesson.lesson_payload.id, lesson]),
);
const missing = targetLessons.filter((lesson) => !byPayloadId.has(lesson.id));
if (missing.length) {
  throw new Error(`Aulas ausentes no produto: ${missing.map((lesson) => lesson.title).join(" | ")}`);
}

let updated = 0;
for (const lesson of targetLessons) {
  const current = byPayloadId.get(lesson.id);
  const { error } = await sb
    .from("aulas")
    .update({
      tipo: "texto",
      texto_conteudo: null,
      lesson_payload: lesson,
      status: "publicado",
      visibilidade: "publica",
    })
    .eq("id", current.id);
  if (error) throw error;
  updated += 1;
}

console.log(JSON.stringify({ productId, updated }));
