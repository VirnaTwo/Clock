const wait_s = async ms => new Promise(done => setTimeout(done, ms));


async function Horloge() {
	while (true) {
		document.getElementsByTagName('circle')[1].style.strokeDashoffset = window.innerWidth/2.1223-new Date().getHours()/24*window.innerWidth/2.1223
		document.getElementsByTagName('circle')[1].style.stroke = `rgb(${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255}, ${new Date().getHours()/24*255})`
		document.getElementsByTagName('text')[0].textContent = `${new Date().getHours()}h`

		document.getElementsByTagName('circle')[3].style.strokeDashoffset = window.innerWidth/2.1223-new Date().getMinutes()/60*window.innerWidth/2.1223
		document.getElementsByTagName('circle')[3].style.stroke = `rgb(${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255})`
		document.getElementsByTagName('text')[1].textContent = `${new Date().getMinutes()}m`

		document.getElementsByTagName('circle')[5].style.strokeDashoffset = window.innerWidth/2.1223-new Date().getSeconds()/60*window.innerWidth/2.1223
		document.getElementsByTagName('circle')[5].style.stroke = `rgb(${new Date().getSeconds()/60*255}, ${new Date().getMinutes()/60*255}, ${new Date().getHours()/24*255})`
		document.getElementsByTagName('text')[2].textContent = `${new Date().getSeconds()}s`

		// document.body.style = `background-color: rgb(${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255})`
		await wait_s(1000)
	}
}

Horloge()