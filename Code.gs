/**
 * Painel Funil · Agente CVM
 * Web app Apps Script — mesma base visual do Gestor360.
 */

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Painel Funil · Agente CVM')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Stub de dados do dia. Enquanto a fonte não estiver ligada, devolve X.
 * Formato alinhado ao report diário do canal de acompanhamento.
 */
function getDailySnapshot() {
  return {
    dateLabel: 'pendente',
    financeiro: {
      receitaBruta: 'X',
      receitaVsMeta: 'X',
      metaReceita: 'X',
      boletoMedio: 'X',
      boletoVsMeta: 'X',
      metaBoleto: 'X',
    },
    funil: {
      leads: 'X',
      leadsVsMeta: 'X',
      encaminhamento: 'X',
      encaminhamentoVsMeta: 'X',
      atendimento: 'X',
      atendimentoVsMeta: 'X',
      conversao: 'X',
      conversaoVsMeta: 'X',
    },
    deepDive: {
      pctTransbordoImediato: 'X',
      pctTransbordoAquecido: 'X',
      pctCarrinhosMontados: 'X',
      bmTransbordoImediato: 'X',
      bmTransbordoAquecido: 'X',
      gmvPorTipoTransbordo: 'X',
    },
  };
}
