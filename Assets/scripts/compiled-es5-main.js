
  "use strict";
  var navigation = ((function() {
    'use strict';
    var menuToggle = document.querySelector('#menu-toggle');
    var menu = document.querySelector('.col-nav');
    var index = 0;
    var showMenu = (function() {
      if (window.innerWidth > 690) {
        index = 0;
      } else if (window.innerWidth < 690 && window.resize === true) {
        index = 0;
      } else if (index == 0) {
        index = 1;
        menu.classList.replace('hideMenu', 'showMenu');
        menuToggle.classList.replace('fa-navicon', 'fa-close');
      } else {
        index = 0;
        menu.classList.replace('showMenu', 'hideMenu');
        menuToggle.classList.replace('fa-close', 'fa-navicon');
      }
      console.log(("Menu toggle : " + (function() {
        if (index === 0) {
          return 'OFF';
        } else {
          return 'ON';
        }
      })() + " "));
    });
    menuToggle.onclick = showMenu;
    var nav = document.querySelector('nav');
    var stickyNav = (function() {
      var scrollTop = document.body.scollTop || document.documentElement.scrollTop;
      var scrollCalc = (scrollTop / 98) * 100;
      if (scrollCalc >= 100) {
        nav.classList.replace('onSticky', 'sticky');
      } else {
        nav.classList.replace('sticky', 'onSticky');
      }
      document.querySelector('#log').innerText = scrollCalc;
    });
    window.onscroll = stickyNav;
    window.onliad = stickyNav;
  }))();
  var headerSlider = (function() {
    var slideImg = document.querySelectorAll('.slide');
    var dot = document.querySelectorAll('#ledHolder .led');
    var index = 0;
    var intervalTime = 5000;
    {
      try {
        throw undefined;
      } catch ($i) {
        $i = 0;
        for (; $i < slideImg.length; $i++) {
          try {
            throw undefined;
          } catch (i) {
            i = $i;
            try {
              slideImg[$traceurRuntime.toProperty(i)].style.display = 'none';
              dot[$traceurRuntime.toProperty(i)].style.background = 'transparent';
            } finally {
              $i = i;
            }
          }
        }
      }
    }
    slideImg[$traceurRuntime.toProperty(index)].style.display = 'block';
    dot[$traceurRuntime.toProperty(index)].style.background = 'black';
    var controlInterval = (function() {
      clearInterval(callSlide, 100);
      setTimeout((function() {
        callSlide = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
      })(), intervalTime);
    });
    var myHeaderSlider = (function(val) {
      if (val === 'left') {
        index--;
        controlInterval();
      } else if (val === 'right') {
        index++;
        controlInterval();
      } else if (val != NaN && val != undefined) {
        index = val;
        controlInterval();
      } else {
        index++;
      }
      if (index >= slideImg.length) {
        index = 0;
      } else if (index < 0) {
        index = slideImg.length - 1;
      }
      {
        try {
          throw undefined;
        } catch ($i) {
          $i = 0;
          for (; $i < slideImg.length; $i++) {
            try {
              throw undefined;
            } catch (i) {
              i = $i;
              try {
                slideImg[$traceurRuntime.toProperty(i)].style.display = 'none';
                dot[$traceurRuntime.toProperty(i)].style.background = 'transparent';
              } finally {
                $i = i;
              }
            }
          }
        }
      }
      slideImg[$traceurRuntime.toProperty(index)].style.display = 'block';
      dot[$traceurRuntime.toProperty(index)].style.background = 'black';
    });
    return {
      myHeaderSlider: myHeaderSlider,
      intervalTime: intervalTime,
      dot: dot
    };
  })();
  var callSlide = ((function() {
    var interval = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
    var btn = document.querySelectorAll('#buttonHolder button');
    btn[0].setAttribute('onclick', 'headerSlider.myHeaderSlider("left")');
    btn[1].setAttribute('onclick', 'headerSlider.myHeaderSlider("right")');
    {
      try {
        throw undefined;
      } catch ($j) {
        $j = 0;
        for (; $j < headerSlider.dot.length; $j++) {
          try {
            throw undefined;
          } catch (j) {
            j = $j;
            try {
              headerSlider.dot[$traceurRuntime.toProperty(j)].setAttribute('onclick', ("headerSlider.myHeaderSlider(" + j + ")"));
            } finally {
              $j = j;
            }
          }
        }
      }
    }
    return interval;
  }))();


