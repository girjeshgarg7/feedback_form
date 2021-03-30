function printfunc()
{
	var fn=document.getElementById("first").value;
	var mn=document.getElementById("middle").value;
	var ln=document.getElementById("last").value;
	var st=document.getElementById("suggestions").value;
       

	if(fn=="")
		alert("PLEASE ENTER YOUR FIRST NAME!!!");
	if(ln=="")
		alert("PLEASE ENTER YOUR LAST NAME!!!");
	if(st=="")
		alert("PLEASE ENTER YOUR  SUGGESTIONS!!!");
	if(document.getElementById('m').checked==false && document.getElementById('f').checked==false)
		alert("PLEASE ENTER YOUR GENDER");

	  

      
 if((document.getElementById('m').checked && fn!="" && mn=="" && ln!="" && st!=""))
	   {
	   	document.getElementById("pr").innerHTML+="MR. "+fn.trim()+" "+ln.trim()+" says \n"+st+"\n\n";
	   }
 
	 else if((document.getElementById('f').checked && fn!="" && mn=="" && ln!="" && st!=""))
	   {
	   	document.getElementById("pr").innerHTML+="MS. "+fn.trim()+" "+ln.trim()+" says \n"+st+"\n\n";
	   }
      
	 else if((document.getElementById('m').checked && fn!="" && mn!="" && ln!="" && st!=""))
	   {
	   	document.getElementById("pr").innerHTML+="MR. "+fn.trim()+" "+ln.trim()+" says \n"+st+"\n\n";
	   }

	   
	 else if((document.getElementById('f').checked && fn!="" && mn!="" && ln!="" && st!=""))
	   {
	   	document.getElementById("pr").innerHTML+="MS. "+fn.trim()+" "+ln.trim()+" says \n"+st+"\n\n";
	   }

	   

 
 
 
} 
