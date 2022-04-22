const request = require("request")



module.exports = (path)=>{
  request(path, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}

// module.exports = (path, done)=>{
//   request(path, function (error, response, body) {
//   if(error){
//     done(error)
//   } else {
//     done(response && response.statusCode)
//     done(body)
//   }
// });
// }
//----> not working
