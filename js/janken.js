// 勝敗のカウント用に編すを指定
    let win=0;
    let lose=0;

// 自分がグーを出した時の処理

    $("#guu").on("click",function(){
        // 1.乱数
        
        let pc= Math.floor(Math.random()*3);
        

        // 2.if分岐処理
        
        // let win=0;
        let pcjankens=["bpontaguu.jpg","bpontachoki.jpg","bpontapa.jpg"];
        let pcImg=document.getElementById("pcImg");
        pcImg.src ="Img/" + pcjankens[pc];
        let UserImg=document.getElementById("UserImg");
        UserImg.src="img/tubakuroguu.jpg";
        if(pc==0){
            view="あいこ";

        }
        if(pc==1){
            view="勝ち";
            win+=1;
        }
        if(pc==2){
            view="負け";
            lose+=1;
        }
        if(win==4){
            $("#champion").html("日本一!!");
            $("#result").fadeOut();
            $(".count").fadeOut();
            $(".championimg").fadeIn();
        }
        if(lose==4){
            $("#champion").html("敗退");
            $("#result").fadeOut();
            $(".count").fadeOut();
        }

        // 3.表示処理
        $("#result").html(view);
        $("#UserImg").html(UserImg);
        $("#pcImg").html(pcImg);
        $("#win").html(win+"勝");
        $("#lose").html(lose+"敗");

    })


// 自分がチョキを出した時の処理

    $("#choki").on("click",function(){

        // 1.乱数
        
        let pc= Math.floor(Math.random()*3);

        let UserImg=document.getElementById("UserImg");
        UserImg.src="img/tubakurochoki.png";

        // 2.if分岐処理
        let view="";
        let pcjankens=["bpontaguu.jpg","bpontachoki.jpg","bpontapa.jpg"];
        let pcImg=document.getElementById("pcImg");
        pcImg.src ="Img/" + pcjankens[pc];
        let userjankens="img/tubakurochoki.png";
        if(pc==0){
            view="負け";
            lose+=1;
        }
        if(pc==1){
            view="あいこ";
        }
        if(pc==2){
            view="勝ち";
            win+=1;
        }
        if(win==4){
            $("#champion").html("日本一!!");
            $("#result").fadeOut();
            $(".count").fadeOut();
            $(".championimg").fadeIn();
        }
        if(lose==4){
            $("#champion").html("敗退");
            $("#result").fadeOut();
            $(".count").fadeOut();
        }

        // 3.表示処理
        $("#result").html(view);
        $("#UserImg").html(UserImg);
        $("#pcImg").html(pcImg);
        $("#win").html(win+"勝");
        $("#lose").html(lose+"敗");
    })

// 自分がパーを出した時の処理

    
    $("#pa").on("click",function(){
         // 1.乱数
         let pc= Math.floor(Math.random()*3);
        
         // 2.if分岐処理
         let view = "";
         let pcjankens = ["bpontaguu.jpg", "bpontachoki.jpg", "bpontapa.jpg"];
        let pcImg=document.getElementById("pcImg");
        pcImg.src ="Img/" + pcjankens[pc];
         let UserImg=document.getElementById("UserImg");
         UserImg.src="img/tubakuropa.png";
         if(pc==0){
             view="勝ち";
             win+=1;
         }
         if(pc==1){
             view="負け";
             lose+=1;
         }
         if(pc==2){
             view="あいこ";
         }
         if(win==4){
            $("#champion").html("日本一!!");
            $("#result").fadeOut();
            $(".count").fadeOut();
            $(".championimg").fadeIn();
        }
        if(lose==4){
            $("#champion").html("敗退");
            $("#result").fadeOut();
            $(".count").fadeOut();
        }
 
         // 3.表示処理
         $("#result").html(view);
         $("#UserImg").html(UserImg);
         $("#pcImg").html(pcImg);
         $("#win").html(win+"勝");
         $("#lose").html(lose+"敗");

    })

// 4勝したときに日本一と表示させる
// グーチョキパーそれぞれの構文に組み込んだらできた
       
    // if(win==4){
    //     $("#champion").html("日本一");
    // }


// 勝利数のカウントこのやり方ではできなかった

    // let result=document.getElementById("result");
    // console.log(result.innerHTML);
    // alert(result.innerHTML);
    // let win=0;
    // if(result=="勝ち"){
    //     win+=1;
       
    // }

    //  $("#win").html(win);
    
