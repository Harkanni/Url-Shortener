import _User from "./User.js"

const User = new _User()
console.log(User)
var PageObj = {
	getUrlBtn: document.querySelector("#submit"),
	sidebarIsViscible: false,
	URL: "http://localhost:8080/bitly",
	SIDEBAR: document.querySelector(".sidebar"),
	menuBar: document.querySelector(".hambugger-menu"),
	togleBtn: document.querySelector(".togleBtn"),
	Toggle_Sidebar: function (){
		if(this.sidebarIsViscible == false){
			this.SIDEBAR.classList.add("viscible")			
			this.sidebarIsViscible = true
			this.SIDEBAR.setAttribute("data-menu", "on")
		}
		else {
			this.SIDEBAR.classList.remove("viscible")			
			this.SIDEBAR.setAttribute("data-menu", "off")
			this.sidebarIsViscible = false;
		}
		
	},
	ShortenLink: async function(link){
		await fetch(this.URL, {
			headers: {
				"content-type": "application/json",
				"URL": link
			}
		})
		.then((res) => res.json())
		.then((data) => {
			let result = document.querySelector("#shortURL")
			result.innerHTML = data.shortUrl
			console.log(data)
			$('#exampleModalCenter').modal()
			return data.shortUrl
		})
		.then((data) => {
			User.URLS[link] = data
			console.log(User)
		})
	}
}

// USED THE CALL METHOD TO SET THE "this" keyword to the PageObj Object;
PageObj.menuBar.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
PageObj.togleBtn.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
PageObj.getUrlBtn.addEventListener("click", (e) => {
	e.preventDefault()
	let link = document.querySelector("#url").value
	console.log("click", link)
	PageObj.ShortenLink.call(PageObj, link)
})



