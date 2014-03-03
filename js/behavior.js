var d = document;
var c = d.getElementById('comments');

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://api.github.com/gists/9318174/comments', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var r = JSON.parse(xhr.responseText);
    if (r && r.length) {
      for (var i = r.length - 1; i > -1; i = i + 1) {
        var li = d.createElement('LI');
        var p = d.createElement('P');
        p.innerHTML = r.body;
        li.appendChild(p);
        c.appendChild(li);
      }
    }
  }
};
xhr.send();
