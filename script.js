    var exactTemp = (data.main.temp).toFixed(2)+'°C';
    var maxTemp = (data.main.temp_max).toFixed(2)+'°C';
    var minTemp = (data.main.temp_min).toFixed(2)+'°C';
    var pres_bar = (data.main.pressure).toLocaleString() + 'mbar';
    var windSpeed_kmh = ((data.wind.speed)/(1.609344)).toFixed(2)+'kmh';
   
    
    //Imperial System Unit
    var fTemp = Math.round((data.main.temp,5)*(9/5)+32)+'°F';
    var exact_fTemp = ((data.main.temp*(9/5)+32)).toFixed(2)+'°F';
    var max_fTemp = ((data.main.temp_max*(9/5)+32)).toFixed(2)+'°F';
    var min_fTemp = ((data.main.temp_min*(9/5)+32)).toFixed(2)+'°F';
    var pres_psig = (data.main.pressure/14.50377).toLocaleString() + 'psig';
    var windSpeed_mph = (data.wind.speed)+'mph';
    
    
    
    var humid = data.main.humidity;
    
    
    var desc = data.weather[0].description; 
    var shortDesc = data.weather[0].main;
    var icon = data.weather[0].icon;
    var lat = data.coord.lat;
    var lon = data.coord.lon;
   
    var windDeg = data.wind.deg;
    var weatherData;

      }
    }
  });
  */
  //Back to Top Function;
  /*
  $('.back').click(function backtoTop(){
  //Back to Top Button;
    function backtoTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      smoothScroll(event);
     
    };
   
  });
  
  
  /*
  var marginY = 0;
  var destination = 0;
  var scrollSpeed = 10;
  var scroller = null;
  
  $('#scrollDown').click(function smoothScroll(scrollToID){
    
    destination = document.getElementById(scrollToID).offsetTop;
    
    scroller = setTimeout(function(){
      smoothScroll(scrollToID);
    }, 1); //function called every 1 mSec);
    
    marginY = marginY - scrollSpeed;
    
    if(marginY >= destination){
      clearTimeout(scroller);
    }
    window.scroll (0, marginY);
  });
  return false;
                 
*/                  
});//End of Tasks

/*////Version 2
1. Smooth scroll
2. Speech bubble (Click to Convert Unit)
*/
