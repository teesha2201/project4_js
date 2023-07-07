let Msg=document.getElementById("message");
let assigntime=document.getElementsByClassName("Time");
function clockstart()
{   
    let AmPm="";
    let time=new Date();
    let hrs=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();

    
    if(hrs>12)
    {
        hrs-=12;
        AmPm="PM";
    }
    else
    {
        AmPm="AM";
    }
    assigntime[1].innerHTML=`${hrs} hours`;
    assigntime[2].innerHTML=`${mins} mins`;
    assigntime[3].innerHTML=`${secs} \nsecs`;
    assigntime[4].innerHTML=`${AmPm}`;

 if(hrs>=4 &&  hrs<=11  && AmPm === "AM")
     {
        Msg.innerHTML=" GRAB SOME HEALTHY BREAKFAST!!!";

     }

    else if(hrs<=12 ||  hrs<=4 && AmPm === "PM")
    {
        Msg.innerText="LET'S HAVE SOME HEALTHY LUNCH !!";
        
    }
    
    else if(hrs>4 && hrs<=8 && AmPm === "PM")
    {
        Msg.innerText= `  STOP YAWNING , GET SOME TEA..ITS JUST EVENING !!!`;
        
    }
    else if(hrs>8 && AmPm === "PM" || hrs<=12 && AmPm ==="AM" )
    {
        Msg.innerHTML=" CLOSE YOUR EYES AND GO TO SLEEP";
    }
   	

    // if(hrs>=10 && AmPm === "AM")
    //  {
    //      Msg.innerHTML=" GRAB SOME HEALTHY BREAKFAST!!!";

    //  }

    // else if(hrs<4 && hrs>=1 && AmPm === "PM")
    // {
    //     Msg.innerText="LET'S HAVE SOME HEALTHY LUNCH !!";
        
    // }
    
    // else if(hrs>=4 && hrs<8 && AmPm === "PM")
    // {
    //     Msg.innerText= `  STOP YAWNING , GET SOME TEA..ITS JUST EVENING !!!`;
        
    // }
    
    // else if(hrs>=8 && hrs<=12 && AmPm === "PM")
    // {
    //     Msg.innerHTML=" CLOSE YOUR EYES AND GO TO SLEEP";
        
    // }
    // else if(hrs>=1 && hrs<=5 && AmPm === "AM")
    // {
    //     Msg.innerHTML=" CLOSE YOUR EYES AND GO TO SLEEP";
        
    // }
  
}
setInterval(()=>
{
    clockstart();
},1000);

let inputValue = document.querySelectorAll('select');
let text = document.getElementById('msg_display');
let imgShow = document.getElementById('img_position');

/* now variable for note */

function callFunction() {

    let time = new Date();
    let hrs = time.getHours();

    // let wakeup=inputValue[0].options[inputValue[0].value]
	// let lunch=inputValue[1].options[inputValue[1].value]
	// let nap=inputValue[2].options[inputValue[2].value]
	// let night=inputValue[3].options[inputValue[3].value]
	
    // p1.innerHTML=`Wake Up Time: ${wakeup.text}`
	// p2.innerHTML=`Lunch Time: ${lunch.text}`
	// p3.innerHTML=`Nap Time: ${nap.text}`
	// p4.innerHTML=`Night Time: ${night.text}`

   let wakeup = inputValue[0].selectedIndex;
   let lunch = inputValue[1].selectedIndex;
    let nap = inputValue[2].selectedIndex;
    let night =inputValue[3].selectedIndex;
   
   let morning=inputValue[0].options[wakeup];
   let noon=inputValue[1].options[lunch];
   let evening= inputValue[2].options[nap];
   let sleep=inputValue[3].options[night];


   p1.innerHTML = `Wake UP Time: ${morning.innerHTML}`;
   p2.innerHTML = `Lunch Time: ${noon.innerHTML}`;
   p3.innerHTML = `Nap Time: ${evening.innerHTML}`;
   p4.innerHTML = `Night Time: ${sleep.innerHTML}`;
    
  
    if (parseInt(inputValue[0].value) === hrs) {
        text.innerHTML = 'GOOD MORNING !!!';
        imgShow.src = "image/mrng.svg"
    }
    else if (parseInt(inputValue[1].value) === hrs) {
        text.innerHTML = 'GOOD AFTERNOON !!!';
        imgShow.src = "image/lunch_time.svg";
    }
    else if (parseInt(inputValue[2].value) === hrs) {
        text.innerHTML = 'GOOD EVENING';
        imgShow.src = "image/evening.png";
    }
    else if (parseInt(inputValue[3].value) === hrs) {
        text.innerHTML = 'GOOD NIGHT';
        imgShow.src = "image/sleep.svg";
    }
}
