function GST(taxPercent) {

    var billAmount = {
        total: 0,
        gross: 0,
        tax: 0,
    };

    if (taxPercent === undefined) {

        throw new Error("taxpercent is mandatory");
    }

    function Biller(amount, CustomTaxPercent) {

        var typeConversion = parseFloat(CustomTaxPercent);
        var typeConversiona = parseFloat(taxPercent);

        if (CustomTaxPercent == undefined) {
            billAmount.tax = billAmount.tax + ((typeConversiona * amount) / 100);

        } else {

            billAmount.tax = billAmount.tax + ((typeConversion * amount) / 100);
        }

        billAmount.gross = billAmount.gross + amount;
        billAmount.total = billAmount.gross + billAmount.tax;

        return billAmount;

    }

    return Biller;

}

var Biller = GST('9.5%');
Biller(100);
Biller(100, '5%');