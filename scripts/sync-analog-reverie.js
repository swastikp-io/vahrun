const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "../analog reverie");
const targetDirs = [
  path.join(__dirname, "../public/analogreverie"),
  path.join(__dirname, "../public/analogureverie"),
  path.join(__dirname, "../public/projects/analogreverie"),
];

if (fs.existsSync(sourceDir)) {
  targetDirs.forEach((target) => {
    fs.mkdirSync(target, { recursive: true });
    fs.cpSync(sourceDir, target, { recursive: true });
  });
  console.log("Successfully synced 'analog reverie' static files to public targets.");
} else {
  console.warn("Source directory 'analog reverie' not found for syncing.");
}
