var gridnumberlength
	var gridnumberlength2;
	var gridcreation;
	var gridtbl;
	var gridfinish2;
	var gridfinish;
	var gridnumber;
	var gridnumber2;
	var gridtd;
	var gridtd2;
	var gridtd5;
	var gridt;
	var gridf;
	var gridanswer1;
	var gridy;
	var gridy2;
	var gridspace=1;
	var gridspace2=1;
	var gridmore2=0;
	var gridtr;
	var grid1=-1;
	var gridtr2;
	var gridjin=1;
	var gridhit;
	var gridhon=-1;
	var grid2=-1;
	var gridmore;
	var gridtr5;
	var gridtr6;
	var gridtr7;
	var gridans;
	var gridwind=8;
	var gridwind2=12;
	var gridwind3=15;
	var gridtime;
	var power;
	var power1=[];
	var power2;
	var power3=[];
	var gridz3=0;
	var gridtim=0;
	var gridtim1=1;
	var gridzy;
	var gridzyj=1;
	var gridplus=[];
	var gridtimes;
	var gridtimed;
	var a=[];
	var gridz2;
	
	//the grid multiplication will do the grid mutiplication method
	function gridMultiplicationFunction(grids,grids6){
	gridnumberlength=grids.length;
	gridnumberlength2=grids6.length;
	gridzy=gridnumberlength2;
	gridz2=gridnumberlength2+1;
	 gridnumber=grids;
	 gridnumber2=grids6;
	 gridtimes=gridnumber*gridnumber2;
	 gridtimed=gridtimes.toString().length;
	 gridz3=0;
     gridtim=0;
	 gridtim1=1;
	 gridzyj=1;
	 grid2=-1;
	 grid1=-1;
	 gridspace=1;
	 gridspace2=1;
	 gridmore2=0;
	 gridjin=1;
	 power1=[];
	 power3=[];
	 gridhon++;
	gridtime=0;
     gridfinish=0;
	gridfinish2=0;
	gridt=-1;
	if(gridhon>0){
	timerout3();
	}
	gridcreation=document.getElementById('creation');
	gridtbl=document.createElement('table');
	timergrid();
}

//this will starttimer and control the animation for this class
function timergrid(){
	gridtime++;
	var gridhon;
	gridhon++;
	if(gridtime==5){
	gridrow1();
	}
	else if(gridtime==7){
	gridrow2();
	}
	else if(gridtime==gridwind){
	    gridfinish++;
		gridfinish2++;
	    gridans=gridnumberlength-(gridfinish2-1);;
		gridanswer(gridans,gridfinish2);
		
		if(gridfinish<=((gridnumberlength*gridnumberlength2)+(gridnumberlength2-2))){
		gridwind++;
		gridwind2++;
		gridwind3++;
		}
		if(gridfinish%(gridnumberlength+1)==0){
			gridfinish2=0;
			gridmore2++;
			gridspace2++;
			gridzyj++;
		}
	}
    if(gridtime==gridwind2){
	    //rowb4();
		additiongrid();
		document.getElementById("a2").innerHTML+=gridnumber*gridnumber2;
	}
	else if(gridtime==gridwind3){
		removegridTable();
		document.getElementById("a2").innerHTML="";
		info2=[];
		gridplus=[];
		gridwind=8;
		gridwind2=12;
		gridwind3=15;
		gridfinish=0;
		gridfinish2=0;
		//grid=1;
		timerout3();
		gridans=numberlength8;
		document.getElementById('time').innerHTML="";
	}
	gridcreation.appendChild(gridtbl);
	document.getElementById('time').innerHTML=gridtime;
	if(gridtime<gridwind3){
	gridhit=setTimeout(timergrid,1000);
	sleep2_ms(1000);
	}
	}
	//put sleep for so many milliseconds
