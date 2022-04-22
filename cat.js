// const fs = require("fs");
// module.exports = (fileName) => {
//   fs.readFile(fileName, "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// };

const fs = require("fs");
module.exports = (fileName, done) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      done('Somthing went wrong!')
    }else{
      done(data)
    }
  });
};
