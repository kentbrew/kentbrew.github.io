var d = document;
var c = d.getElementById('comments');

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://api.github.com/gists/9318174/comments', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var r = JSON.parse(xhr.responseText);
    if (r && r.length) {
      for (var i = r.length - 1; i > -1; i = i - 1) {
        var li = d.createElement('LI');
        var img = d.createElement('IMG');
        var u = r[i].user;
        img.src = u.avatar_url;
        img.height = '32';
        img.width = '32';
        li.appendChild(img);
        var a = d.createElement('A');
        a.innerHTML = u.login;
        a.href = u.html_url;
        li.appendChild(a);
        var date = d.createElement('DATE');
        date.innerHTML = r[i].created_date;
        li.appendChild(date);
        var p = d.createElement('P');
        p.innerHTML = r[i].body;
        li.appendChild(p);
        c.appendChild(li);
      }
    }
  }
};
xhr.send();
