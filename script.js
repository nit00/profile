var i=0;
window.onload=
function typer(){  
    str2="WEB DEVELOPER  "
 if(i<str2.length)
 {
     document.getElementsByClassName('work')[0].innerHTML+=str2.charAt(i);
     i++;
     setTimeout(typer,200);
     if(i==str2.length)
     { setTimeout("hello",10000000);
         document.getElementsByClassName('work')[0].innerHTML="<span></span>"
         i=0;}
     
 }
}