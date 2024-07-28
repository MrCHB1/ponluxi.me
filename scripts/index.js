window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("menubar").style.background = "rgb(37, 37, 37)";
    document.getElementById("menubar").style.borderColor = "rgb(74, 74, 74)";
  } else {
    document.getElementById("menubar").style.background = "transparent";
    document.getElementById("menubar").style.borderColor = "transparent";
  }
};
