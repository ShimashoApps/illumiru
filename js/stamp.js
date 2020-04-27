//端末GPS情報の取得（Geolocation API）
// 対応している場合
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function successFunc(position)
    {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        // var location = document.getElementById("location");
        // location.innerHTML = "緯度：" + lat + "<br/>経度：" + lng;
        checkLocation(lat, lng);
    }, function errorFunc(error)
    {
        // エラーコードのメッセージを定義
        var errorMessage = {
            0: "原因不明のエラーが発生しました…。",
            1: "位置情報の取得が許可されませんでした…。",
            2: "電波状況などで位置情報が取得できませんでした…。",
            3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。",
        };
        // エラーコードに合わせたエラー内容をアラート表示
        alert(errorMessage[error.code]);
    });
}
// Geolocation APIに対応していない
else
{
    // 現在位置を取得できない場合の処理
    alert("あなたの端末では、現在位置を取得できません。");
}
//login確認メソッド
function checkLocation(a, b)
{
    //1mあたりの緯度経度
    var oneMLat = 0.000008983148616;
    var oneMLng = 0.000010966382364;
    var radius = oneMLng * 100;
    //csvファイル読み込み
    var csvList = '';
    var insert = '';
    var target = '#check';
    $.ajax(
    {
        url: './data/location.csv',
        success: function(data)
        {
            check = getLocalStrage();
            // document.getElementById("csvTextBF").innerHTML=check;
            check = check.split(',');
            // csvを配列に格納
            csvList = $.csv()(data);
            //現在地と全ての場所をチェック
            var cnt=0;
            for (var i = 1; i < csvList.length; i++)
            {
                var distance = Math.sqrt(Math.pow(a - csvList[i][2], 2) + Math.pow(b - csvList[i][3], 2));
                if (distance < radius)
                {
                    // insert = csvList[i][1] + "成功</br>" + distance + "</br>" + radius + "</br>";
                    $(target)
                        .append(insert);
                    check[i] = "1";
                    check[0] = Number(check[0]) + 1;
                    var msg=window.alert(csvList[i][1]+'　取得');
                    cnt+=1;
                }
                else
                {
                    // insert=csvList[i][1]+"ここではない</br>"+distance+"</br>"+radius+"</br>";
                    $(target)
                        .append(insert);
                    // check[i]="0";
                    check[0] = Number(check[0]) + 1;
                }
                if (check[i] == 1)
                {
                    insert = '<a href="http://maps.google.com/maps?daddr='+csvList[i][2]+','+csvList[i][3]+'&saddr="現在地""><img src="' + csvList[i][4] + '" id="img"></a>';
                }
                else
                {
                    insert = '<a href="http://maps.google.com/maps?daddr='+csvList[i][2]+','+csvList[i][3]+'&saddr="現在地""><img src="' + csvList[i][5] + '" id="img"></a>';
                }
            }
            if(cnt==0){
                    var msg=window.alert('\n取得できませんでした。\n\nGPSの利用状況を確認し「スタンプを取得」ボタンを押してください。\nまたは、取得したいスタンプを押して場所を確認してください。');
                }
            check = check.join(",");
            // document.getElementById("csvText")
            //     .innerHTML = check;
            setLocalStrage(check);
        }
    });
}

function setLocalStrage(data)
{
    // データの保存
    localStorage.setItem('illumiruStamp_infoN', data);
    // document.getElementById("localStorageAF").innerHTML=data;
}

function getLocalStrage()
{
    var localData = ["0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"];
    if (('localStorage' in window) && (window.localStorage !== null))
    {
        if (window.localStorage['illumiruStamp_infoN'] == null)
        {
            localStorage.setItem('illumiruStamp_infoN', localData);
        }
        // データの取得
        localData = localStorage.getItem('illumiruStamp_infoN');
        // document.getElementById("localStorage").innerHTML=localData;
    }
    else
    {
        alert("申し訳ありません。この端末ではスタンプラリーを実施することができません");
    }
    // document.getElementById("localStorage").innerHTML=localData;
    return localData;
}
