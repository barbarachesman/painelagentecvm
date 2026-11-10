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
- **Vs meta:** meta diária de `ssbx-consumidor-prod-dig.loja_digital.metas_diarizadas`, canal RECEPTIVE, só BOT, de 3 a 16 nov 2026. Encaminhado, atendimento e conversão entram em %. Cada indicador tem coluna de realizado. A capa preenche 9 nov (25,1 mil vira 25.100). Os outros dias ficam em traço. Sábado e domingo levam `*`. 15 nov está zerado
- **Origens:** meta BOT de 9 nov por origem no canal RECEPTIVE, com encaminhado, atendimento e conversão em %. O realizado dessa quebra segue de fora. Ativações do canal ACTIVE ficam de fora: o painel olha só o receptivo, quando o lead entra em contato
- **Agente:** volume, tempo e moderação do agente CVM na Sinfonia
- **Qualidade:** avaliação da resposta e base de conhecimento ficam em traço, aguardando o time Sinfonia
- **Retenção:** por que o lead não foi para a consultora em 9 nov (35,1% contra meta de 46,4%). Cada categoria abre no clique com o ponto de ruptura, as fricções e os IDs de conversa. A linha também mostra a participação de 10 nov, contra 2 nov, e a faixa de 2 a 9 nov
