# Estado separado por cliente

Seleção e briefing ficam na sessão. Só persistir quando autorizado e com resolução READY do contrato compartilhado. Use pasta de estado já existente sob o diretório resolvido do cliente; se inexistente, proponha `zeus/` dentro desse cliente e crie somente dentro da autorização concedida. Nunca gravar estado em pasta global de skills, nem mudar cliente ativo global como efeito de conversar.

Registros: decisões com fonte/data; pendências com assunto, dono, desde e trava; referências aos resultados. Cada sessão deve escrever arquivo novo com identificador único, por exemplo `sessions/{data}-{session-id}.md`, sem sobrescrever outra sessão. Releia estado antes de acrescentar informação; se houver conflito, preserve ambos e apresente a divergência. Não rotacionar apagando histórico e não gerar automaticamente ONTEM/HOJE globais.

Boot lê os registros existentes do cliente selecionado. Sem registro, declare histórico indisponível. Nenhuma lembrança presumida. Fechamento pode propor o texto em conversa sem gravá-lo. Não guardar tokens, senhas ou cópias desnecessárias de dados pessoais. A autorização de persistir estado não permite publicação ou envio.
