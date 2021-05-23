import "@shoelace-style/shoelace/dist/themes/base.css";
import '@github/file-attachment-element';
import "../styles/index.css";

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';

import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js';
import SlForm from '@shoelace-style/shoelace/dist/components/form/form.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';

import './conversion-area';

const conversionArea = document.querySelector("conversion-area");
const submitButton = document.querySelector("input[type=submit]");
const downloadButton = document.querySelector("a[slot=download-button]");

const radioButtons = Array.from(document.querySelectorAll("sl-radio"));
let files = [];

function getCurrentRadioValue() {
  let value;
  radioButtons.forEach(radio => {
    if (radio.checked) {
      value = radio.value;
      return;
    };
  });
  return value;
}
const ffmpeg = createFFmpeg({
  log: true,
});

(async () => {
  await ffmpeg.load();
  conversionArea.currentState = "ready";

})();

submitButton.addEventListener("click", () => {
  if (files.length === 0) {
    alert("Please select at least one file");
  } else {
    const reader = new FileReader();
    reader.onloadstart = () => {
      conversionArea.currentState = "loading";

    };


    reader.onloadend = async () => {
      ffmpeg.FS("writeFile", files[0].file.name, new Uint8Array(reader.result));
      const ext = getCurrentRadioValue();
      await ffmpeg.run('-i', files[0].file.name, `output.${ext}`);
      conversionArea.currentState = "converted";
      setTimeout(() => {
        ffmpeg.exit();
      }, 1000);
      downloadButton.href = URL.createObjectURL(new Blob([ffmpeg.FS('readFile', `output.${ext}`)], { type: `audio/${ext}` }));

    };

    reader.readAsArrayBuffer(files[0].file);
  }
}, false);




const pre = document.querySelector('pre');
document.addEventListener('file-attachment-accepted', (event) => {
  files = event.detail.attachments;
  pre.textContent = files.map(a => a.file.name).join('\n | ');

});
