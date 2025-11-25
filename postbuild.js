const fs = require("fs");
const path = require("path");

const publicDir = "./public";
const distDir = path.join(publicDir, "dist");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function addJsExt(file) {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/from "\.\/(\w+)"/g, 'from "./$1.js"');
  fs.writeFileSync(file, content);
}

fs.readdirSync(distDir).forEach((file) => {
  if (file.endsWith(".js")) addJsExt(path.join(distDir, file));
});

let html = fs.readFileSync("index.html", "utf8");

let css = fs.readFileSync("style.css", "utf8");

let styleToAdd = `<style>${css}</style>`;

html = html.replace("</head>", `${styleToAdd}</head>`);

html = html.replace(
  /<script type="module" src="\.\/src\/main\.ts"><\/script>/,
  '<script type="module" src="./dist/main.js"></script>'
);

html = html.replace(/<link rel="stylesheet" href="style.css" \/>/, "");

fs.writeFileSync(path.join(publicDir, "index.html"), html);

console.log("Build successful");
