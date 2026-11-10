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

## O que o painel mostra

Recortes estáticos do Dashboard Oficial LD e da Plataforma Sinfonia. O que o print não traz fica como **`X`**.

O dash LD vale só com o filtro **canal RECEPTIVE** em **9 nov 2026**. O export de 1 jan–26 out estava filtrado errado e não entra no painel.

- **Dia:** receita, boleto, leads, encaminhamento, atendimento e conversão D+0, contra o ano anterior
- **Canal:** atendidos, encaminhamentos e TME do mesmo dia. D+7 e acumulado do ano seguem `X`
- **Vs meta:** meta diária de `ssbx-consumidor-prod-dig.loja_digital.metas_diarizadas`, canal RECEPTIVE, só BOT, de 3 a 9 nov 2026. Sábado e domingo levam `*`. O realizado continua o da capa de 9 nov
- **Origens e ativo:** estrutura mantida, números `X` até um export com o mesmo filtro
- **Agente e qualidade:** Sinfonia, recorte do agente CVM
- **Retenção:** participação em 10 nov, em 2 nov e no período de 2 a 9 nov, da planilha histórico de retenção. A variação colorida é 10 nov contra 2 nov. O volume de sessões não veio nesse recorte
- **Não transbordo:** cada categoria abre no clique. O deep dive traz uma frase de insight e três resumos de conversa. Os dois ficam `X` até a leitura qualitativa. A participação na linha é a de 10 nov, contra 2 nov, com a faixa de 2 a 9 nov
