/* Copyright by Paul I Ezekiel Hart Contact My 
    
    Facebook ID: Paul Ezekiel Hart
    Twitter ID: Paulisimo
    Email :  Hartpaulisimo@gmail.com
    Whatsapp: 08054985823
    call :    08054985823
    
    */
var navigation = (function () {
    var menuToggle = document.querySelector('#menu-toggle');
    var menu = document.querySelector('.col-nav');
    //console.log(menu.style.height)
    //var link = document.querySelectorAll('nav li a');
    //console.log(menuToggle);
    var index = 0;
    var showMenu = function () { //Makes the mobile navigation's menubar to change into a cancel icon
        if (index === 0) {
            index = 1;
            menuToggle.setAttribute('class', 'fa fa-close');
        }
        else {
            index = 0;
            menuToggle.setAttribute('class', 'fa fa-navicon');
        }
    };
    //Bug Fixs
    menuToggle.onclick = showMenu;
    var navigationLink = menu.querySelectorAll('li a');
    //console.log(navigationLink.length)
    var navClickEff = function (val) { //Makes the mobile Nagiation's Links to click the navIcon when ever it's clicked hereby closing the NavMenu when ever you have clicked the btn
        menuToggle.click();
        for (var i = 0; i < link.length; i++) {
            navigationLink[i].style.color = '#688a8f';
            navigationLink[i].style.fontWeight = 'normal';
        }
        navigationLink[val].style.color = '#7F4DEB';
        navigationLink[val].style.fontWeight = 'bolder';
    };
    navigationLink[0].onclick = function () { // adding an onclick Listenner to the navClickEff function
        navClickEff(0);
    };
    navigationLink[1].onclick = function () {
        navClickEff(1);
    };
    navigationLink[2].onclick = function () {
        navClickEff(2);
    };
    navigationLink[3].onclick = function () {
        navClickEff(3);
    };
    navigationLink[4].onclick = function () {
        navClickEff(4);
    };
    var icnBod = document.querySelector('#socialIconBod');
    var bckBtn = document.querySelector("#socialIconBod > abbr");
    var int;
    bckBtn.style.display = 'block';
    var icon = function (val) {
        if (val !== undefined) {
            int = val;
        }
        icnBod.style.display = 'block';
        if (int === 0) {
            int = 1;
            icnBod.style.left = '-2.5em';
            bckBtn.style.transform = 'rotate(180deg)';
            bckBtn.title = 'Show Icon';
        }
        else {
            int = 0;
            icnBod.style.left = 0;
            bckBtn.style.transform = 'rotate(0deg)';
            bckBtn.title = 'Hide Icon';
        }
    };
    icon(1);
    bckBtn.onclick = function () {
        icon();
    };
    window.onresize = function () {
        icon(1);
    };
    menuToggle.onclick = showMenu;
    var nav = document.querySelector('nav');
    nav.setAttribute('class', 'onSticky'); //Dynamics Purpose
	
    var stickyNav = function () {
        var scrollTop = document.body.scollTop || document.documentElement.scrollTop;
        //Calculate Algorithem
        if (scrollTop === false) {
            nav.setAttribute('class', 'sticky');
            return;
        }
		//THis will stop the rest of the code from working if scrollTop is not supported
        var scrollCalc = (scrollTop / 98 /*Defalt Time 98*/ ) * 100;
        if (scrollCalc >= 100) {
            nav.setAttribute('class', 'sticky');
        }
        else if(scrollCalc < 100){
            nav.setAttribute('class', 'onSticky');
        }
        /*if (scrollCalc > 200){
            icon(1)
        }else{
            icon(0)
        } */
        icon(0);
        //document.querySelector('#log').innerText = scrollCalc;
    };
	
    window.onscroll = stickyNav;
    window.onload = stickyNav;
    var link = document.querySelectorAll(' nav li a');
    var changeNav = function (val) {
        for (var i = 0; i < link.length; i++) {
            link[i].style.color = '#688a8f';
            link[i].style.fontWeight = 'normal';
        }
        link[val].style.color = '#7F4DEB';
        link[val].style.fontWeight = 'bolder';
    };
    document.querySelector('#PROJECT').onmouseover = function () {
        changeNav(0);
    };
    document.querySelector('#TESTIMONIALS').onmouseover = function () {
        changeNav(1);
    };
    document.querySelector('#SERVICES').onmouseover = function () {
        changeNav(2);
    };
    document.querySelector('#CONTACT').onmouseover = function () {
        changeNav(3);
    };
    document.querySelector('#ABOUT').onmouseover = function () {
        changeNav(4);
    };
})();
//=======================================================================//
var headerSlider = (function () {
    var slideImg = document.querySelectorAll('.slide');
    var dot = document.querySelectorAll('#ledHolder .led');
    var txt = document.querySelectorAll('.txt-body .txt');
    var index = 0;
    var intervalTime = 5000;
    for (var i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = 'none';
        dot[i].style.background = 'transparent';
    }
    slideImg[index].style.display = 'block';
    dot[index].style.background = 'black';
    var txtTimeout = setTimeout(setTxtAnimation, 1000);
    var controlInterval = function () {
        clearInterval(callSlide, 100);
        setTimeout((function () {
            callSlide = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
        })(), intervalTime);
    };
    document.querySelector('#ledBd').style.opacity = 0.5; // Dynamic Purpose
    document.querySelector('#buttonHolder').style.display = 'block'; // Dynamic Purpose
    var intervalBtn = document.querySelector('#ledBd abbr');
    //console.log(intervalBtn);
    var intervalIndex = 0;
    var abbr = document.querySelector('#ledBd abbr');
    var icn = document.querySelector('#ledBd abbr i');
    if (window.innerWidth < 600) {
        abbr.style.display = 'none';
    }
    var faseBackTxtAnimation = document.querySelector('txt .txHolder');
    abbr.onclick = function () {
        if (intervalIndex === 0) {
            intervalIndex = 1;
            clearInterval(callSlide, 100);
            icn.setAttribute('class', 'fa fa-play');
            abbr.title = 'Play Slide';
        }
        else {
            intervalIndex = 0;
            controlInterval();
            icn.setAttribute('class', 'fa fa-pause');
            abbr.title = 'Pause Slide';
        }
        //console.log(icn)
    };
    var myHeaderSlider = function (val) {
        icn.setAttribute('class', 'fa fa-pause');
        if (val === 'left') {
            index--;
            setTimeout(setTxtAnimation, 10);
            controlInterval();
        }
        else if (val === 'right') {
            index++;
            setTimeout(setTxtAnimation, 10);
            controlInterval();
        }
        else if (val !== isNaN && val !== undefined) {
            index = val;
            controlInterval();
            setTimeout(setTxtAnimation, 10);
        }
        else {
            index++;
            txtTimeout;
        }
        if (index >= slideImg.length) {
            index = 0;
        }
        else if (index < 0) {
            index = slideImg.length - 1;
        }
        for (var i = 0; i < slideImg.length; i++) {
            slideImg[i].style.display = 'none';
            dot[i].style.background = 'transparent';
        }
        slideImg[index].style.display = 'block';
        dot[index].style.background = 'black';
        //console.log(index);
        setTimeout(setTxtAnimation, 1000);
    };

    function setTxtAnimation() {
        for (var a = 0; a < slideImg.length; a++) {
            txt[a].style.display = 'none';
        }
        txt[index].style.display = 'block';
    }
    return {
        myHeaderSlider: myHeaderSlider
        , intervalTime: intervalTime
        , dot: dot
    };
})();
var callSlide = (function () {
        var interval = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
        //console.log(headerSlider.intervalTime)
        var btn = document.querySelectorAll('#buttonHolder button');
        btn[0].setAttribute('onclick', 'headerSlider.myHeaderSlider("left")');
        btn[1].setAttribute('onclick', 'headerSlider.myHeaderSlider("right")');
        for (var j = 0; j < headerSlider.dot.length; j++) {
            headerSlider.dot[j].setAttribute('onclick', 'headerSlider.myHeaderSlider(' + j + ')');
        }
        return interval;
    })();
    //=============================================================================//
