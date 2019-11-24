function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var c = getCookie("count");
  var c_int = parseInt(c, 10);
  if (c == "") {
   setCookie("count", 0, 365);
   c_int = 0;
 }
 document.getElementById("counter").innerHTML = "You've generated " + c_int + " lovely generalizations.";
}

function lovelyGen() {
  var c_int = parseInt(getCookie("count"), 10) + 1;
  setCookie("count", c_int, 365);
  window.location.reload();
}

function dealWithIt() {
  document.getElementById("doge").style.display = "block";
  setTimeout(() => {
    document.getElementById("doge").style.opacity = "1";
  }, this.animationDelay + 20);

  setTimeout(() => {
    document.getElementById("doge").style.opacity = "0";
    document.getElementById("doge").style.display = "none";
  }, 7000);
}

function showTagline() {
  document.getElementById("tagline").style.visibility = "visible";
}

function hideTagline() {
  document.getElementById("tagline").style.visibility = "hidden";
}
