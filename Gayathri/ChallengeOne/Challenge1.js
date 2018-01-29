function GST(taxper){
	var bill = {
		gross: 0,
	    total: 0,
	    caltax: 0};

	taxper = parseFloat(taxper);

	//throw an error if the no.of arguments is not equal to 1
	try{
		if(arguments.length !== 1){
			throw "error1";
		}
	} 
	catch(err){  
 		if(err == "error1"){  
 			console.log("conflict in the no.of arguments");  
 			return;
 		}
 	}

 	//calculate total, gross and tax
	function biller(amt, customtax){
		if(arguments.length === 2){
			bill.caltax = bill.caltax + ((parseFloat(customtax)*amt)/100);
		}
		else{
			bill.caltax = bill.caltax + ((taxper*amt)/100);
		}

		amt = parseFloat(amt);
		bill.gross = amt + bill.gross;
		bill.total = bill.gross + bill.caltax;

		bill.total = roundToOneDecimal(bill.total);
		bill.gross = roundToOneDecimal(bill.gross);
		bill.caltax = roundToOneDecimal(bill.caltax);

		return bill;
	}

	return biller;
}

//contain only one decimal point
function roundToOneDecimal(value){
	return Number(Math.round(value + 'e1') + 'e-1');
}
