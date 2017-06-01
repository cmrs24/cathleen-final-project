$(document).ready(function(){


//hide what should be hidden

$(".hide").hide();


//set price variables
   var regionPrice = 0;
   var typePrice = 0; 
   var surfacePrice = 0; 
   var resurfacePrice = 0;

//pool type calculations
var poolType = ["above-ground", "in-ground", "other"];

$('form').on('change', '#pool-type',function(){

  var poolType = $("input[name='pool-type']:checked").val();

  if(poolType == 'above-ground') {
    typePrice = 100;
  }

  else if
    (poolType == 'in-ground') {
    typePrice = 200;
  }

  else if 
    (poolType == 'other') {
    typePrice = 0;
  }

});

//resurface price
var resurfaceType = ["1-3", "3-6", "other"];

$('form').on('change', '#resurface-year',function(){

  var resurfaceType = $("input[name='resurface-year']:checked").val();

  if(resurfaceType == '1-3') {
    resurfacePrice = 1000;
  }

  else if
    (resurfaceType == '3-6') {
    resurfacePrice = 500;
  }

  else if 
    (resurfaceType == '7') {
    resurfacePrice = 200;
  }

});

//surface type calculations
var surfaceType = ["pebble", "plaster", "other", "quartz"];

  $('form').on('change', '#surface-type',function(){

    var surfaceType = $("input[name='surface-type']:checked").val();

    if(surfaceType == 'pebble') {
      surfacePrice=500;
    }
    else if 
      (surfaceType == 'plaster') {
      surfacePrice=100;
    }
      else if 
      (surfaceType == 'quartz') {
      surfacePrice=100;
    }
    else if 
      (surfaceType == 'other') {
      surfacePrice=0;
    }

  });

//region type calculations
var regionType = ["Select Region","Northeast", "Southeast", "West", "Midwest", "Southwest"];

for(i=0;i<regionType.length;i++) {
    $('#region-type').append('<option value="' + regionType[i] + '">' + regionType[i] + '</option>');
  }

  $('form').on('change', '#region-type', function(){
    var regionType = $('#region-type').val();
    if(regionType == 'Northeast') {
      regionPrice = 500;
    }
    else if (regionType == 'Southeast') {
      regionPrice = 600;
    }
    else if (regionType == 'West') {
    regionPrice = 900;
    }

    else if (regionType == 'Midwest') {
    regionPrice = 1000;
    }

    else if (regionType == 'Southwest') {
    regionPrice = 2000;
    }
  });


//get total price, calculate savings, and show savings on button click
  $( "#submit-btn" ).click(function(e){
      e.preventDefault();
        var totalPrice = typePrice + surfacePrice + regionPrice + resurfacePrice;
        var priceWithoutFiberTech = (100 + totalPrice) * 5;
        var priceWithFiberTech = (500 + totalPrice);
        var totalSavings = priceWithoutFiberTech - priceWithFiberTech;

        $(".hide").html("By investing in FibreTech you will save a total of $" + totalSavings + " over the next 25 years!");
        $(".hide").slideDown();
        $("#submit-btn").hide();
    });


});





