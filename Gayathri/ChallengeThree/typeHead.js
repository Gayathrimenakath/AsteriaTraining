var data = [
    {
        "countryName": 'Germany',
        "cities": [
            "Berlin",
            "Hamburg",
            "Frankfurt",
            "Cologne"
        ]
    },
    {
        "countryName": 'France',
        "cities": [
            "Paris",
            "Cannes",
            "Nice",
            "Lyon"
        ]
    }
]


$(function autoComplete() {
    $("input, div, #city").css({"margin-left": "40px", "margin-top": "40px"});
    $("#country").css({"margin-left": "15px", "margin-top": "40px"});
    
    //autocompletes the country name
    $( ".input-countries" ).autocomplete({
        source: function(req, add){
                    var countrynames = []
                    $.each(data, function(index, entry){
                        countrynames.push(entry.countryName);
                    });
                add(countrynames)
                }
    });

    $(".input-countries").on("change", function() {
        $.each(data, function(index, entry){
            if(entry.countryName === $(".input-countries").val()){

                //enables the city names field if country name is valid
                $(".input-cities").removeAttr('disabled');

                //autocompletes the city name
                $( ".input-cities" ).autocomplete({
                    source: function(req, add){
                                var citynames = [];
                                $.each(entry.cities, function(index, entry){
                                    citynames.push(entry);
                                });
                                add(citynames)
                            },
                    minLength: 0,
                    autoFocus: true,
                    select: function (event,ui){
                                var country = $(".input-countries").val();
                                $( "#output" ).text( ui.item.value + " is a city in " + country);
                            }
                });
            }

        });
            
    });
    
});
