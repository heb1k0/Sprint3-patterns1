const { join } = require("path");
const { readdir, readFile, writeFile } = require("fs").promises;

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const reverseText = (str) => str.split("").reverse().join("");

(async () => {
  try {
    let filenames = await readdir(inbox);

    filenames.forEach(async (file) => {
      let text = await readFile(join(inbox, file), "utf8");
      await writeFile(outbox + "/" + file, reverseText(text), "utf8");

      console.log(`${file} reversed`);
      console.log(`text: ${text}`);
      console.log(`reverseText: ${reverseText(text)}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
