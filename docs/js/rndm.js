class Randomizer {
	
	element;
	newString;
	defaultString;
	characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%+=*';
	stringRandomArr;
	speed;

	constructor(element, speed, newString){
		this.element = element;
		this.defaultString = element.innerHTML;
		this.speed = speed || 75;
		if(newString) this.setNewString(newString);
	}
	getMaxNumberOfCharsForString(str){
		return Math.min(this.speed, str.length);
	}
	getRandomCharacters(_n){
		let n = _n || 1;
		let randomCharacters = "";
		for (var i = n - 1; i >= 0; i--) {
			randomCharacters += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
		}
		return randomCharacters;
	}
	replaceCharacter(str, i, c) {
		const arr = str.split("");
		arr[i] = c;
		return arr.join("");
	}
	removeCharacter(str, i) {
		const arr = str.split("");
		if(i > arr.length) return str;
		arr.splice(i, 1);
		return arr.join("");
	}

	setNewString(newString){

		this.newString = newString || this.defaultString;

		this.stringRandomArr = Array(this.newString.length);
		for (var i = this.stringRandomArr.length - 1; i >= 0; i--) {
			this.stringRandomArr[i] = this.getRandomCharacters();
		}

		this.transition();
	}

	transition(){

		let currentString = this.element.innerHTML;

		if(currentString.length > this.newString.length) currentString = currentString.slice(0, currentString.length - 1);
		if(currentString.length < this.newString.length) currentString += this.getRandomCharacters();
		
		let maxNumberOfChars = this.getMaxNumberOfCharsForString(currentString);
		let numberOfCharsToReplace = Math.round(Math.random()*maxNumberOfChars); //chars to replace

		for (let i = numberOfCharsToReplace - 1; i >= 0; i--) {
			let index = Math.floor(Math.random()*currentString.length);
			if(currentString[index] != this.newString[index]){
				let newChar = (i%2 && this.stringRandomArr.length >= 0) ? this.stringRandomArr.pop() : this.newString[index];
				currentString = this.replaceCharacter(currentString,index,newChar);
			}
		}

		if(currentString != this.newString) {
			const self = this;
			setTimeout(function(){self.transition()},50);
		};

		this.element.innerHTML = currentString;

	}




}