var numberlength7;
	var numberlength8;
	var numberlength9;
	var numberlength10;
	var numberlength11;
	var t4;
	var t5;
	var creation2;
	var tbl2;
	//var tr;
	var f13;
	var fl4;
	var finish3;
	var finish5;
	//var finish1;
	var rows=0;
	var rows1=0;
	var number5;
	var number6;
	var time2=0;
	var tda;
	var tdb;
	var tdc;
	var tdd;
	var tra;
	var tdf;
	var trf;
	var trb;
	var trc;
	var trd;
	var tim2=0;
	var hit2;
	var hon2=-1;
	var info2=[];
	var second1;
	var ans3;
	var wind7=8;
	var wind8=13;
	var wind9=15;
	var carry1=false;
	var bol13;
	var a2;
	var jin=1;
	var jin1=1;
	var more;
	var numbertimes;
	var numbertime;
	
	//the long mutiplication will make the next multiplication
	function longMultiplicationFunction(s5,s6){
	numberlength8=s5.length;
	numberlength9=s6.length;
	 number5=s5;
	 number6=s6;
	 numbertime=number6*number5;
	 numbertime3=number6*number5;
	 numbertimes=numbertime.toString().length;
	 console.log(numbertime);
	 console.log(numbertimes);
	 rows=numberlength8;
	 rows1=numberlength8;
	 hon2++;
	 //boll3=true;
	 //boll2=false;
	t4=-1;
	t5=-1;
	time2=0;
	finish3=0;
	finish5=0;
	more=0;
    jin=1;
	jin1=1;
	//finish1=0;
	if(hon2>0){
	timerout2();
	}
	//if(hon1>0){
		//timerout1();
		//}
	//}
	var title=document.title;
	if(title=='both'){
	document.getElementById('creation')=='extra';
	creation2=document.getElementById('creation1');
	}
	else{
		creation2=document.getElementById('creation');
	}
	tbl2=document.createElement('table');
	timer5();
}

//this the timer for the long multiplication
function timer5(){
//if(boll3==true){`	
	time2++;
	var hon2;
	hon2++;
	if(time2==1){
	checklengthA();
	}
	if(time2==2){
	rowb1();
	}
	else if(time2==3){
	rowb2();
	}
	else if(time2==5){
	rowb3();
	}
	/*
	else if(time2==7){
	rowb4();
	}
	*/
	else if(time2==wind7){
	    finish3++;
		finish5++;
	    ans3=numberlength8-(finish5-1);
		longanswer(ans3,finish3);
		if(finish3<(numberlength8*(jin-1))){
		wind7++;
		wind8++;
		wind9++;
		}
		if(finish3%(numberlength9)==0){
			finish5=0;
			more++;
		}
	}
    if(time2==wind8){
	    rowb4();
		document.getElementById("a2").innerHTML+=numbertime3.toString();
	}
	creation2.appendChild(tbl2);
	if(time2==wind9){
		removeTablea();
		document.getElementById("a2").innerHTML="";
		info2=[];
		wind7=8;
		wind8=13;
		wind9=15;
		finish3=0;
		finish5=0;
		more=1;
		ans3=numberlength8;
		timerout2();
		document.getElementById('time').innerHTML="";
	}
	
	document.getElementById('time').innerHTML=time2;
	if(time2<wind9){
	hit3=setTimeout(timer5,1000);
	sleep1_ms(1000);
	}
	}
	
	
function sleep1_ms(millisecs) {
    var initiation = new Date().getTime();
    while ((new Date().getTime() - initiation) < millisecs);
}

//checks the legnth compared to the answer length
function checklengthA(){
	fl3=numbertimes.toString()-numberlength9.toString();
	fl4=numbertimes.toString()-numberlength8.toString();
		t4=t4-fl3;
		fl3=0;
		t5=t5-fl4;
		fl4=0;
		console.log(fl3);
		console.log(t4);	
console.log(t5);
if(numberlength8>numberlength9){
		numberlength9=numberlength8;
		
	}
	else if(numberlength9>numberlength8){
		numberlength8=numberlength9;
	}	
}

//check if first row works
function rowb1(){
	tra=document.createElement('tr');
	for (var ingse=numbertimes.toString();ingse>0;ingse--){
	tda=document.createElement('td');
	t5++;
	console.log(t5);
	tda.id="1stNos"+ingse;
	tda.height = '40';
	tda.width= '25';
	//number3[t];
	if(t5<0){
		tda.innerHTML+="";
	}
	else if(t5>=0&&t5<=numberlength9){
    tda.innerHTML+=number5[t5];
	}
	/*
	else if(t5>numberlength8){
		tda.innerHTML+="X";
	}
	*/
	tra.appendChild(tda);
	}
	tbl2.appendChild(tra);
}

