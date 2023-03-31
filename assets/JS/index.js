import _User from "./User.js"
const DEV_URL = "http://localhost:8080/bitly";
const PRODUCTION_URL = "https://crimson-fawn-hem.cyclic.app/bitly"

const User = new _User()
console.log(User)
var PageObj = {	
	modalCopyButton: document.querySelector(".modal .close"),
	shortenedURLLink: document.querySelector("#shortURL"),
	sidebarIsViscible: false,
	URL: DEV_URL,
	getUrlBtn: document.querySelector("#submit"),
	preLoader: document.querySelector(".loading_animation"),
	SIDEBAR: document.querySelector(".sidebar"),
	menuBar: document.querySelector(".hambugger-menu"),
	toggleBtn: document.querySelector(".toggleBtn"),
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
			console.log(data)
			let result = document.querySelector("#shortURL")
			result.innerHTML = data.shortUrl
			$('#exampleModalCenter').modal()
			return data.shortUrl
		})
		.then((data) => {
			User.URLS[link] = data;
			this.updateDom(document.querySelector(".history-records .row"), link, data)
			console.log(User)
			document.body.classList.add("remove_preloader")
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
	},
	copyText(element){
		navigator.clipboard.writeText(element.innerHTML);
		alert(element.innerHTML)
		let toast = $('.toast')
		console.log(toast)
		toast.innerHTML = "Go go go!!"
		$('.toast').toast('show')
	}
}
window.addEventListener("load", (event) => {
	console.log(PageObj.modalCopyButton)
  setTimeout(() => {
  	document.body.classList.add("remove_preloader")
  }, 4000);
	$('.owl-carousel').owlCarousel();
});
// USED THE CALL METHOD TO SET THE "this" keyword to the PageObj Object;
PageObj.menuBar.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
PageObj.toggleBtn.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
PageObj.getUrlBtn.addEventListener("click", (e) => {
	e.preventDefault()
	document.body.classList.remove("remove_preloader")
	let link = document.querySelector("#url").value
	console.log("click", link)
	PageObj.ShortenLink.call(PageObj, link)
})
PageObj.modalCopyButton.addEventListener("click", () => {
	console.log("clicked")
	PageObj.copyText(PageObj.shortenedURLLink)
})




