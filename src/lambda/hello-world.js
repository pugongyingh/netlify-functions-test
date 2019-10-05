const axios = require("axios");
const cheerio = require("cheerio");


const API_ENDPOINT = 'http://m-smsc.jyjk.com/sswzx.php?id=5323333666655554791';
//const API_ENDPOINT = 'https://api.subsume.io/hertingfordbury/v1/meetings';
exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT )
		.then( ( response ) => {
        const $resultsPage = cheerio.load(response.data);
    const questions = $resultsPage("#myModal .card-box");
    const answers = Array
      .from(questions)
      .map(question => $resultsPage(question).find(".alert")[0])
      .map(answerEl => {
        const answerText = $resultsPage(answerEl).text();
        return answerText.slice(answerText.length - 1);
      });
    const questionss = $resultsPage('div[class="con layui-text"]').text();
			callback( null, {
				headers: {
				'content-type': 'text/html; charset=utf8',
				},
				statusCode: 200,
      body: questionss
      
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};

