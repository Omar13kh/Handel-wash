window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
  document.getElementById("scroll-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  