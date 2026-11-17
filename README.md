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

O dash LD vale só com o filtro **canal RECEPTIVE**. O funil olha **D-2**, no fuso de São Paulo, porque a capa de ontem ainda não fecha. A capa publicada é **15 nov 2026**; enquanto D-2 for esse dia, os números entram. Nos dias seguintes o funil fica em traço até chegar a capa nova. O export de 1 jan–26 out estava filtrado errado e não entra no painel.

- **D-2:** a abertura mostra o funil de D-2 (15 nov), com vs AA do Dashboard Oficial LD e vs meta calculado, e logo abaixo por que o lead não foi para a consultora. Receita e boleto médio não vieram nessa capa. Vs meta, Origens, Agente e Qualidade ficam cinza e, ao abrir, o conteúdo entra sombreado: esses dados estão em avaliação com o time Sinfonia
- **Vs meta:** meta diária de `ssbx-consumidor-prod-dig.loja_digital.metas_diarizadas`, canal RECEPTIVE, só BOT, de 3 a 16 nov 2026. Encaminhado, atendimento e conversão entram em %. O vs meta de D-2 é calculado: realizado do Dashboard Oficial LD contra a meta BOT. O dash preenche 15 nov (22,1 mil vira 22.100, 8,4 mil vira 8.400, 7 mil vira 7.000). A meta desse domingo está zerada, então as taxas ficam sem comparação e a receita segue em traço. Os outros dias ficam em traço. Sábado e domingo levam `*`
- **Origens:** meta BOT de 9 nov por origem no canal RECEPTIVE, com encaminhado, atendimento e conversão em %. O realizado dessa quebra segue de fora. Ativações do canal ACTIVE ficam de fora: o painel olha só o receptivo, quando o lead entra em contato
- **Agente:** volume, tempo e moderação do agente CVM na Sinfonia
- **Qualidade:** avaliação da resposta e base de conhecimento ficam em traço, aguardando o time Sinfonia
- **Retenção:** 12 a 16 nov. No dia 12, 42.178 sessões e a 1ª ou 2ª interação é 72,62%. De 13 a 16 nov, o CEP ou a escolha da loja lidera: 35,04% (12.481), 53,91% (10.100), 50,19% (9.327) e 49,99% (12.621). Cada linha abre as fricções. O id de 12 nov abre o recorte da planilha de amostras, sem telefone, CEP ou endereço. Os ids de 13 a 16 nov não estão nessa amostra. No CEP de 15 nov, 2.028 e 1.348 não fecham as 4.682 sessões
