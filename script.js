function firstNonRepeatedChar(str) {
 // Write your code here
	str.toLowerCase();
	const alp={};
	for(let i of str){
		if(i>='a' && i<='z'){
			if(i in alp)
				alp[i]=alp[i]+1;
			else
				alp[i]=1;
		}
	}
	for(let i in alp){
		if(alp[i]==1)
			return i;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
