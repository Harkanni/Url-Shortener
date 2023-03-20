console.log("Javascript")
var PageObj = {
	sidebarIsViscible: false,
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
			
			this.SIDEBAR.setAttribute("data-menu", "on")
			this.sidebarIsViscible = false
		}
		
	},
}

// USED THE CALL METHOD TO SET THE "this" keyword to the PageObj
PageObj.menuBar.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
PageObj.togleBtn.addEventListener("click", () => {
	PageObj.Toggle_Sidebar.call(PageObj)
})
