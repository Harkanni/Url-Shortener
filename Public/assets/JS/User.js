console.log("User.js file imported")
export default class _User {
	constructor(){
		this.length = 0
		this.URLS = {}
	}
	ADD_TO_RECORDS() {
	let child = 	`<div class="record d-flex flex-col justify-content-between bg-dark mb-3">
						<div>
							<p class="link-text">www.google.com</p>
							<div class="d-flex">
								<i class="fa fa-external-link mr-2" style="color: #fd601e;"></i>
								<a href="#">shorty.test/u/fdfg</a>
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
						</div>
					</div>`
	}
}