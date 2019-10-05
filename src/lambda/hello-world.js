const axios = require("axios");
const cheerio = require("cheerio");


const API_ENDPOINT = 'http://bazidna.com/Account/Login?ReturnUrl=%2fBazi%2fCase';
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
			callback( null, {
				headers: {
					'content-type': 'text/html;charset=utf-8'
				},
				statusCode: 200,
      body: JSON.stringify({
        data: answers
      })
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};

