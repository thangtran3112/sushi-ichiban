const fs = require("fs")
const wipeDependencies = () => {
  const file = fs.readFileSync("package.json")
  const content = JSON.parse(file)
  const deps = []
  for (const dep in content.dependencies) {
    deps.push(dep)
  }
  for (const dep in content.devDependencies) {
    deps.push(dep)
  }
  const newContent = {
    ...content,
    dependencies: {},
    devDependencies: {},
  }
  fs.writeFileSync("package.json", JSON.stringify(newContent))

  console.log(`npm install --save ${deps.map((d) => d).join(" ")}`)
}
if (require.main === module) {
  wipeDependencies()
} else {
  module.exports = wipeDependencies
}
