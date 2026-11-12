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

O dash LD vale só com o filtro **canal RECEPTIVE**. O funil olha **D-2**, no fuso de São Paulo, porque a capa de ontem ainda não fecha. A capa publicada é **10 nov 2026**; enquanto D-2 for esse dia, os números entram. Nos dias seguintes o funil fica em traço até chegar a capa nova. O export de 1 jan–26 out estava filtrado errado e não entra no painel.

- **D-2:** a abertura mostra o funil de D-2 (hoje, 10 nov), com vs AA do Dashboard Oficial LD e vs meta calculado, e logo abaixo por que o lead não foi para a consultora. Vs meta, Origens, Agente e Qualidade ficam cinza e, ao abrir, o conteúdo entra sombreado: esses dados estão em avaliação com o time Sinfonia
- **Vs meta:** meta diária de `ssbx-consumidor-prod-dig.loja_digital.metas_diarizadas`, canal RECEPTIVE, só BOT, de 3 a 16 nov 2026. Encaminhado, atendimento e conversão entram em %. O vs meta de D-2 é calculado: realizado do Dashboard Oficial LD contra a meta BOT. O dash preenche 10 nov (30,6 mil vira 30.600, 16,6 mil vira 16.600, 8 mil vira 8.000). Os outros dias ficam em traço. Sábado e domingo levam `*`. 15 nov está zerado
- **Origens:** meta BOT de 9 nov por origem no canal RECEPTIVE, com encaminhado, atendimento e conversão em %. O realizado dessa quebra segue de fora. Ativações do canal ACTIVE ficam de fora: o painel olha só o receptivo, quando o lead entra em contato
- **Agente:** volume, tempo e moderação do agente CVM na Sinfonia
- **Qualidade:** avaliação da resposta e base de conhecimento ficam em traço, aguardando o time Sinfonia
- **Retenção:** diagnóstico de 10 nov, com 13.176 sessões. Carrossel 8.115, busca 4.095, 1ª ou 2ª interação 458, escolha da loja 414 e produto não encontrado 94. Cada linha abre as fricções. O id abre o recorte da conversa que está na planilha de amostras, sem telefone, CEP ou endereço
