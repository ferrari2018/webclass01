function calculate(){

	//alert(document.getElementById('input_num').value);
	let result2="";
	let result16="";

	
	result2 = change(parseInt(document.getElementById('input_num').value),2);

	result16=change(parseInt(document.getElementById('input_num').value),16);

	document.getElementById('result_area').innerHTML='二进制 :'+result2+'<br/>十六进制:'+result16;

} 


function change(iInput,iFactor){
	result="";
	while (iInput>=iFactor){
		iYu=iInput % iFactor
		iInput=Math.floor(iInput / iFactor);
		switch(iYu){
			case 10:
				result='a'+result;
				break;
			case 11:
				result='b'+result;
				break;
			case 12:
				result='c'+result;
				break;
			case 13:
				result='d'+result;
				break;
			case 14:
				result='e'+result;
				break;
			case 15:
				result='f'+result;
				break;
			
			default:
				result=iYu+result;
		}
		
	}
	switch(iInput){
		case 10:
			result='a'+result;
			break;
		case 11:
			result='b'+result;
			break;
		case 12:
			result='c'+result;
			break;
		case 13:
			result='d'+result;
			break;
		case 14:
			result='e'+result;
			break;
		case 15:
			result='f'+result;
			break;
		
		default:
			result=iInput+result;
	}

	return result;

}
/*
function changeTo16(iInput){
	result="";
	while (iInput>=16){
		iYu=iInput % 16
		iInput=Math.floor(iInput / 16);
		result=iYu+result;
	}
}*/
