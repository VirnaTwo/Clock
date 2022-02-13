function Clock() {
	let CirclesAndDate = [
		[document.getElementsByTagName('circle')[1], new Date().getHours()/24*100,
		`rgb(${new Date().getMinutes()/60*255},${new Date().getSeconds()/60*255}, ${new Date().getHours()/24*255})`,
		document.getElementsByTagName('text')[0],
		`${new Date().getHours()}h`],
	
		[document.getElementsByTagName('circle')[3], new Date().getMinutes()/60*100,
		`rgb(${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255})`,
		document.getElementsByTagName('text')[1],
		`${new Date().getMinutes()}m`],
	
		[document.getElementsByTagName('circle')[5], new Date().getSeconds()/60*100,
		`rgb(${new Date().getSeconds()/60*255}, ${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255})`,
		document.getElementsByTagName('text')[2],
		`${new Date().getSeconds()}s`]
	]

	for (const CircleAndDate of CirclesAndDate) {
		CircleAndDate[0].style.strokeDashoffset = 100-CircleAndDate[1]
		CircleAndDate[0].style.stroke = CircleAndDate[2]
		CircleAndDate[3].textContent = CircleAndDate[4]
	}
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementsByClassName("windowDragHeader")[0]) {
		document.getElementsByClassName("windowDragHeader")[0].onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}
  
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
  
dragElement(document.getElementsByClassName("windowDrag")[0]);
  
let SettingWindowStatus = false
function ToggleSetting(ele=document.getElementsByClassName('windowDrag')[0]) {
	if (SettingWindowStatus) {
		ele.style = "display: none;"
		SettingWindowStatus = false
	}
	else {
		ele.style = "display: flex;"
		SettingWindowStatus = true
	}
}