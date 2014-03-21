// Make Foundation Go!
$(document).foundation();
// Docs at http://simpleweatherjs.com
/*
var canvas = document.getElementById('pinstripes'),
    ctx = canvas.getContext('2d'),
    body = document.body,
    html = document.documentElement,
    canvas_height = 2600,
    canvas_width = 2600,
    x_spacing = 50,
    y_spacing = 2,
    x, y, fill, opacity;

canvas.width = canvas_width;
canvas.height = canvas_height;

for (x = 0; x < canvas_width; x += x_spacing) {
  for (y = 0; y < canvas_height; y += y_spacing) {
    fill = Math.floor(Math.random() * 128);
    opacity = Math.random() / 2;
    
    ctx.fillStyle = 'rgba(' + fill + ',' + fill + ',' + fill + ',' + opacity + ')';
    ctx.fillRect(x, y, 1, 1);
    }
}
wanted to do a pinstripe background and found it on a codepen, 
but couldn't get it implemented to where it would show*/




/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('St. Louis',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}


/*

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('#getWeather button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather input').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather input').val('');
  
});

*/