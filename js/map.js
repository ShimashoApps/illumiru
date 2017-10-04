var map;
var marker;
var infoWindow;
function initMap() {
    
    
       
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:34.8498000, lng: 138.252500},
          zoom: 15
        });
        var infoWindow = new google.maps.InfoWindow({map: map});zz

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('あなたは今ここにいます。');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
      
     
     
    
    
    
   var marker = new google.maps.Marker({
    position: {lat:34.8498000, lng:138.252500},
    map: map,
    title: '藤枝駅北口広場'
                
  });
  
  
  
  var marker = new google.maps.Marker({
    position: {lat:34.8490000, lng: 138.252500},
    map: map,
    title: '藤枝駅南口広場'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.847782, lng:  138.253561},
    map: map,
    title: '藤枝駅南通り'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.9193000,lng: 138.2825800},
    map: map,
    title: '岡部宿大旅籠柏屋'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8751221,lng: 138.2524786},
    map: map,
    title: '蓮華寺池公園'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8307965, lng: 138.1739739},
    map: map,
    title: '島田市駅前'
  });
  

  var marker = new google.maps.Marker({
    position: {lat: 34.8313728,lng: 138.1737687},
    map: map,
    title: '島田市駅前緑地'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat:34.8327585,lng: 138.1762455},
    map: map,
    title: '帯通り'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8191684,lng: 138.1251899},
    map: map,
    title: '金谷駅前'
  });
  
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8361591,lng: 138.2043456},
    map: map,
    title: '六合駅前'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.9734533,lng: 138.3820972},
    map: map,
    title: '青葉シンボルロード'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 35.0182562,lng: 138.489236},
    map: map,
    title: '清水港線跡遊歩道'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8717453,lng: 138.3181213},
    map: map,
    title: '焼津駅南口駅前広場'
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 34.8361591,lng: 138.2043456},
    map: map,
    title: '六合駅前'
  });
    }

