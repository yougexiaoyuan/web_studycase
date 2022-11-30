    let btn=document.getElementById("start");
    let options=document.getElementsByClassName("option");
    let timer=null;
    btn.onclick=function(){
        let num=0;
        if(timer==null){
 timer=setInterval(()=>{
     num++;
         let ran=  Math.round(Math.random()*(7-0)+0); 

         for(let i=0;i<options.length;i++){
            options[i].style.backgroundColor='white';
         }
         options[ran].style.backgroundColor='orange';

         if(num>=50){
            clearInterval(timer);
            timer=null;
         }
        },100)
        }
       
    }