var testimonialSlide = (function () {
        var windowSlide = document.querySelectorAll('.innerSlideBody');
        var mobileSlide = document.querySelectorAll('.slide-body');
        var led = document.querySelectorAll('#TestimonialedHolder div');
        
    
       document.querySelector('#TestimonialedHolder').style.display = 'flex';//Dynamics Purposes
    
    
    
        var slide;
        var index = 0;
        var mySliderFun = function () {
            for (var j = 0; j < led.length; j++) {
                led[j].style.display = 'none';
            }
            if (window.innerWidth > 790) {
                slide = windowSlide;
            }
            else {
                slide = mobileSlide;
            }
            if (index >= slide.length) {
                index = 0;
            }
            for (var k = 0; k < windowSlide.length; k++) {
                windowSlide[k].style.display = 'flex';
                for (var a = 0; a < mobileSlide.length; a++) {
                    mobileSlide[a].style.display = 'flex';
                }
            }
            for (var i = 0; i < slide.length; i++) {
                slide[i].style.display = 'none';
                led[i].style.display = 'block';
                led[i].style.background = 'transparent';
            }
            slide[index].style.display = 'flex';
            led[index].style.background = 'black';
        };
        mySliderFun();
        var slider = function (val) {
            index++;
            if (val != isNaN && val !== undefined) {
                index = val;
                clearInterval(interval, 100);
                setTimeout((function () {
                    interval = setInterval(slider, 8000);
                })(), 8000);
            }
            mySliderFun();
        };
        var interval = setInterval(slider, 10000);
        window.onresize = function () {
            mySliderFun();
        };
        for (var i = 0; i < led.length; i++) {
            led[i].setAttribute('onclick', 'testimonialSlide(' + i + ')');
        }
        return slider;
    })();
    /*======== Form Validation ==========*/
