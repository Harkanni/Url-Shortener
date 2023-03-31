console.log("User.js file imported")
export default class _User {
	constructor(){
		this.length = 0
		this.URLS = {}
	}
	ADD_TO_RECORDS(parent) {
	
	}
	GET_RECORDS(id){
		return this.URLS[id]
	}
}