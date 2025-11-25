const fs = require("fs");
const path = require("path");

const dir = "./dist";

function addJsExt(file) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/from "\.\/(\w+)"/g, 'from "./$1.js"');
  fs.writeFileSync(file, content);
}

fs.readdirSync(dir).forEach((file) => {
  if (file.endsWith(".js")) addJsExt(path.join(dir, file));
});