var formValidation = (function () {
    var name = document.querySelectorAll('form input')[0];
    var email = document.querySelectorAll('form input')[1];
    var txtarea = document.querySelector('form textarea');
    var labelTxt = document.querySelectorAll('main form label span');
    //console.log(labelTxt[0])
    name.placeholder = '';
    email.placeholder = '';
    txtarea.placeholder = '';
    (function () {
        for (var i = 0; i < labelTxt.length; i++) {
            labelTxt[i].style.display = 'block';
        }
        var formDiv = document.querySelectorAll('form div');
        for (var j = 0; j < formDiv.length; j++) {
            formDiv[j].style.display = 'none';
        }
    })();
    var placeholderEffect_Active = function (val, txt) {
        labelTxt[val].style.top = '1.2em';
        labelTxt[val].style.color = '#555';
        labelTxt[val].innerText = txt.slice(1);
        labelTxt[val].style.fontSize = '12px';
    };
    var placeholderEffect_Reset = function (val, txt) {
        labelTxt[val].style.top = '2.6em';
        labelTxt[val].style.color = 'gray';
        labelTxt[val].innerText = txt;
        labelTxt[val].style.fontSize = '13.4px';
    };
    name.onfocus = function () {
        placeholderEffect_Active(0, '* Full Name');
    };
    email.onfocus = function () {
        placeholderEffect_Active(1, '* Email Address');
    };
    txtarea.onfocus = function () {
        placeholderEffect_Active(2, '*Insert your Message here');
    };
    name.onblur = function () {
        if (name.value === '' || name.value === ' ') placeholderEffect_Reset(0, '* Full Name');
    };
    email.onblur = function () {
        if (email.value === '' || email.value === ' ') placeholderEffect_Reset(1, '* Email Address');
    };
    txtarea.onblur = function () {
        if (txtarea.value === '' || txtarea.value === ' ') placeholderEffect_Reset(2, '* Insert your Message here')
    };
    var submitBtn = document.querySelector('input[type=submit') || document.querySelector('input[type=button]') || document.querySelector('form button')
        /* ^^ connect to the submit any button in the form tag */
    submitBtn.onclick = function () {
        'use strick';
        if (name.value === '' || name.value == ' ' || name.value.length < 4) {
            placeholderEffect_Active(0, '*Invalid name length or no fill');
            labelTxt[0].style.color = '#fa7e7e';
            name.style.borderColor = '#fa7e7e';
        }
        if (email.value === '' || email.value == ' ' || email.value.length < 4) {
            placeholderEffect_Active(1, '*Invalid email length or no fill');
            labelTxt[1].style.color = '#fa7e7e';
            email.style.borderColor = '#fa7e7e';
        }
        if (txtarea.value === '' || txtarea.value == ' ') {
            placeholderEffect_Active(2, '*No Fill Please Insert your message here');
            labelTxt[2].style.color = '#fa7e7e';
            txtarea.style.borderColor = '#fa7e7e';
            return true;
        }
        return false;
    };
})();


var darkzone = (function(){
	var darkzone = document.querySelector('#darkzone');
	var closeBtn = document.querySelector('#darkzone .fa-close');
	var openBtn = document.querySelector("#ABOUT > div.aboutBody > div.myBio > div > a:nth-child(1)");
	
	
	darkzone.style.display = 'none';
	
	var switchFunction = function(bool){
		if (bool){
			bool = false;
			darkzone.style.display = 'flex'
		}else{
			bool = true;
			darkzone.style.display = 'none'
		}
		//console.log(bool)
		
	}
	closeBtn.onclick = function(){switchFunction(false) };
	openBtn.onclick = function(){switchFunction(true)}
	
	
	
	
	
})()