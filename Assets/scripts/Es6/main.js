/* Copyright by Paul I Ezekiel Hart Contact My 
    
    Facebook ID: Paul Ezekiel Hart
    Twitter ID: Paulisimo
    Email :  Hartpaulisimo@gmail.com
    Whatsapp: 08054985823
    call :    08054985823
    
    */
//'use strict';
const navigation = (() => {
    
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('.col-nav');
	const link = document.querySelectorAll(' nav li a');
    //console.log( menuToggle);
    let index = 0;
    const showMenu = () => {
 
         if (index == 0) {
            index = 1;
            menuToggle.classList.replace('fa-navicon', 'fa-close');
        }
        else {
            index = 0;
            menuToggle.classList.replace('fa-close', 'fa-navicon');
        }
        //Log Information to Console
        //console.log(`Menu toggle : ${( () =>{ if(index === 0){return 'OFF'}else{return 'ON' }})()} `);
    };  //This is the navigation icon for mobile device it has been disactivated and replaced with CSS
	
    const navigationLink = menu.querySelectorAll('li');
	 
    //console.log(navigationLink.length)
    
	const navClickEff = (val) => {
		menuToggle.click() 
		
		for(let i = 0; i < link.length; i++){
			link[i].style.color = '#688a8f' 
			link[i].style.fontWeight = 'normal' 
		}
		navigationLink[val].querySelector('a').style.color = 'blue'
		navigationLink[val].querySelector('a').style.fontWeight = 'bolder'
		
		};
	navigationLink[0].onclick = ()=>{navClickEff(0);}
	navigationLink[1].onclick = ()=>{navClickEff(1)}
	navigationLink[2].onclick = ()=>{navClickEff(2)}
	navigationLink[3].onclick = ()=>{navClickEff(3)}
	navigationLink[4].onclick = ()=>{navClickEff(4)}
	
	
		const icnBod = document.querySelector('#socialIconBod');
		const bckBtn = document.querySelector("#socialIconBod > abbr");
		let int;
		bckBtn.style.display = 'block'
    
		const icon = (val) =>{
		if(val != undefined){
			int = val
		}
		
			icnBod.style.display ='block';
		if (int === 0){
			int =1;
			icnBod.style.left = '-2.5em';
			bckBtn.style.transform = 'rotate(180deg)'
			bckBtn.title = 'Show Icon'
		}else{
			int = 0;
			icnBod.style.left = 0
			bckBtn.style.transform = 'rotate(0deg)'
			bckBtn.title = 'Hide Icon'
		}
		
		
		
	}
	icon(1)
	window.onresize = () => icon(1)
	
	
    menuToggle.onclick = showMenu;
    const nav = document.querySelector('nav');
           nav.classList.replace('sticky','onSticky');//Dynamics Purpose
	
    const stickyNav = () => {
        const scrollTop = document.body.scollTop || document.documentElement.scrollTop;
        //Calculate Algorithem
      const  scrollCalc = (scrollTop / 98 /*Defalt Time 98*/ ) * 100;
        if (scrollCalc >= 100) {
            nav.classList.replace('onSticky', 'sticky');
        }
        else {
            nav.classList.replace('sticky', 'onSticky');
        }
		/*if (scrollCalc > 200){
			icon(1)
		}else{
			icon(0)
		} */
		icon(0)
        document.querySelector('#log').innerText = scrollCalc;
    }
    window.onscroll = stickyNav;
    window.onliad = stickyNav;
	const changeNav = (val) =>{ 
		for(let i = 0; i < link.length; i++){
			link[i].style.color = '#688a8f' 
			link[i].style.fontWeight = 'normal' 
		}
		link[val].style.color = 'blue'
		link[val].style.fontWeight = 'bolder'
	}
	document.querySelector('#PROJECT').onmouseover = () =>{ changeNav(0)}
	document.querySelector('#TESTIMONIALS').onmouseover = () =>{ changeNav(1)}
	document.querySelector('#SERVICES').onmouseover = () =>{ changeNav(2)}
	document.querySelector('#CONTACT').onmouseover = () =>{ changeNav(3)}
	document.querySelector('#ABOUT').onmouseover = () =>{ changeNav(4)}
	
		bckBtn.onclick = ( ()=>{icon()})
	
})();

