(function(win, doc) {
  'use strict';

  var txtInput = doc.querySelector('[data-js="txtInput"]');
  var btnPaste = doc.querySelector('[data-js="btnPaste"]');
  var btnConvert = doc.querySelector('[data-js="btnConvert"]');
  var txtOutput = doc.querySelector('[data-js="txtOutput"]');
  var btnCopy = doc.querySelector('[data-js="btnCopy"]');

  btnPaste.addEventListener('click', function(evt) {

  }, false);

  btnConvert.addEventListener('click', txtUpperCase, false);

  btnCopy.addEventListener('click', function(evt) {
      
  }, false);

  function pasteText(evt) {
    evt.preventDefault();
  }

  function txtUpperCase(evt) {
    evt.preventDefault();
    var text = txtInput.value;
    txtOutput.innerHTML = text.toUpperCase();
  }

})(window, document);