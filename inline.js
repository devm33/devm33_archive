  window.onload = function(){
    var bgimg = new Image();
    bgimg.src = "/bg.jpg";
    bgimg.onload = function(){
        document.body.parentNode.style.backgroundImage = "url("+bgimg.src+")";
    };
  };
  
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44442041-1', 'devm33.com');
  ga('send', 'pageview');
  
