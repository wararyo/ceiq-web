var config = require("./ftp.config");

const EXEX_SYNC = require("child_process").execSync;
const BRANCH = EXEX_SYNC("git rev-parse --abbrev-ref HEAD")
  .toString()
  .replace(/\r?\n/g, "");
let cmd_ftp;

if (BRANCH === "master") {
  cmd_ftp =
  "git ftp push --syncroot dist/ --user "+config.master.user+" --passwd "+config.master.password+" "+config.master.host;
} else if(BRANCH === "develop") {
  cmd_ftp =
  "git ftp push --syncroot dist/ --user "+config.develop.user+" --passwd "+config.develop.password+" "+config.develop.host;
} else if(BRANCH === "vivid-design") {
  cmd_ftp =
  "git ftp push --syncroot dist/ --user "+config.vivid.user+" --passwd "+config.vivid.password+" "+config.vivid.host;
}
console.log(cmd_ftp);
EXEX_SYNC(cmd_ftp);