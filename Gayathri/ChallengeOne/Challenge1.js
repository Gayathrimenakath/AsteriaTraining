function GST(taxper){
	var gross = 0,
	    total = 0,
	    caltax = 0;
	try{
		if(arguments.length !==1){
			throw "error1";
		}
	} 
	catch(err){  
 		if(err=="error1"){  
 			console.log("conflict in the no.of arguments");  
 			return;
 		}
 	}

	taxper = parseFloat(taxper.slice(0,-1));

	function biller(amt, customtax){
		if(arguments.length ===2){
			console.log(caltax);
			caltax = caltax+ parseFloat(customtax.slice(0,-1));
			console.log(caltax);
		}
		else{
			caltax = caltax + taxper;
		}

		amt =parseFloat(amt);
		gross = amt + gross;
		total = gross + caltax;

		console.log({
			Total: total.toFixed(1),
			Gross: gross.toFixed(1),
			Tax: caltax});
	}

	return biller;
}

var biller1 = GST('10%');
var biller2 = GST('20%');

biller1(100); // will return {gross: 100, tax: 10, total: 110}
biller2(100); // will return {gross: 100, tax: 20, total: 120}

biller1(200, '30%'); // will return {gross: 300, tax: 70, total: 370}
biller2(200, '50%'); // will return {gross: 300, tax: 120, total: 420}

/*var biller1 = GST('9.5%');


biller1(100); 
biller1(100); 

biller1(100, '0%'); 
biller1(100, '5%');*/
