$(function(){

    const canvas =document.getElementById("canvas001");
    const ctx = canvas.getContext("2d");
    // 変数と定義を事前に宣言
    const cnvWidth = 500;
    const cnvHight = 400;
    let cnvColor = "black";
    let cnvLineWeight = 5;
    let clickFlag = 0;
    let bgColor = "white";

//背景を白にする関数を作る
    function setBgColor(){
        ctx.fillStyle = bgColor;
        ctx.fillRect(0,0, cnvWidth, cnvHight);
    }
// 関数を呼び出して背景を塗りつぶす
    setBgColor()
    //  canvasで操作があったときのイベント メソッドチェーンで書かれてる
    // clickFlagの数値でマウスがクリックされてるかどうかを判定する
    $("#canvas001").mousedown(function(){ //マウスを押したとき
        clickFlag = 1;
    }).mouseup(function(){ //マウスを離したとき
        clickFlag = 0;
    }).mousemove(function(e){ //マウスを動かしたとき
        if(!clickFlag) return false;
        draw(e.offsetX,e.offsetY);
    })

    //canvasに錨鎖する関数
    function draw(x,y) {
        ctx.lineWidth = cnvLineWeight;
        ctx.strokeStyle = cnvColor;
        if (clickFlag == "1"){ //クリックしたとき
            clickFlag = "2"; //フラグを２にする
            ctx.beginPath(); //パスを開始//パスのリセット
            ctx.lineCap = "round"; //線の角を丸くする
            ctx.moveTo(x,y); //パスの始点を指定
            }else{
                ctx.lineTo(x,y) //パスに点を追加
            }
            ctx.stroke();//パスを描写
        }
    
    //選んだ色に変更
    $(".color a").on("click", function(){
        cnvColor = $(this).data("color");
        return false;
    })

    //選んだ太さに変更
    $(".weight a").on("click", function(){
        cnvLineWeight = $(this).data("weight");
        return false;
    })

    //全部消す
    $("#clear").on("click", function(){
        ctx.clearRect(0,0,cnvWidth,cnvHight);
        setBgColor();
    })
//ダウンロード
    $("#download").on("click",function(){
    const base64 = canvas.toDataURL();
    //base64とは画像データを文字列にしてくれる
    $("#download").attr("href",base64);
    })








})//jQend