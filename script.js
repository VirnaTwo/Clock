const wait_s = async ms => new Promise(done => setTimeout(done, ms));


async function Horloge() {
    const time = document.getElementById('time')
    const date = document.getElementById('date')

	while (true) {
		time.textContent = `${new Date().getHours()}h : ${new Date().getMinutes()}m : ${new Date().getSeconds()}s`
		date.textContent = `${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`

		document.getElementsByTagName('circle')[1].style.strokeDashoffset = 440-new Date().getHours()/59*440
		document.getElementsByTagName('text')[0].textContent = `${new Date().getHours()} Hours`

		document.getElementsByTagName('circle')[3].style.strokeDashoffset = 440-new Date().getMinutes()/59*440
		document.getElementsByTagName('text')[1].textContent = `${new Date().getMinutes()} Minutes`

		document.getElementsByTagName('circle')[5].style.strokeDashoffset = 440-new Date().getSeconds()/59*440
		document.getElementsByTagName('text')[2].textContent = `${new Date().getSeconds()} Seconds`

		//document.body.style = `background-color: rgb(${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255})`
		await wait_s(1000)
	}
}

Horloge()

