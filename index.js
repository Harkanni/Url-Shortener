console.log("Javascript")
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
		await fetch(this.URL)
		.then((res) => {
			let data = res.json()
			console.log(data)
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
	console.log("click")
	PageObj.ShortenLink.call(PageObj)
})



