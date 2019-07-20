window.onload=function (){
	var currentAddr = document.getElementsByClassName('currentAddress')[0];
	var select = document.getElementsByClassName('select')[0];
	var address = select.children;
	for(var i=0;i<address.length;i++){
		address[i].onclick = function(){
			currentAddr.innerHTML = this.innerHTML;
		}
	}

	var banner = document.getElementsByClassName('wrapper')[0];
	var imgs = banner.children;
	var imgNav = document.getElementsByClassName('imgNav')[0];
	var indInfo = imgNav.children;
	var imgIndex = 0;
	var timer;
	timer = setInterval(autoPlay,1500);
	function autoPlay(){
		imgs[imgIndex].style.display = "none";
		// ++ imgIndex;
		// if(imgIndex==img.length){
		// 	imgIndex =0;
		// }
		imgIndex = ++ imgIndex == imgs.length ? 0: imgIndex;
		imgs[imgIndex].style.display = 'block';

		for(var i=0;i<indInfo.length;i++){
			indInfo[i].style.background = 'gray';
		}
		indInfo[imgIndex].style.background = 'red';
	}

	banner.onmouseover = function(){
		clearInterval(timer);
	};

	banner.onmouseout = function(){
		timer = setInterval(autoPlay,1000);
	};










};