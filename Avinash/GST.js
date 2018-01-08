function GST(taxPercent){
	if(taxPercent===undefined){
		return false;
	}
	else
		 Biller(100,taxPercent);
	   }
var grossAmount=0;
var taxPercent = '9.5%';
function Biller(amount,CustomTaxPercent){
var totalAmount;
var typeConversion = parseInt(CustomTaxPercent);
var typeConversiona = parseInt(taxPercent);
grossAmount = grossAmount + amount;

if(CustomTaxPercent==undefined){
	typeConversiona = typeConversiona * 2;

}
else
typeConversiona = typeConversiona + typeConversion;
if(CustomTaxPercent==undefined){

totalAmount = grossAmount + typeConversiona;
}
else
	totalAmount = grossAmount + typeConversiona;
console.log({
	total : totalAmount,
	gross : grossAmount,
	tax   : typeConversiona,
})


}
var x = Biller(100);
var y = Biller(100,'12.34%');

