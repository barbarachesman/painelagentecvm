# Painel Funil · Agente CVM

Painel de indicadores do **Agente CVM** (funil, receita e deep dive de transbordo), com o **mesmo visual/CSS do [Gestor360](https://github.com/barbarachesman/gestor360)**.

Enquanto a fonte de dados não estiver ligada, valores pendentes aparecem como **`X`**.

## Estrutura

```
Code.gs              # doGet + stub getDailySnapshot()
Index.html           # shell do painel
Stylesheet.html      # CSS (tokens Gestor360)
JavaScript.html      # data + navegação por seções
appsscript.json      # timezone America/Sao_Paulo
preview/local.html   # prévia estática no navegador
```

## Prévia local

Abra [`preview/local.html`](preview/local.html) no navegador.

## Publicar (Apps Script / clasp)

Mesmo fluxo do Gestor360: `clasp create` / `clasp push` e implantar como App da Web no domínio GB.

## Escopo V1 (layout)

- Resultados financeiros: receita bruta, boleto médio, metas
- Funil & operação: leads → encaminhamento → atendimento → conversão
- Deep dive: mix imediato/aquecido, carrinhos, BM por tipo

Conexão BigQuery / report diário e quebra avançada de funil entram nas próximas fatias.
