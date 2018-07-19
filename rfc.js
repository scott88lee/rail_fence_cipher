let numOfRails = 4;
let cipher = [];
let qString = process.argv[2]

//set up number of rails inside cipher
//Array of strings
for (let i=0; i<numOfRails; i++){
	cipher.push('');
}

let counter = 0;
let dir = true;

while (counter <= qString.length){
	if (dir) {
		for (let i=0; i<numOfRails; i++){
			cipher[i] += qString.charAt(counter);
			counter++;
		}
		dir = !dir;
	} else {
		for (let k=numOfRails-2; k>0; k--){
			cipher[k] += qString.charAt(counter);
			counter++;	
		}
		dir = !dir;
	}
}

console.log(cipher);

