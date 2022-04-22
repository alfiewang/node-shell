// Output a prompt
process.stdout.write("prompt > ");
// we can access the pwd function and store it in a variable like so
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline
  // process.stdout.write("You typed: " + cmd);
  // if a user enters 'pwd' as an argument, we can then call it
  if (cmd === "pwd") pwd();
  if (cmd === "ls") ls();

  const [catCmd, filename] = cmd.split(" ");
  // cat: 'cat'
  // filename: 'bash.js'
  if (catCmd === "cat" && filename.includes(".js")) {
    cat(filename);
  }
  process.stdout.write("\nprompt > ");
});