//======================================================================//

//======================================================================//
const headerSlider = (function () {
    const slideImg = document.querySelectorAll('.slide');
    const dot = document.querySelectorAll('#ledHolder .led');
    const txt = document.querySelectorAll('.txt-body .txt');
    let index = 0;
    const intervalTime = 5000;
    for (let i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = 'none';
        dot[i].style.background = 'transparent';
    }
    slideImg[index].style.display = 'block';
    dot[index].style.background = 'black';
    const txtTimeout = setTimeout(setTxtAnimation, 1000)
        //setTimeout(setTxtAnimation(),1000);
    const controlInterval = () => {
        clearInterval(callSlide, 100);
        setTimeout((function () {
            callSlide = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
        })(), intervalTime);
    }
	document.querySelector('#ledBd').style.opacity = 0.5; // Dynamics Purpose
	document.querySelector('#buttonHolder').style.display = 'block'; // Dynamics Purpose
    const intervalBtn = document.querySelector('#ledBd  abbr');
    //console.log(intervalBtn);
    let intervalIndex = 0;
        const abbr = document.querySelector('#ledBd abbr');
        const icn = document.querySelector('#ledBd abbr i');
    const faseBackTxtAnimation = document.querySelector('.txt .txHolder');
    intervalBtn.onclick = () => {
		
        if (intervalIndex == 0) {
            intervalIndex = 1;
            clearInterval(callSlide, 100);
			icn.classList.replace('fa-pause','fa-play')
            abbr.title = 'Play Slide'
        }
        else {
            intervalIndex = 0;
            controlInterval()
			icn.classList.replace('fa-play','fa-pause')
            abbr.title = 'Pause Slide'
        }
		//console.log(icn)
    }
    const myHeaderSlider = val => {
		
			icn.classList.replace('fa-play','fa-pause')
        if (val === 'left') {
            index--
            setTimeout(setTxtAnimation, 10)
            controlInterval();
        }
        else if (val === 'right') {
            index++
            setTimeout(setTxtAnimation, 10)
            controlInterval();
        }
        else if (val != NaN && val != undefined) {
            index = val;
            controlInterval();
            setTimeout(setTxtAnimation, 10)
        }
        else {
            index++
            txtTimeout
        }
        if (index >= slideImg.length) {
            index = 0
        }
        else if (index < 0) {
            index = slideImg.length - 1
        }
        for (let i = 0; i < slideImg.length; i++) {
            slideImg[i].style.display = 'none';
            dot[i].style.background = 'transparent';
        }
        slideImg[index].style.display = 'block';
        dot[index].style.background = 'black';
        //console.log(index)
        setTimeout(setTxtAnimation, 1000);
    }

    function setTxtAnimation() {
        for (let a = 0; a < slideImg.length; a++) {
            txt[a].style.display = 'none';
        }
        txt[index].style.display = 'block'
    }
    return {
        myHeaderSlider: myHeaderSlider
        , intervalTime: intervalTime
        , dot: dot
    }
})();
let callSlide = (() => {
    let interval = setInterval(headerSlider.myHeaderSlider, headerSlider.intervalTime);
    const btn = document.querySelectorAll('#buttonHolder button');
    btn[0].setAttribute('onclick', 'headerSlider.myHeaderSlider("left")');
    btn[1].setAttribute('onclick', 'headerSlider.myHeaderSlider("right")');
    for (let j = 0; j < headerSlider.dot.length; j++) {
        headerSlider.dot[j].setAttribute('onclick', `headerSlider.myHeaderSlider(${j})`);
    }
    return interval
})();
//============================================================================
const testimonialSlide = (() => {
    const windowSlide = document.querySelectorAll('.innerSlideBody');
    const mobileSlide = document.querySelectorAll('.slide-body');
    const led = document.querySelectorAll('#TestimonialedHolder div');
    let slide;
    let index = 0;
    const mySliderFun = () => {
        for (let j = 0; j < led.length; j++) {
            led[j].style.display = 'none'
        }
        if (window.innerWidth > 790) {
            slide = windowSlide;
        }
        else {
            slide = mobileSlide
        }
        if (index >= slide.length) {
            index = 0;
        }
        for (let k = 0; k < windowSlide.length; k++) {
            windowSlide[k].style.display = 'flex';
            for (let a = 0; a < mobileSlide.length; a++) {
                mobileSlide[a].style.display = 'flex';
            }
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
            led[i].style.display = 'block'
            led[i].style.background = 'transparent'
        }
        slide[index].style.display = 'flex'
        led[index].style.background = 'black'
    }
    mySliderFun()
    const slider = (val) => {
        index++;
        if (val != NaN && val != undefined) {
            index = val;
            clearInterval(interval, 100)
            setTimeout((function () {
                interval = setInterval(slider, 8000)
            })(), 8000)
        }
        mySliderFun();
    }
    let interval = setInterval(slider, 10000);
    window.onresize = () => mySliderFun()
    for (let i = 0; i < led.length; i++) {
        led[i].setAttribute('onclick', 'testimonialSlide(' + i + ')');
    }
    return slider
})();
/*==== Form Validation =====*/

