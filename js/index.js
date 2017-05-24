//slider stuff!//

$(function(){
  $('#defaultslide').slider({ 
    max: 10,
    min: 0,
    value: 1,
    slide: function(e,ui) {
      $('#currentval').html(ui.value);
    }
  });
  
  $('#rangeslider').slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 90, 290 ],
    slide: function( event, ui ) {
      $('#rangeval').html(ui.values[0]+" - "+ui.values[1]);
    }
  });
});

//slider stuff end//



//calculation function begin//



//set price variables
   var regionPrice;
   var typePrice;
   var resurfacePrice;
   var surfacePrice;   

//pool type stuff

var poolType = ["above-ground", "in-ground", "other"];

  $('form').on('change', '#pool-type',function(){

    var poolType = $("input[name='pool-type']:checked").val();

    if(poolType == 'above-ground') {
      typePrice="100";
      console.log(typePrice);
    }

    else if
      (poolType == 'in-ground') {
      typePrice="200";
      console.log(typePrice);
    }

    else if 
      (poolType == 'other') {
      typePrice="0";
      console.log(typePrice);
    }

  });

//surface type stuff

var surfaceType = ["pebble", "plaster", "other", "quartz"];

  $('form').on('change', '#surface-type',function(){

    var surfaceType = $("input[name='surface-type']:checked").val();

    if(surfaceType == 'pebble') {
      surfacePrice="500";
      console.log(surfacePrice);
    }
    else if 
      (surfaceType == 'plaster') {
      surfacePrice="100";
      console.log(surfacePrice);

    }
    else if 
      (surfaceType == 'other') {
      surfacePrice="0";
      console.log(surfacePrice);
    }

  });

//region stuff

var regionType = ["Select Region","Northeast", "Southeast", "West", "Midwest", "Southwest"];

for(i=0;i<regionType.length;i++) {
    $('#region-type').append('<option value="' + regionType[i] + '">' + regionType[i] + '</option>');
  }

  $('form').on('change', '#region-type', function(){
    var regionType = $('#region-type').val();
    if(regionType == 'Northeast') {
    regionPrice="500";
    console.log(regionPrice);
    }
    else if (regionType == 'Southeast') {
    regionPrice="600";
    console.log(regionPrice);
    }
    else if (regionType == 'West') {
    regionPrice="900";
    console.log(regionPrice);
    }
    else if (regionType == 'Midwest') {
    regionPrice="1000";
    console.log(regionPrice);

    }
    else if (regionType == 'Southwest') {
    regionPrice="2000";
    console.log(regionPrice);
    }

  });

//get total

$("#submit-btn").click()

var totalPrice = typePrice + surfacePrice + regionPrice
console.log(totalPrice)



