const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
const API_ENDPOINT = 'http://m-smsc.jyjk.com/sswzx.php?id=5323333666655554791';
//const API_ENDPOINT = 'https://api.subsume.io/hertingfordbury/v1/meetings';
exports.handler = ( event, context, callback ) => {
	//axios.get( API_ENDPOINT )
	//	.then( ( response ) => {
  axios.get(API_ENDPOINT, { responseType: "arraybuffer" }).then(function(response){
    let html = iconv.decode(response.data, "gb2312");    
    
		//const	body = iconv.decode(response.data,'gb2312');
    	//const	body = iconv.decode(response.data,'utf-8').toString();
        const $resultsPage = cheerio.load(html);
    const questions = $resultsPage("#myModal .card-box");
    const answers = Array
      .from(questions)
      .map(question => $resultsPage(question).find(".alert")[0])
      .map(answerEl => {
        const answerText = $resultsPage(answerEl).text();
        return answerText.slice(answerText.length - 1);
      });
    let questionss = $resultsPage('div[class="con layui-text"]');
      // let questionss = $resultsPage('div[class="con layui-text"]').text();
    //questionss = '<div>' + questionss + '</div>';
    //var xx=new GB2312UTF8();
    //var Utf8=xx.Gb2312ToUtf8(questionss);
    //var Gb2312=xx.Utf8ToGb2312(questionss);
    //var encoder = new TextEncoder('gbk');

   // var Utf8=encoder.encode(questionss);
			callback( null, {
				headers: {
         //'content-type': 'text/html; charset=gb2312',
         'content-type': 'text/html; charset=utf-8',
				},
				statusCode: 200,
      body: questionss
 
      
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};

