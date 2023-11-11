const fs = require("fs");

const modulesDirectory = "node_modules";
const moduleMappings = {};

const modules = fs.readdirSync(modulesDirectory);
for (const module of modules) {
  if (module.startsWith("d3-")) {
    const moduleName = module.replace(/\.min\.js$/, "");
    moduleMappings[`^${moduleName}$`] = `<rootDir>/node_modules/${module}/dist/${module}.min.js`;
  }
}

module.exports = {
  moduleMappings
};
