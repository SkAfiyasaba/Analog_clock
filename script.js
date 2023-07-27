const hr=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

function time(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    /* 12hr=30deg
    1hr=30/12=30
    h hr=30h+m/2

    60min=360deg
    1min=360/60=6deg
    m min=6m

    60sec=360deg
    1sec=360/60=6deg
    s sec=6s
    */
   let hRotate=30*hh+mm/2;
   let mRotate=6*mm;
   let sRotate=6*ss;
     
   hr.style.transform=`rotate(${hRotate}deg)`;
   min.style.transform=`rotate(${mRotate}deg)`;
   sec.style.transform=`rotate(${sRotate}deg)`;

}
setInterval(time,1000);