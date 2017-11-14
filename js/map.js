var map;
var marker;
var infoWindow;
var marker;

function initMap()
{
    var map = new google.maps.Map(document.getElementById('map'),
    {
        center:
        {
            lat: 34.927322,
            lng: 138.319761
        },
        zoom: 10
    });
    var infoWindow = new google.maps.InfoWindow(
    {
        map:map
    });
    // Try HTML5 geolocation.
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('あなたは今ここにいます。');
            map.setCenter(pos);
        }, function()
        {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }
    else
    {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos)//Error: The Geolocation service failed.
    {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? '！エラー！<br/>位置情報を取得することが出来ませんでした。<br/>位置情報がオフになっていませんか？'
        : '！エラー！<br/>あなたの端末はこのサービス<br/>に対応していません。\'t support geolocation.');
}
   
    var infoWindow2 = new google.maps.InfoWindow(
    {
        content: '藤枝駅北口広場</br><a href="http://maps.google.com/maps?daddr=34.8490000,138.252500&saddr="pos"&dirflg=d&t=m" onclick="click1">現在地からルート検索</a></br><a href="rumisuta.html">もっと見る</a>'
    });
     var infoWindow3 = new google.maps.InfoWindow(
    {
        content: '藤枝駅南口広場</br><a href="http://maps.google.com/maps?daddr=34.8490000,138.252500&saddr="pos"&dirflg=d&t=m" onclick="click2">現在地からルート検索</a></br><a href="rumisuta.html">もっと見る</a>'
    });
    var infoWindow4 = new google.maps.InfoWindow(
    {
        content: '藤枝駅南通り</br><a href="http://maps.google.com/maps?daddr=34.847782, 138.25356&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="rumisuta.html">もっと見る</a>'
    });
    var infoWindow5 = new google.maps.InfoWindow(
    {
        content: '岡部大旅籠柏屋</br><a href="http://maps.google.com/maps?daddr=34.9193000,138.2825800&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="okabe.html">もっと見る</a>'
    });
    var infoWindow6 = new google.maps.InfoWindow(
    {
        content: '蓮華寺池公園</br><a href="http://maps.google.com/maps?daddr=34.8751221,138.2524786&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="rengeji.html">もっと見る</a>'
    });
    var infoWindow7 = new google.maps.InfoWindow(
    {
        content: '島田市駅前</br><a href="http://maps.google.com/maps?daddr=34.8307965,138.1739739&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="simaeki.html">もっと見る</a>'
    });
    var infoWindow8 = new google.maps.InfoWindow(
    {
        content: '島田市駅前緑地</br><a href="http://maps.google.com/maps?daddr=34.8313728,138.1737687&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="ryokuti.html">もっと見る</a>'
    });
    var infoWindow9 = new google.maps.InfoWindow(
    {
        content: 'おび通り</br><a href="http://maps.google.com/maps?daddr=34.8327585, 138.1762455&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="obidori.html">もっと見る</a>'
    });
    var infoWindow10 = new google.maps.InfoWindow(
    {
        content: '金谷駅前</br><a href="http://maps.google.com/maps?daddr=34.8191684,138.1251899&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="kanaya.html">もっと見る</a>'
    });
    var infoWindow11 = new google.maps.InfoWindow(
    {
        content: '六合駅前</br><a href="http://maps.google.com/maps?daddr=34.8361591,138.2043456&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="rokugou.html">もっと見る</a>'
    });
    var infoWindow12 = new google.maps.InfoWindow(
    {
        content: '青葉シンボルロード</br><a href="http://maps.google.com/maps?daddr=34.9734533,138.3820972&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="aoba.html">もっと見る</a>'
    });
    var infoWindow13 = new google.maps.InfoWindow(
    {
        content: '清水港線跡遊歩道</br><a href="http://maps.google.com/maps?daddr=lat: 35.0182562,138.489236&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="simizu.html>もっと見る</a>'
    });
    var infoWindow14 = new google.maps.InfoWindow(
    {
        content: 'ＪＲ焼津駅南口広場</br><a href="http://maps.google.com/maps?daddr=34.8717453,138.3181213&saddr="pos"&dirflg=d&t=m">現在地からルート検索</a></br><a href="yaidu.html">もっと見る</a>'
    });
    
    var marker = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8498000,
            lng: 138.252500
        },
        map: map,
        title: '藤枝駅北口広場'
    });
    marker.addListener('click', function()
    {
        infoWindow2.open(map, marker);
    });
    
    
    
    var marker2 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8490000,
            lng: 138.252500
        },
        map: map,
        title: '藤枝駅南口広場'
    }); 
    marker2.addListener('click', function()
    {
        infoWindow3.open(map, marker2);
    });
    
   
    
    var marker3 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.847782,
            lng: 138.253561
        },
        map: map,
        title: '藤枝駅南通り'
    });
     marker3.addListener('click', function()
    {
        infoWindow4.open(map, marker3);
    });
    
    
    var marker4 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.9193000,
            lng: 138.2825800
        },
        map: map,
        title: '岡部宿大旅籠柏屋'
    });
     marker4.addListener('click', function()
    {
        infoWindow5.open(map, marker4);
    });
    var marker5 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8751221,
            lng: 138.2524786
        },
        map: map,
        title: '蓮華寺池公園'
    });
     marker5.addListener('click', function()
    {
        infoWindow6.open(map, marker5);
    });
    var marker6 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.830447,
            lng: 138.174006
        },
        map: map,
        title: '島田市駅前'
    });
     marker6.addListener('click', function()
    {
        infoWindow7.open(map, marker6);
    });
    var marker7 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8313728,
            lng: 138.1737687
        },
        map: map,
        title: '島田市駅前緑地'
    });
     marker7.addListener('click', function()
    {
        infoWindow8.open(map, marker7);
    });
    var marker8 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.831429,
            lng: 138.176369
        },
        map: map,
        title: 'おび通り'
    });
     marker8.addListener('click', function()
    {
        infoWindow9.open(map, marker8);
    });
    var marker9 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8191684,
            lng: 138.1251899
        },
        map: map,
        title: '金谷駅前'
    }); marker9.addListener('click', function()
    {
        infoWindow10.open(map, marker9);
    });
    var marker10 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8361591,
            lng: 138.2043456
        },
        map: map,
        title: '六合駅前'
    }); marker10.addListener('click', function()
    {
        infoWindow11.open(map, marker10);
    });
    var marker11 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.9734533,
            lng: 138.3820972
        },
        map: map,
        title: '青葉シンボルロード'
    }); marker11.addListener('click', function()
    {
        infoWindow12.open(map, marker11);
    });
    var marker12 = new google.maps.Marker(
    {
        position:
        {
            lat: 35.0182562,
            lng: 138.489236
        },
        map: map,
        title: '清水港線跡遊歩道'
    }); marker12.addListener('click', function()
    {
        infoWindow13.open(map, marker12);
    });
    var marker13 = new google.maps.Marker(
    {
        position:
        {
            lat: 34.8717453,
            lng: 138.3181213
        },
        map: map,
        title: 'ＪＲ焼津駅南口広場'
    }); marker13.addListener('click', function()
    {
        infoWindow14.open(map, marker13);
    });
}