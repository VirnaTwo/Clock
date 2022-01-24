const wait_s = async ms => new Promise(done => setTimeout(done, ms));


async function Horloge() {
    const time = document.getElementById('time')
    const date = document.getElementById('date')

	while (true) {
		time.textContent = `${new Date().getHours()}h : ${new Date().getMinutes()}m : ${new Date().getSeconds()}s`
		date.textContent = `${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`
		
		document.getElementById('nth-child1').style = `stroke-dashoffset: ${(100 * 6) - ((100 * 6) * (new Date().getSeconds()/60*100)) / 100}`
		document.getElementById('nth-child2').style = `stroke-dashoffset: ${(100 * 6) - ((100 * 6) * (new Date().getSeconds()/60*100)) / 100}`

		// document.body.style = `background-color: rgb(${new Date().getHours()/24*255}, ${new Date().getMinutes()/60*255}, ${new Date().getSeconds()/60*255})`
		await wait_s(1000)
	}
}

Horloge()

