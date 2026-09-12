---
name: ebook-to-md
description: |
  Converte ebooks (ePub, MOBI, AZW, PDF, HTML, TXT) para Markdown formatado.
  100% local, sem LLM, sem custo. Usa Calibre + Pandoc + pdftotext.
  Salva em /Users/julianotorriani/claude/outputs/livros/<nome-do-livro>/

  Use: `/ebook-to-md caminho/do/livro.epub`
---

# Ebook → Markdown

**Serviço compartilhado:** `infrastructure/services/ebook-to-md/`

Leia as instruções completas em `infrastructure/services/ebook-to-md/SKILL.md` e execute:

```bash
bash infrastructure/services/ebook-to-md/scripts/ebook-to-md.sh "<arquivo>"
```