const formValidaton = (() =>{
	const name  = document.querySelectorAll('form input')[0];
	const email = document.querySelectorAll('form input')[1];
	const txtarea = document.querySelector('form textarea');
	const label = document.querySelectorAll('form label');
	
	
	name.placeholder = '';
	email.placeholder = '';
	txtarea.placeholder = '';
	
	(() =>{
		for(let i = 0; i < label.length; i++){
		label[i].style.display = 'block'
	}
	const formDiv = document.querySelectorAll('form div');
	
	for (let j = 0; j < formDiv.length; j++){
		formDiv[j].style.display = 'none';
	}
	})();
	
	const placeholderEffect_Active = (val,txt) =>{
		label[val].style.top = 0
		label[val].style.color = 'black'
		label[val].innerText = txt
	}
	const placeholderEffect_Reset = (val) =>{
		label[val].style.top = '2.66em'
		label[val].style.color = 'gray'
	}
	name.onfocus = () => { placeholderEffect_Active(0,'* Full Name')};
	email.onfocus = () => { placeholderEffect_Active(1,'* Email Address' )};
	txtarea.onfocus = () => { placeholderEffect_Active(2,'* Insert your Message Here')};
	
	name.onblur = () => {if (name.value == '' || name.value == ' '){
		placeholderEffect_Reset(0,'* Full Name')};
}
	email.onblur = () => {if (email.value == '' || email.value == ' '){
		placeholderEffect_Reset(1,'* Email Address' )};
}	
	txtarea.onblur = () => {if (txtarea.value == '' || txtarea.value == ' '){
		placeholderEffect_Reset(2,'* Insert your Message Here')};
}

	
	const submitBtn = document.querySelector('input[type=submit]') || document.querySelector('input[type=button]') || document.querySelector('form button');
	
	submitBtn.onclick  = () =>{
		'use strict'
		if (name.value === '' || name.value == ' ' || name.value.length < 4){
			placeholderEffect_Active(0,'Invalid name length or no fill')
			label[0].style.color = '#fa7e7e'
			name.style.borderColor = '#fa7e7e'
		}
		
		if (email.value === '' || email.value == ' ' || email.value.length < 4){
			placeholderEffect_Active(1,'Invalid email length or no fill')
			label[1].style.color = '#fa7e7e'
			email.style.borderColor = '#fa7e7e'
		}
		if (txtarea.value === '' || txtarea.value == ' '){
			placeholderEffect_Active(2,'No Fill Please Insert your message here')
			label[2].style.color = '#fa7e7e'
			txtarea.style.borderColor = '#fa7e7e'
			
			return true
		}
		
		return false
	}
	
})()


const mapAPI = (() =>{
	const map = document.querySelector('#map');

	try{
		function regular_map() {
    var var_location = new google.maps.LatLng(4.4320029, 7.1842994);
    var var_mapoptions = {
        center: var_location
        , zoom: 14
    };
    var var_map = new google.maps.Map(document.querySelector('#map'), var_mapoptions)
    var var_marker = new google.maps.Marker({
        position: var_location
        , map: var_map
        , title: "Nigeria"
    });
}
google.maps.event.addDomListener(window, 'load', regular_map);

	}catch(err){
		map.querySelector('h1').innerHTML = 'There was an <span>error</span> with the Map'
		console.warn(err)
	}
})()


