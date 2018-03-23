//function addition(){
    //var txt = document.form.txt.value;
    //var number=number1;
	//var number2=numberb;
	//var number =new String(number);
	//var number2 =new String(number);
	//numbera.length;
	//numberc.length;
	var numberlength6;
	var numberlength5;
	var numberlength3;
	var numberlength4;
	var t2;
	var t3;
	var creation1;
	var tbl1;
	//var tr;
	var f2;
	var f3;
	var boolten;
	var finish2;
	//var finish1;
	var number3;
	var number4;
	var time;
	var td5;
	var td6;
	var td7;
	var td8;
	var tr5;
	var tr6;
	var tr7;
	var tr8;
	var time1=0;
	var hit1;
	var hon1=-1;
	var info1;
	var second;
	var ans1;
	var wind3=12;
	var wind4=16;
	var wind5=19;
	var carry;
	var bol12;
	var danger1;
function subtractionFunction(s3,s4){
	boolten=false;
	numberlength3=s3.length;
	numberlength4=s4.length;
	 number3=s3;
	 number4=s4;
	 info1=s3-s4;
	 hon1++;
	 boll2=true;
	 boll3=false;
	t2=-1;
	t3=-1;
	time1=0;
	finish2=0;
	//finish3=0;
	if(hon1>0){
		timerout1();
		if(hon>0){
			timerout();
		}
	}
	creation1=document.getElementById('creation');
	tbl1=document.createElement('table');
	timer4();
}
function timer4(){
	if(boll2==true){
	time1++;
	var hon1;
	hon1++;
	checklength1();
	if(time1==1){
	row6();
	}
	else if(time1==3){
	row7();
	}
	else if(time1==5){
	row8();
	}
	else if(time1==7){
	row9();
	}
	else if(time1==wind3){
	    finish2++;
	    ans1=numberlength3-(finish2-1);
		answer2(ans1,finish2);
		if(finish2<numberlength3){
		wind3++;
		wind4++;
		wind5++;
		}
	}
    if(time1==wind4){
		document.getElementById("a2").innerHTML+=info1;
	}
	creation1.appendChild(tbl1);
	if(time1==wind5){
		removeTable1();
		document.getElementById("a2").innerHTML="";
		info1=[];
		wind3=8;
		wind4=13;
		wind5=15
		time=0;
		finish2=0;
		danger1=2;
		boolten=false;
		ans1=numberlength3;
		document.getElementById('time').innerHTML="";
	}
	document.getElementById('time').innerHTML=time1;
	hit1=setTimeout(timer4,1000);
	}
}
function checklength1(){
if(numberlength3>numberlength4){
		f3=numberlength3-numberlength4;
		if(number4-number3>=0){
		t2=t2-f3;
		}
		else if(number4-number3<0){
			t3=t3-f3;
		}
		f3=0;
		//bool==2;
		numberlength4=numberlength3;
		//numberlength2=numberlength;
		
	}
	else if(numberlength4>numberlength3){
		f2=numberlength4-numberlength3;
		if(number3-number4<0){
			t3=t3-f2;
		}
		else if(number3-number4>=0){
			t2=t2-f2;
		}
		f2=0;
		//bool=3;
		numberlength3=numberlength4;
		//numberlength2=numberlength1;
	}	
	else if(numberlength4==numberlength3){
		//bool=4;
		numberlength5=numberlength4;
	}
}
function row6(){
	tr5=document.createElement('tr');
	for (var z=numberlength3+1;z>0;z--){
	td5=document.createElement('td');
	t2++;
	td5.id="1stNumber"+z;
	td5.height = '40';
	td5.width= '25';
	//number3[t];
	if(t2<0){
		td5.innerHTML+="";
	}
	else if(t2>=0&&t2<numberlength3){
	if(number3-number4>=0){
    td5.innerHTML+=number3[t2];
	}
	else if(number4-number3>0){
		td5.innerHTML+=number4[t2];	
	}
	}
	else{
		td5.innerHTML+="-";
	}
	tr5.appendChild(td5);
	}
	tbl1.appendChild(tr5);
}
function row7(){
	tr6=document.createElement('tr');
	for(var v=numberlength4;v>0;v--){
		td6=document.createElement('td')
		t3++;
		td6.id="2ndNumber"+v;
		td6.height = '40';
		td6.width= '25';
		//number4[t3];
		if(t3<0){
		td6.innerHTML+="";
	}
	else if(t3>=0) {
		if(number3-number4>=0){
    td6.innerHTML+=number4[t3];
	}
	else if(number4-number3>0){
		td6.innerHTML+=number3[t3];	
	}
	}
	else{
		td5.innerHTML+="-";
	}
	
		tr6.appendChild(td6);

	}
	tbl1.appendChild(tr6);
}
function row8(){
	tr7=document.createElement('tr');
	tr7.setAttribute("style","border-top: 1px solid #ddd");
	for(var x=numberlength3;x>0;x--){
		 td7=document.createElement('td')
		td7.id="answers"+x;
		td7.height = '40';
		td7.width= '25';
		tr7.appendChild(td7);
	}
	tbl1.appendChild(tr7);
}
function row9(){
	 tr8=document.createElement('tr');
	 tr8.setAttribute("style","border-top: 1px solid #ddd");
	for(var tin=numberlength3;tin>0;tin--){
		td8=document.createElement('td')
		td8.id="tallys"+tin;
		td8.height = '25';
		td8.width= '25';
		tr8.appendChild(td8);
	}
	tbl1.appendChild(tr8);
}
function answer2(ans1,finish2){
	var answer1;
	//var man;
	var y2;
	var y4;
	var y3;
	var y5;
	var a;
	//var a;
	var space3;
	var space4;
	var space5;
	var sd1;
	var sd2;
	var dang2=number3.length;
	var dang3=number4.length;
	var c2=dang2-dang3;
	var c3=dang3-dang2;
	
	var asd=1;
	danger1=1;
	//ans1=numberlength;
	 bingo=0;
	//for(var ans=numberlength;ans>0;ans--){
		//as++;
		
		if(number3-number4>=0){
			if(dang2==dang3){
			 space3=1;
			 space5=space3+1;
			 space4=1;
		}
		if(dang2>dang3){
			space3=1;
			space5=space3+1;
			space4=c2+1;
		}
		if(dang3>dang2){
			space3=c3+1;
			space5=space3+1;
			space4=1;	
		}
		y2=parseInt(number3[ans1-space3]);
		y4=parseInt(number3[ans1-space5]);
		y3=parseInt(number4[ans1-space4]);
		y5=parseInt(answer[ans1-1]);
		}
		else if(number4-number3>0){
			if(dang2==dang3){
			 space3=1;
			 space5=space3+1;
			 space4=1;
		}
			if(dang3>dang2){
			space3=1;
			space5=space3+1;
			space4=c3+1;
		}
		if(dang2>dang3){
			space3=c2+1;
			space5=space4+1;
			space4=1;	
		}
		y2=parseInt(number4[ans1-space3]);
		y4=parseInt(number4[ans1-space5]);
		y3=parseInt(number3[ans1-space4]);	
        y5=parseInt(answer[ans1-1]);		
		}
		
		if(boolten==true){
		   //if(finish2==numberlength){
			   
		   //}
			
			//if(y2==0){
				//answer1=Math.abs(y2);
			//}
			//if(finish2<=numberlength3){
				if(y2>0){
				y2=y2-1;
			document.getElementById("1stNumber"+(finish2+danger1)).innerHTML=y2;
			}
			else if(y2==0){
				y2=9
				document.getElementById("1stNumber"+(finish2+danger1)).innerHTML=y2;
			}
			boolten==false;
		}
			
		if(y2-y3<=0){
			if(isNaN(y4)){
			y4 = y4|| 0;
		}
		while(y4==0){
		//	y5=y4;
			    space5++;
				y4=parseInt(number3[ans1-space5]);
				//document.getElementById("1stNumber"+(finish2+1)).innerHTML=y4;
				danger1++;
		}
		if(y2-y3<0){
				y2=y2+10;
				//y5=y5+10;
			document.getElementById("1stNumber"+(finish2+danger1)).innerHTML='<span style="text-decoration: line-through;color:lightgray;">'+y4+'</span>';
			//document.getElementById("1stNumber"+(finish2+danger1-1)).innerHTML='<span style="text-decoration: line-through;color:lightgray;">'+y5+'</span>';
			y4=y4-1;
			//y5=y5-1;
			//document.getElementById("1stNumber"+(finish2+danger1-1)).innerHTML+=y5;
			document.getElementById("1stNumber"+(finish2+danger1)).innerHTML+=y4;
			
			//document.getElementById("1stNumber"+(finish2+2)).innerHTML=y5;
		    danger1=0;
			boolten=true;
			}
		}
		if(isNaN(y3)){
			y3 = y3|| 0;
		}
		if(isNaN(y2)){
			y2 = y2|| 0;
		}
	    if(y3==0){
			answer1=y2;
		}
		else if(y2==0){
			if(finish2==numberlength3){
				answer1=-Math.abs(y3);
			}
            else{
				answer1=y3;
		   }
		}
		else{
				answer1=y2-y3;
		}
		if(finish2==numberlength3){
			if(number4-number3>=0){
				
			answer1=-Math.abs(answer1);
			}
			}

			document.getElementById("answers"+(finish2)).innerHTML+=answer1;
			//info1=number3-number4;
		}
function timerout1(){
	clearTimeout(hit1);
}
function removeTable1(){
var rowCount1 = tbl1.rows.length;
for (var x2=rowCount1-1; x2>=0; x2--) {
   tbl1.deleteRow(x2);
}
}