function sleep2_ms(millisecs) {
    var initiation = new Date().getTime();
    while ((new Date().getTime() - initiation) < millisecs);
}
//first row will bput the number on the top
function gridrow1(){
	gridtr=document.createElement('tr');
	gridtr.setAttribute("style","border: 1px solid black;");
	for (var gridz=gridnumberlength+1;gridz>0;gridz--){
	gridtd=document.createElement('td');
	gridtd.setAttribute("style","border: 1px solid black;");
	gridtd.id="gridnos"+gridz;
	console.log(gridtd.id);
	console.log(gridz);
	//console.log(grid1);
	gridtd.height = '40';
	gridtd.width= '25';
	if(gridz>gridnumberlength){
		gridtd.innerHTML+="&times";
	}
	else{
		grid1++;
		power=Math.pow(10, gridz-1)*gridnumber[grid1];
    gridtd.innerHTML+=power;
	 power1.unshift(power);
	console.log("rag");
	}
	gridtr.appendChild(gridtd);
	}
	gridtbl.appendChild(gridtr);
}
//they will pu a second row 
function gridrow2(){
	gridz2=gridnumberlength2+1;
	for(var grid4=gridnumberlength2;grid4>0;grid4--){
	gridtim++;
	gridtr2=document.createElement('tr');
	gridtr2.setAttribute("style","border: 1px solid black;");
	if(grid4==gridnumberlength2){
	gridz3=(gridnumberlength)*gridtim;
	}
	else{
		gridz3=(gridnumberlength*gridtim)+gridtim1;
		gridtim1++;
	}
	for (var grid3=gridnumberlength+1;grid3>0;grid3--){
	gridtd2=document.createElement('td');
	gridtd2.setAttribute("style","border: 1px solid black;");
	gridtd2.id="grid"+gridz3;
	console.log(gridtd2.id);
	console.log(grid2);
	console.log(grid3);
	gridtd2.height = '40';
	gridtd2.width= '25';
	//number3[t];
	if(grid3==gridnumberlength+1){
		grid2++;
		gridz2--;
		power2=Math.pow(10, gridz2-1)*gridnumber2[grid2];
         gridtd2.innerHTML+=power2;
		 power3.unshift(power2);
	}
	else if(grid3<=gridnumberlength2){
		gridtd2.innerHTML+="";
	}
	gridz3--;
	gridtr2.appendChild(gridtd2);
	}
	
	gridtbl.appendChild(gridtr2);
}
}
//grid answerof alll the numbers
function gridanswer(gridans,gridfinish){
	var griddanga=power3.length;
	var griddangb=power1.length;
	var gridca=griddangb-griddanga;
	var gridcb=griddanga-griddangb;
	
	//ans1=numberlength;
	 //bingo=0;
	//for(var ans=numberlength;ans>0;ans--){
		//as++;
		gridy=parseInt(power3[(gridzy)-gridspace2]);
		gridy2=parseInt(power1[gridans-gridspace]);
		console.log(gridy);
	    console.log(gridy2);
		if(isNaN(gridy)||isNaN(gridy2)){
		}
		else{
			//if the grid numbers are put in correctly everything should be donee properly
		gridanswer1=gridy*gridy2;
		console.log(gridanswer1);
		if(griddanga==griddangb){
	    document.getElementById("grid"+((gridzy*gridzyj)-(gridfinish2-gridmore2))).innerHTML+=gridanswer1;
		}
		if(griddanga>griddangb){
			document.getElementById("grid"+((gridzy*gridzyj-(gridcb*gridzyj))-(gridfinish2-gridmore2))).innerHTML+=gridanswer1;
		}
		if(griddangb>griddanga){
            document.getElementById("grid"+((gridzy*gridzyj+(gridca*gridzyj))-(gridfinish2-gridmore2))).innerHTML+=gridanswer1;
		}
		gridplus.unshift(gridanswer1);
}
}
//this will add the numbers too the bottom
function additiongrid(){
	b=0;
	gridplus.sort(function(a, b){return a-b});
    for(var grid5=gridnumberlength*gridnumberlength2;grid5>0;grid5--){
		for(var grid=grid5;grid<gridnumberlength*gridnumberlength2;grid++){
		
			gridplus[grid5-1]= "&nbsp;"+gridplus[grid5-1];
		
		}
	gridtr5=document.createElement('tr');
	gridtr5.innerHTML+=gridplus[grid5-1];
    gridtbl.appendChild(gridtr5);
	c=0;
	}
	gridtr6=document.createElement('tr');
	gridtr6.innerHTML+=gridnumber*gridnumber2;
gridtbl.appendChild(gridtr6);
}


function timerout3(){
	clearTimeout(gridhit);
}
function removegridTable(){
var gridrowCount = gridtbl.rows.length;
for (var gridx=gridrowCount-1; gridx>=0; gridx--) {
   gridtbl.deleteRow(gridx);
}
}

