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
    {
      "id": "4",
      "specialty": "Investimentos",
      "name": "Mauricio Bittencourt",
      "broker": "Velt",
      "urlImg": urlImgs.brokerMauricio
    },
    {
      "id": "5",
      "specialty": "Equity",
      "name": "Guilherme Benchimol",
      "broker": "XP Investimentos",
      "urlImg": urlImgs.brokerGuilherme
    },
    {
      "id": "6",
      "specialty": "Valuation",
      "name": "Tiago Reis",
      "broker": "Suno Research,",
      "urlImg": urlImgs.brokerTiagoReis
    },
  ]

  const findocs = [
    {
      "id": "1",
      "title": "Title",
      "descriptions": "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      "urlImg": urlImgs.bookPrimo
    },
    {
      "id": "2",
      "title": "Title",
      "descriptions": "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      "urlImg": urlImgs.bookBruno
    },
    {
      "id": "3",
      "title": "Title",
      "descriptions": "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      "urlImg": urlImgs.bookPrimo
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
    {
      "id": "4",
      "name": "Do Mil ao Milhão. Sem Cortar o Cafezinho",
      "author": "Thiago Nigro",
      "urlImg": urlImgs.bookThiago
    },
    {
      "id": "5",
      "name": "O que o ensino não te ensina",
      "author": "Breno Perrucho",
      "urlImg": urlImgs.bookBruno
    },
    {
      "id": "6",
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