var keyList = "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var temp = '';

function generatepass(plength){
	temp=''

	for(i=0;i<plength;i++)
		temp+=keyList.charAt(Math.floor(Math.random()*keyList.length))
		return temp
}

function populateForm(enterlength){
	document.pgenerate.output.value = generatepass(enterlength)
}