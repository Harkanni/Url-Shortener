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
		fetch(this.URL, {
			headers: {
				"content-type": "application/json",
				"URL": link
			}
		})
		.then((res) => res.json())
		.then((data) => {
			let result = document.querySelector("#shortURL")
			result.innerHTML = data.shortUrl
			$('#exampleModalCenter').modal()
			return data.shortUrl
		})
		.then((data) => {
			User.URLS[link] = data;
			this.updateDom(document.querySelector(".history-records .row"), link, data)
			console.log(User)
		})
	},
	updateDom(parent, link, data){
		let child = document.createElement("div")
		child.setAttribute("class", "record d-flex flex-col justify-content-between bg-dark mb-3")
		child.innerHTML = `
							<div>
								<p class="link-text">${link.slice(0, link.indexOf("com") + 3) + "..."}</p>
								<div class="d-flex">
									<i class="fa fa-external-link mr-2" style="color: #fd601e;"></i>
									<a href="#">${data}</a>
								</div>
							</div>							
							
							<div class="record-info">
								<div class="views d-flex justify-content-between">
									<i class="fa fa-eye mr-2"></i>
									<p class="mb-0">6134</p>	
								</div>						
								<p class="record-time mb-0">6 seconds</p>
								<i class="fa fa-copy" style="color: #009bfe"></i>
								<i class="fa fa-trash-alt" style="color: #fd601e;">delete</i>
							</div>`
		parent.appendChild(child)
		console.log("Parent ", parent)
	}
}
window.addEventListener("load", (event) => {
  setTimeout(() => {
  	let preLoader = document.querySelector(".loading_animation");
  	preLoader.remove()
  }, 3000)
});
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



