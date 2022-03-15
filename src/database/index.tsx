import images from "./images";
const databaseApi = () => {
  const urlImgs = images();

  const finclasses = [
    {
      "id": "1",
      "specialty": "Investimentos",
      "name": "Mauricio Bittencourt",
      "broker": "Velt",
      "urlImg": urlImgs.brokerMauricio
    },
    {
      "id": "2",
      "specialty": "Equity",
      "name": "Guilherme Benchimol",
      "broker": "XP Investimentos",
      "urlImg": urlImgs.brokerGuilherme
    },
    {
      "id": "3",
      "specialty": "Valuation",
      "name": "Tiago Reis",
      "broker": "Suno Research,",
      "urlImg": urlImgs.brokerTiagoReis
    },
  ]

  const findocs = [
    {
      "id": "1",
      "name": "",
      "author": "",
      "urlImg": ""
    },
    {
      "id": "2",
      "name": "",
      "author": "",
      "urlImg": ""
    },
    {
      "id": "3",
      "name": "",
      "author": "",
      "urlImg": ""
    },
  ]

  const finbooks = [
    {
      "id": "1",
      "name": "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      "author": "Thiago Nigro",
      "urlImg": urlImgs.bookThiago
    },
    {
      "id": "2",
      "name": "O que o ensino não te ensina",
      "author": "Breno Perrucho",
      "urlImg": urlImgs.bookBruno
    },
    {
      "id": "3",
      "name": "Método Financeiro Do Primo Rico",
      "author": "Thiago Nigro",
      "urlImg": urlImgs.bookPrimo
    },
  ]

  const fundamentalist = [
    {
      "id": "1",
      "specialty": "Fundamentos da bolsa",
      "name": "Floriano Bartunek",
      "descriptions": "Aprenda todos os fundamentos da bolsa de valores e seja um investidor mais consistente.",
      "urlImg": urlImgs.florianoBartunek
    },
    {
      "id": "2",
      "specialty": "Indicadores",
      "name": "Fernando Ferreira",
      "descriptions": "Aprenda sobre indicadores com o Feranando Ferreira",
      "urlImg": urlImgs.fernandoFerreira
    },
    {
      "id": "3",
      "specialty": "ESG",
      "name": "Fabio Alperowith",
      "descriptions": "Descubra como aplicar os princípios do ESG no seu portfólio de investimentos.",
      "urlImg": urlImgs.fabioAlperowith
    },
  ]

  return {
    finclasses,
    findocs,
    finbooks,
    fundamentalist
  }
}


export default databaseApi;