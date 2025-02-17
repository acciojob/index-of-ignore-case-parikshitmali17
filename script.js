function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let boole=0;
	for (let index = 0; index < s2.length; index++) {
		for (let index1 = 0; index1 < s1.length; index1++) {
			if(s1[index]==s2[index]){
				return index
			}else{
				boole=-1
			}
		}
	}

	return (index) ? index : boole
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
