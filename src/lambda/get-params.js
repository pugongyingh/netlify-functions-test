// this uses the callback syntax, however, 
// we encourage you to try the async/await syntax shown in async-dadjoke.js
// exports.handler = function() is the same as export function handler()
// @2019/08/25

exports.handler = function(event, context, callback) {
// export function handler(event, context, callback) {
  // GET parameters
  let params = event.queryStringParameters
  console.log('queryStringParameters', event.queryStringParameters)
  for (const prop in params) {
    console.log(`params.${prop} = ${params[prop]}`);
  }
  
  //POST parameters
  let body = event.body
  console.log('body:', body)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Got: '+body }),
  })
}
