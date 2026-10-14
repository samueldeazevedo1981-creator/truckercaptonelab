# Trucker Cap Tone Lab — amplificadores e referências

Atualização de 14/10/2026. Aplicativo estático, sem dependências de build ou chave de API.

## Como abrir e publicar

Extraia o ZIP e abra index.html no navegador. Para GitHub/Vercel, envie todos os arquivos e a pasta assets para a raiz do repositório. Na Vercel, use Framework Preset: Other, sem comando de build. Preserve a estrutura de pastas.

## O que mudou

- 47 fichas individuais do PDF fornecido, com amp, caixa, texto integral e link para a página original.
- Imagens fornecidas convertidas para WebP. John Mayer não possui imagem correspondente no pacote: a ausência é indicada sem substituir por outro amp.
- Alternativas para as oito pedaleiras, com distinção entre família de referência, aproximação sonora e captura a instalar.
- Seleção Clean, Crunch, Drive e Solo; Kiko muda entre Bassman, Marshall e AC30 conforme a entrevista.
- Fichas com informações incertas preservam as ressalvas do PDF. Pepeu usa uma proposta de simulação; ela não identifica seu amp pessoal.

## Critérios e limites

A fonte de equipamento é referencias.pdf, fornecida pelo usuário. Não foi feita nova verificação integral das biografias e rigs. A imagem de Frusciante representa o Silver Jubilee, um dos dois amps da ficha. O Kemper de Kiko representa o processador; o amp simulado muda conforme o som. Os valores são sugestões normalizadas, não regulagens oficiais nem patches exportáveis.

O catálogo legado foi preservado. Artistas ausentes do PDF continuam com orientação inicial por estilo ou receita legada, sinalizada como referência sonora. As 47 fichas recebem prioridade sobre essas receitas.

GT-100 e POD HD: nomes específicos adicionais consultados nas listas oficiais. Outros aparelhos: conferir firmware, catálogo de fábrica e capturas instaladas; alvos não confirmados são explicitamente sinalizados. Capturas e IRs não estão incluídos. Clean/Crunch/Drive/Solo são adaptações e nem todos possuem igual relevância para cada artista; consulte a ficha integral.

Fontes para catálogos de modelos:
- https://www.boss.info/br/products/gt-100/
- https://line6.com/data/6/0a060b316ac34f059382eddfc/application/pdf/POD%20HD%20Model%20Gallery%20-%20English%20%28Rev%20B%20%29.pdf
- https://www.sonicake.com/pages/matribox-ii-pro-software-firmware-1
- https://www.valeton.net/product/gp-200/

## Manutenção

index.html contém a navegação e o catálogo original. rigs.js contém as 47 fichas e caminhos de imagens. amp-guide.js aplica a curadoria, seleção de som e alternativas. assets/amps contém as imagens otimizadas. referencias.pdf permite conferir os textos originais.

## Validação desta entrega

JavaScript validado; 1.504 combinações (47 fichas × 8 pedaleiras × 4 sons) renderizadas em ambiente DOM sem erros. Conferidos os arquivos de imagem e a mudança de amp de Kiko. A inspeção visual em navegador não pôde ser concluída neste ambiente. Recomenda-se conferir o layout no navegador antes de publicar.
