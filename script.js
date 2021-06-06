let img = new Image();
img.src = "card.png";



window.onload = function (){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    //let img = document.getElementById("card");
    ctx.drawImage(img, 0,0);
    ctx.font = "30px Arial";

    let rnd = Math.floor(Math.random()*100);
    let txt;
    let x;

    if (rnd > 50) {
        txt = "Nem nyert";
        x = 90;
    }
    else{
        txt = "Nyert!"
        x = 120;
    }


    ctx.strokeText(txt, x,250)

    /*
    ctx.beginPath();
    ctx.arc(130, 250, 100, 0, 3 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    */
    /*if(canvas.getContext) 
    {
      drawEllipse(ctx, 10, 10, 100, 60);
      drawEllipseByCenter(ctx, 60,40,20,10);
    }

    function drawEllipseByCenter(ctx, cx, cy, w, h) {
      drawEllipse(ctx, cx - w/2.0, cy - h/2.0, w, h);
    }

    function drawEllipse(ctx, x, y, w, h) {
      var kappa = .5522848,
          ox = (w / 2) * kappa, // control point offset horizontal
          oy = (h / 2) * kappa, // control point offset vertical
          xe = x + w,           // x-end
          ye = y + h,           // y-end
          xm = x + w / 2,       // x-middle
          ym = y + h / 2;       // y-middle

      ctx.beginPath();
      ctx.moveTo(x, ym);
      ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      //ctx.closePath(); // not used correctly, see comments (use to close off open path)
      ctx.stroke();*/


//    28,250 körül kezdődik az ovális


    
}