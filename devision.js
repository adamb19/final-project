var divisionnumberlength;
	var divisionnumberlength2;
	var divisioncreation;
	var divisiontbl;
	var divisionfinish;
	var divisionnumber;
	var divisionnumber2;
	var divisiontime=0;
	var divisiontd;
	var divisiontd2;
	var divisiontd3;
	var divisiontd4;
	var divisiontd5;
	var divisiontr;
	var divisiontr2;
	var divisiontr3;
	var divisionwind=8;
	var divisionwind2=13;
	var divisionwind3=15;
	var divisionboolean=false;
	var divisionhon=-1;
	var divisiontallys=[];
	var divisionhit;
	
	//this devision method is forthhe devision class
	function divisionFunction(s8,s9){
		divisionnumberlength=s8.length;
	    divisionnumberlength2=s9.length;
	    divisionnumber=s8;
	    divisionnumber2=s9;
	    divisiontime=0;
	    divisionfinish=0;
		divisionhon++;
		divisionboolean=false;
		divisioncreation=document.getElementById('creation');
	    divisiontbl=document.createElement('table');
	    divisiontimer();
	}
	
	//the timer animation for the devision class
	function divisiontimer(){
		divisiontime++;
		var divisionhon;
	    divisionhon++;
		if(divisiontime==2){
	      divisionrow();
	    }
		else if(divisiontime==3){
	       divisionrow2();
	    }
		else if(divisiontime==5){
			divisionrow3();
		}
		else if(divisiontime==divisionwind){
		  divisionanswer(divisionfinish);
		  divisionfinish++;
		  if(divisionfinish<=divisionnumberlength+1){
		    divisionwind++;
		    divisionwind3++;
		    divisionwind2++;
		  }
		}
		else if(divisiontime==divisionwind2){
		document.getElementById("a2").innerHTML+=divisionnumber/divisionnumber2;
	    }
		divisioncreation.appendChild(divisiontbl);
		if(divisiontime==divisionwind3){
			removedivisionTable();
		document.getElementById("a2").innerHTML="";
		divisiontallys=[];
		divisionwind=8;
		divisionwind2=13;
		divisionwind3=15;
		divisionfinish=0;
		divisiontimerout();
		document.getElementById('time').innerHTML="";
		}
		document.getElementById('time').innerHTML=divisiontime;
		if(divisiontime<divisionwind3){
	    divisionhit=setTimeout(divisiontimer,1000);
	    sleep3_ms(1000);
		}
	}
	
    function sleep3_ms(millisecs) {
        var initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs);
    }
	
	//division row will make the answer row which is at the top
	function divisionrow(){
		var divide3=0;
	    divisiontr=document.createElement('tr');
	    for (var division=divisionnumberlength2;division>0;division--){
	       divisiontd=document.createElement('td');
	       divisiontd.height = '40';
	       divisiontd.width= '25';
		   divisiontd.innerHTML+="";
		   divisiontr.appendChild(divisiontd);
		}
        for (var division1=divisionnumberlength+3;division1>0;division1--){
		   divisiontd2=document.createElement('td');
		    divisiontd2.setAttribute("style","border-bootom: 4px solid #ddd");
		   divisiontd2.id="divisionanswer"+divide3;
		   divide3++;
	       divisiontd2.height = '40';
	       divisiontd2.width= '25';		
	       divisiontr.appendChild(divisiontd2);
		}
	    divisiontbl.appendChild(divisiontr);
    }
	
	//this division row is made so numbers are all put in the right place such as making the first a big as two rows and other part only one row
	function divisionrow2(){
		var divide=0;
		var divide2=0;
	    divisiontr2=document.createElement('tr');
	    for (var division2=divisionnumberlength2;division2>0;division2--){
	       divisiontd3=document.createElement('td');
		   divisiontd3.setAttribute("rowspan",2);
		   divisiontd3.id="divisionnumber1"+divide;
	       divisiontd3.height = '40';
	       divisiontd3.width= '25';
		   divisiontd3.innerHTML+=divisionnumber2[divide];
           divisiontr2.appendChild(divisiontd3);
		   divide++;
		}
		  for (var division3=divisionnumberlength+3;division3>0;division3--){
	       divisiontd4=document.createElement('td');
		   if(division3<divisionnumberlength+3){
		   divisiontd4.setAttribute("style","border-top: 4px solid #ddd; font-size:12px");
		   }
		   if(division3>=divisionnumberlength+3){
			   divisiontd4.setAttribute("style","border-left: 4px solid #ddd; border-top: 4px solid #ddd");
		   }
		   divisiontd4.id="divisiontally"+divide2;
	       divisiontd4.height = '5';
	       divisiontd4.width= '15';		
	       divisiontr2.appendChild(divisiontd4);
		   divide2++;
		   }
		   divisiontbl.appendChild(divisiontr2);
    }
	
	//this is the finnally row
	function divisionrow3(){
		var divide1=0;
		  divisiontr3=document.createElement('tr');
		   for (var division5=divisionnumberlength+3;division5>0;division5--){
	       divisiontd5=document.createElement('td');
		   if(division5==divisionnumberlength+3){
			   divisiontd5.setAttribute("style","border-left: 4px solid #ddd");
		   }
		   if(division5<divisionnumberlength+3){
		   divisiontd5.setAttribute("style","border-left:");
		   }
		   divisiontd5.id="division"+divide1;
	       divisiontd5.height = '40';
	       divisiontd5.width= '25';	
           if(divide1<divisionnumberlength){		   
		   divisiontd5.innerHTML+=divisionnumber[divide1];
		   }
		   divide1++;	
	       divisiontr3.appendChild(divisiontd5);
		   }
		   divisiontbl.appendChild(divisiontr3);
	}
	
	//this dvivision answer helps to make sure that everything about devision works
	function divisionanswer(fin){
		if(fin==0){
		var divisionanswer;
	    var divisionanswer1;
	    var divisionanswer2;
		}
		//if division is false then just - 1
		if(divisionboolean==false){
		divisiony=parseInt(divisionnumber[fin-1]);
		}
		if(divisionboolean==true){
			divisiony=parseInt(divisionnumber[fin-1])+parseInt(divisiontallys[0])*10;
			divisionbool=false;
		}
		divisiony2=divisionnumber2;
		if(fin<divisionnumberlength){
		if(divisiony/divisiony2<1){
			divisionanswer=0;
			divisionanswer2=divisiony;
			divisionboolean=true;
			document.getElementById("divisionanswer"+(fin-1)).innerHTML+=divisionanswer;
			document.getElementById("divisiontally"+(fin)).innerHTML+=divisionanswer2;
			divisiontallys.unshift(divisionanswer2);
		}
		else if(divisiony/divisiony2>=1){
			if(divisiony/divisiony2%1==0){
				divisionanswer=divisiony/divisiony2;
				document.getElementById("divisionanswer"+(fin-1)).innerHTML+=divisionanswer;
			}
			else{
			divisionanswer=Math.floor(divisiony/divisiony2);
			divisionanswer1=divisionanswer*divisiony2;
			divisionanswer2=divisiony-divisionanswer1;
			divisionboolean=true;
			document.getElementById("divisionanswer"+(fin-1)).innerHTML+=divisionanswer;
			document.getElementById("divisiontally"+(fin)).innerHTML+=divisionanswer2;
			}
		}
		}
		if(fin==divisionnumberlength){
			if(divisiony/divisiony2%1==0){
				divisionanswer=divisiony/divisiony2;
				document.getElementById("divisionanswer"+(fin-1)).innerHTML+=divisionanswer;
			}
			else{
				divisionanswer=precisionRound(divisiony/divisiony2,2);
				document.getElementById("divisionanswer"+(fin-1)).innerHTML+=divisionanswer;
			}
		}
		//}
		divisiontallys.unshift(divisionanswer2);
	}
	
	//precision rouund by 2 decimal places
     function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      }
	  
//division timeout
function divisiontimerout(){
	clearTimeout(divisionhit);
}

//rmeove divsion table
function removedivisionTable(){
var divisionrowCount = divisiontbl.rows.length;
for (var divisionx=divisionrowCount-1; divisionx>=0; divisionx--) {
   divisiontbl.deleteRow(divisionx);
}
}
	