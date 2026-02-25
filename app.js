const fs = require("fs");

const content = `
<html>
  <head>
    <title>CI/CD Deployment</title>
  </head>
  <body>
    <h1>Welcome, to CI/CD pipeline deployed on GitHub Actions (Node.js)</h1>
  </body>
</html>
`;

fs.writeFileSync("index.html", content);

console.log("index.html generated successfully");