// this makes the second row
function rowb2(){
	trb=document.createElement('tr');
	for(var ings=numbertimes.toString();ings>0;ings--){
		tdb=document.createElement('td')
	    t4++;
		console.log(t4);
		tdb.id="2ndNos"+ings;
		tdb.height = '40';
		tdb.width= '25';
		//number4[t];
		if(t4<0){
		tdb.innerHTML+="";
	}
	else if(t4>=0&&t4<=numberlength8) {
    tdb.innerHTML+=number6[t4];
	}
	
		trb.appendChild(tdb);

	}
	tbl2.appendChild(trb);
}

//this will make all theows in the system
function rowb3(){
	var anger=0;
	var extra=0;
	var extra1=0;
	var teen=0;
	var measure=numberlength9;
	var measure1=numberlength9;
	for(var pink=number6.toString().length;pink>0;pink--){
	trc=document.createElement('tr');
	if(pink==number6.toString().length){
	trc.setAttribute("style","border-top: 1px solid #ddd");
	trc.setAttribute("style","border-bottom:0px");
	}
	else if(pink<number6.toString().length){
		trc.setAttribute("style","border-top:0px");
		if(pink==1){
			trc.setAttribute("style","border-bottom: 1px solid #ddd");
		}
	}
	for(var ink=numbertimes.toString();ink>0;ink--){
		tdc=document.createElement('td');
		tdc.height = '40';
		tdc.width= '25';
		if(ink>numberlength9+teen){
			extra++;
			tdc.id="extra"+extra;
			trc.appendChild(tdc);
		}
		 else if(ink<=numberlength9+teen){
			 if(ink>teen){
			 rows=measure-anger;
			 tdc.id="answerz"+rows;
		console.log(tdc.id);
		trc.appendChild(tdc);
		anger++;
	    }
		else if(ink<=teen){
		tdc.id="1"+teen;
	    tdc.innerHTML+="0";
        trc.appendChild(tdc);
		}
		if(ink==1){
			/*
			if(teen>1){
	            tdc.innerHTML+="0";
                trc.appendChild(tdc);
			}
			*/
			jin++;
			measure=numberlength9*jin;
			anger=0;
			teen++;
			
		}
		 }
	}
	tbl2.appendChild(trc);
	trc=document.createElement('tr');
	for(var inks=numbertimes.toString();inks>0;inks--){
		tdd=document.createElement('td')
		tdd.setAttribute("style","font-size:12px");
		tdd.height = '5';
		tdd.width= '25';
		if(inks>numberlength9+teen){
			extra1++;
			tdd.id="extra1"+extra1;
			trc.appendChild(tdd);
		}
		else if(inks<=numberlength9){
		rows1=measure1-anger;
		tdd.id="talles"+rows1;
		console.log(tdd.id);
		trc.appendChild(tdd);
		anger++;
		if(inks==1){
			jin1++;
			measure1=numberlength9*jin1;
			anger=0;
		}
	}
	tbl2.appendChild(trc);
	}
}
}
function rowb4(){
	trf=document.createElement('tr');
	for(var answertimes=numbertimes.toString();answertimes>0;answertimes--){
		 tdf=document.createElement('td')
		tdf.id="addanswer"+answertimes;
		tdf.height = '40';
		tdf.width= '25';
		trf.appendChild(tdf);
	}
	tbl2.appendChild(trf);
}
/*
function rowb4(){
	 trd=document.createElement('tr');
	 trd.setAttribute("style","border-top: 1px solid #ddd");
	 trd.setAttribute("style","font-size:12px");
	for(var inks=numberlength9;inks>0;inks--){
		tdd=document.createElement('td')
		tdd.id="talles"+inks;
		console.log(tdd.id);
		tdd.height = '5';
		tdd.width= '25';
		trd.appendChild(tdd);
	}
	tbl2.appendChild(trd);
}
*/
function longanswer(ans3,finish3){
	var answer6;
	//var man;
	var y6;
	var y7;
	//var a;
	var spacea;
	var spaceb;
	var sda;
	var sdb;
	var danga=number6.length;
	var dangb=number5.length;
	var ca=dangb-danga;
	var cb=danga-dangb;
	//ans1=numberlength;
	 bingo=0;
	//for(var ans=numberlength;ans>0;ans--){
		//as++;
		if(danga==dangb){
			 spacea=1;
			 spaceb=1;
			 y7=parseInt(number6[(numberlength9-more)-spaceb]);
		y6=parseInt(number5[ans3-spacea]);
		}
		if(danga>dangb){
			spacea=1;
			spaceb=cb+1;
			y7=parseInt(number6[ans3-spacea]);
		y6=parseInt(number5[(numberlength9-more)-spaceb]);
		}
		if(dangb>danga){
			spaceb=ca+1;
			spacea=1;
			y7=parseInt(number6[(numberlength9-more)-spaceb]);
		y6=parseInt(number5[ans3-spacea]);
		}
		console.log(y7);
	    console.log(y6);
		
		if(isNaN(y6)){
			answer6=y7;
		}
		else if(isNaN(y7)){
			answer6=y6;
		}
	    else if(y6==0){
			answer6=y7;
		}
		else if(y7==0){
			answer6=y6;
		}
		else{
			answer6=y6*y7;
			console.log(answer6);
		}
		if(isNaN(answer6)){
			answer6=0;
		}
		if(finish3%(numberlength9)!=0){
		if(answer6<10&&carry1==true){
			answer6=answer6+a2;
			console.log(answer6);
			if(answer6==10){
				answer6=answer6-10;
				 document.getElementById("talles"+(finish3)).innerHTML+="1";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer);
			}
			else if(answer6<10){
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
            carry1=false;
			info2.unshift(answer6);
			}
			
		}
		else if(answer6>=10&&answer6<20 && carry1==false){
			answer6=answer6-10;
			a2=1;
			console.log(answer6);
		   document.getElementById("talles"+(finish3)).innerHTML+="1";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=10&&answer6<20&&carry1==true){
			answer6=answer6+(a2-10);
			a2=1;
			console.log(answer6);
		   document.getElementById("talles"+(finish3)).innerHTML+="1";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=20&&answer6<30&&carry1==false){
			answer6=answer6-20;
			a2=2;
			console.log(answer6);
		   document.getElementById("talles"+(finish3)).innerHTML+="2";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=20&&answer6<30 &&carry1==true){
			answer6=answer6+2-20;
			a2=2;
		   document.getElementById("talles"+(finish3)).innerHTML+="2";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=30&&answer6<40&&carry1==false){
			answer6=answer6-30;
			a2=3;
		   document.getElementById("talles"+(finish3)).innerHTML+="3";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=30&&answer6<40&&carry1==true){
			answer6=answer6+3-30;
			a2=3;
		   document.getElementById("talles"+(finish3)).innerHTML+="3";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=40&&answer6<50&&carry1==false){
			answer6=answer6-40;
			a2=4;
		   document.getElementById("talles"+(finish3)).innerHTML+="4";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=40&&answer6<50&&carry1==true){
			answer6=answer6+4-40;
			a2=4;
		   document.getElementById("talles"+(finish3)).innerHTML+="4";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=50&&answer6<60&&carry1==false){
			answer6=answer6-50;
			a2=5;
		   document.getElementById("talles"+(finish3)).innerHTML+="5";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=50&&answer6<60&&carry1==true){
			answer6=answer6+5-50;
			a2=5;
		   document.getElementById("talles"+(finish3)).innerHTML+="5";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=60&&answer6<70&&carry1==false){
			answer6=answer6-60;
			a2=6;
		   document.getElementById("talles"+(finish3)).innerHTML+="6";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=60&&answer6<70&&carry1==true){
			answer6=answer6+6-60;
			a2=6;
		   document.getElementById("talles"+(finish3)).innerHTML+="6";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=70&&answer6<80&&carry1==false){
			answer6=answer6-70;
			a2=7;
		   document.getElementById("talles"+(finish3)).innerHTML+="7";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=70&&answer6<80&&carry1==true){
			answer6=answer6+7-70;
			a2=7;
		   document.getElementById("talles"+(finish3)).innerHTML+="7";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=80&&answer6<90&&carry1==false){
			answer6=answer6-80;
			a2=8;
		   document.getElementById("talles"+(finish3)).innerHTML+="8";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=80&&answer6<90&&carry1==true){
			answer6=answer6+8-80;
			a2=8;
		   document.getElementById("talles"+(finish3)).innerHTML+="8";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6>=90&&answer6<100&&carry1==false){
			answer6=answer6-90;
			a2=9;
		   document.getElementById("talles"+(finish3)).innerHTML+="9";
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
		 carry1=true;
		 info2.unshift(answer6);
		}
		else if(answer6>=90&&answer6<100&&carry1==true){
			answer6=answer6+9-90;
			a2=9;
		   document.getElementById("talles"+(finish3)).innerHTML+="9";
			//a=a+1;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		else if(answer6<10&&carry1==false){
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
		}
		}
		
		else if(finish3%(numberlength9)==0){
			if(carry1==true){
				//a2=1;
			answer6=answer6+a2;
			console.log(answer6);
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
            carry1=false;
			info2.unshift(answer6);
			a2=0;
			}
			else if(carry1==false){
				a2=0;
			document.getElementById("answerz"+(finish3)).innerHTML+=answer6;
			info2.unshift(answer6);
			}
		}
	}
function timerout2(){
	clearTimeout(hit3);
}
function removeTablea(){
var rowCount2 = tbl2.rows.length;
for (var x2=rowCount2-1; x2>=0; x2--) {
   tbl2.deleteRow(x2);
}
}

