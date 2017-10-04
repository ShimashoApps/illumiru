
//端末GPS情報の取得（Geolocation API）
// 対応している場合
if( navigator.geolocation )
{
    navigator.geolocation.getCurrentPosition(
        function successFunc( position )
{
    var lat=position.coords.latitude;
    var lng=position.coords.longitude;
    
    // var location=document.getElementById("location");
    // location.innerHTML="緯度："+lat+"<br/>経度："+lng;
    
    checkLocation(lat,lng);
} , 
function errorFunc( error )
{
    // エラーコードのメッセージを定義
	var errorMessage = {
		0: "原因不明のエラーが発生しました…。" ,
		1: "位置情報の取得が許可されませんでした…。" ,
		2: "電波状況などで位置情報が取得できませんでした…。" ,
		3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。" ,
	} ;

	// エラーコードに合わせたエラー内容をアラート表示
	alert( errorMessage[error.code] ) ;
}
        ) ;
}
// Geolocation APIに対応していない
else
{
	// 現在位置を取得できない場合の処理
	alert( "あなたの端末では、現在位置を取得できません。" ) ;
}

//login確認メソッド
function checkLocation(a,b){
    //1mあたりの緯度経度
    var oneMLat=0.000008983148616;
    var oneMLng=0.000010966382364;
    var radius=oneMLng*100;
    
    //csvファイル読み込み
    var csvList='';
    var insert = '';
    var target = '#check';

    $.ajax({
        url: './data/location.csv',
        success: function(data) {
            check=getLocalStrage();
            // document.getElementById("csvTextBF").innerHTML=check;
            check=check.split(',');
            
            // csvを配列に格納
            csvList = $.csv()(data);
            
            //現在地と全ての場所をチェック
            for(var i=1;i<csvList.length;i++){
                
                var distance=Math.sqrt(Math.pow(a-csvList[i][2],2)+Math.pow(b-csvList[i][3],2));
    
                if(distance<radius)
                {
                    insert=csvList[i][1]+"成功</br>"+distance+"</br>"+radius+"</br>";
                    $(target).append(insert);
                    check[i]="1";
                }else{
                    // insert=csvList[i][1]+"ここではない</br>"+distance+"</br>"+radius+"</br>";
                    $(target).append(insert);
                    // check[i]="0";
                }
                if(check[i]==1){
                    insert='<img src="'+csvList[i][4]+'" id="img">';
                }else{
                    insert='<img src="img/stamp/kashibaya.jpeg" id="img">';
                }
            }
            
            
            
            // check[1]=check[1]+2;
            check=check.join(",");
            // document.getElementById("csvText").innerHTML=check;
            setLocalStrage(check);
        }
    });
}

function setLocalStrage(data){
    if (('localStorage' in window) && (window.localStorage !== null))
    {
        // データの保存
        localStorage.setItem('stamp_info', data);
        
        // document.getElementById("localStorageAF").innerHTML=data;
    }
    else
    {
        alert("申し訳ありません。この端末ではスタンプラリーを実施することができません");
    }
}

function getLocalStrage(){
    var localData=["0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"];
    
    if (('localStorage' in window) && (window.localStorage !== null))
    {
        if(window.localStorage !== null){
            localStorage.setItem('stamp_info', localData);
        }
        // データの取得
        localData = localStorage.getItem('stamp_info');
        // document.getElementById("localStorage").innerHTML=localData;
    }
    else
    {
        alert("申し訳ありません。この端末ではスタンプラリーを実施することができません");
    }
    // document.getElementById("localStorage").innerHTML=localData;
    return localData;
}