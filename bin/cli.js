#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/gunjan2012/webpack-react-setup.git ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

const checkOut = runCommand(gitCheckoutCommand);
const installDeps = runCommand(installDepsCommand);

console.log("Congratulations , You Are Good To go");

console.log("npm run start");