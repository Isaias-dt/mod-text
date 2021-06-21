(function(win, doc) {
  'use strict';

  var txtInput = doc.querySelector('[data-js=txtInput]');
  var btnPaste = doc.querySelector('[data-js=btnPaste]');
  var btnConvert = doc.querySelector('[data-js=btnConvert]');
  var txtOutput = doc.querySelector('[data-js=txtOutput] pre');
  var btnCopy = doc.querySelector('[data-js=btnCopy]');
  var btnClean = doc.querySelector('[data-js=btnClean]');

  btnClean.addEventListener('click', toClearCamp, false);
  btnConvert.addEventListener('click', txtUpperCase, false);
  btnPaste.addEventListener('click', toPasteText, false);
  btnCopy.addEventListener('click', toCopyText, false);

  function toPasteText(evt) {
    evt.preventDefault();
    win.navigator.clipboard.readText().then(
    clipText => txtInput.value = clipText);
  }

  function txtUpperCase(evt) {
    evt.preventDefault();
    var text = txtInput.value;
    txtOutput.innerText = text.toUpperCase();
  }

  function toClearCamp(evt) {
    evt.preventDefault();
    txtInput.value = '';
  }

  function toCopyText(evt) {
    evt.preventDefault();
    win.navigator.clipboard.writeText(txtOutput.textContent);
  }

})(window, document);