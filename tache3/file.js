const fs = require("fs");

const fileName = "welcome.txt";
const fileContent = "Hello Node";

fs.writeFile(fileName, fileContent, (err) => {
    if (err) throw err;
    console.log(`File ${fileName} created successfully.`);
});

fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });