---
name: transcrever
description: |
  Transcreve vídeos e áudios usando OpenAI Whisper local (sem API paga).
  Otimiza o áudio para mono 16kHz + 2x speed, reduzindo tempo e memória pela metade.
  Suporta português e inglês. Salva em /Users/julianotorriani/claude/outputs/transcriptions/.

  Use: `/transcrever caminho/do/video.mp4` ou `/transcrever caminho/do/audio.mp3 en large 1`
---

# Transcrever Vídeo/Áudio

**Serviço compartilhado:** `infrastructure/services/transcrever/`

Leia as instruções completas em `infrastructure/services/transcrever/SKILL.md` e execute:

```bash
bash infrastructure/services/transcrever/scripts/transcrever.sh "<arquivo>" "<idioma>" "<modelo>" "<velocidade>"
```

Defaults: idioma=pt, modelo=medium, velocidade=2
