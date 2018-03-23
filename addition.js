//function addition(){
    //var txt = document.form.txt.value;
    //var number=number1;
	//var number2=numberb;
	//var number =new String(number);
	//var number2 =new String(number);
	//numbera.length;
	//numberc.length;
	var numberlength;
	var numberlength1;
	var numberlength2;
	var t;
	var t1;
	var creation;
	var tbl;
	//var tr;
	var f1;
	var f;
	var finish;
	//var finish1;
	var number2;
	var number;
	var time;
	var td;
	var td2;
	var td3;
	var td4;
	var tr;
	var tr2;
	var tr3;
	var tr4;
	var tim=0;
	var hit;
	var hon=-1;
	var info=[];
	var second;
	var ans;
	var wind=8;
	var wind1=13;
	var wind2=15;
	var carry=false;
	var bol13;
function additionFunction(s,s1){
	numberlength=s.length;
	numberlength1=s1.length;
	 number=s;
	 number2=s1;
	 hon++;
	 boll3=true;
	 boll2=false;
	t=-1;
	t1=-1;
	time=0;
	finish=0;
	finish1=0;
	if(hon>0){
		timerout();
	if(hon1>0){
		timerout1();
		}
	}
	creation=document.getElementById('creation');
	tbl=document.createElement('table');
	timer3();
}
function timer3(){
	if(boll3==true){
	time++;
	var hon;
	hon++;
	checklength();
	if(time==1){
	row1();
	}
	else if(time==3){
	row2();
	}
	else if(time==5){
	row3();
	}
	else if(time==7){
	row4();
	}
	else if(time==wind){
	    finish++;
	    ans=numberlength-(finish-1);
		answer1(ans,finish);
		if(finish<numberlength){
		wind++;
		wind1++;
		wind2++;
		}
	}
    if(time==wind1){
		document.getElementById("a2").innerHTML+=info.join("");
	}
	creation.appendChild(tbl);
	if(time==wind2){
		removeTable();
		document.getElementById("a2").innerHTML="";
		info=[];
		wind=8;
		wind1=13;
		wind2=15
		finish=0;
		ans=numberlength;
		document.getElementById('time').innerHTML="";
	}
	
	
	document.getElementById('time').innerHTML=time
	hit=setTimeout(timer3,1000);
	}
}
function checklength(){
if(numberlength>numberlength1){
		f1=numberlength-numberlength1;
		t1=t1-f1;
		f1=0;
		//bool==2;
		numberlength1=numberlength;
		//numberlength2=numberlength;
		
	}
	else if(numberlength1>numberlength){
		f=numberlength1-numberlength;
		t=t-f;
		f=0;
		//bool=3;
		numberlength=numberlength1;
		//numberlength2=numberlength1;
	}	
	else if(numberlength1==numberlength){
		//bool=4;
		numberlength2=numberlength1;
	}
}
function row1(){
	tr=document.createElement('tr');
	for (var i=numberlength+1;i>0;i--){
	td=document.createElement('td');
	t++;
	td.id="1stNo"+i;
	td.height = '40';
	td.width= '25';
	//number3[t];
	if(t<0){
		td.innerHTML+="";
	}
	else if(t>=0&&t<numberlength){
    td.innerHTML+=number[t];
	}
	else if(t>=numberlength){
		td.innerHTML+="+";
	}
	if(td.innerhtml=="undefined"){
		td.innerHTML="+";
	}
	tr.appendChild(td);
	}
	tbl.appendChild(tr);
}
function row2(){
	tr2=document.createElement('tr');
	for(var j=numberlength1;j>0;j--){
		td2=document.createElement('td')
		t1++;
		td2.id="2ndNo"+j;
		td2.height = '40';
		td2.width= '25';
		//number4[t];
		if(t1<0){
		td2.innerHTML+="";
	}
	else if(t1>=0) {
    td2.innerHTML+=number2[t1];
	}
	
		tr2.appendChild(td2);

	}
	tbl.appendChild(tr2);
}
function row3(){
	tr3=document.createElement('tr');
	tr3.setAttribute("style","border-top: 1px solid #ddd");
	for(var k=numberlength1;k>0;k--){
		 td3=document.createElement('td')
		td3.id="answer"+k;
		td3.height = '40';
		td3.width= '25';
		tr3.appendChild(td3);
	}
	tbl.appendChild(tr3);
}
function row4(){
	 tr4=document.createElement('tr');
	 tr4.setAttribute("style","border-top: 1px solid #ddd");
	 tr4.setAttribute("style","font-size:12px");
	for(var l=numberlength1;l>0;l--){
		td4=document.createElement('td')
		td4.id="tally"+l;
		td4.height = '5';
		td4.width= '25';
		tr4.appendChild(td4);
	}
	tbl.appendChild(tr4);
}
function answer1(ans,finish){
	var answer;
	//var man;
	var y ;
	var y1;
	var a;
	//var a;
	var space;;
	var space1;
	var sd1;
	var sd2;
	var dang=number2.length;
	var dang1=number.length;
	var c=dang-dang1;
	var c1=dang1-dang;
	//ans1=numberlength;
	 bingo=0;
	//for(var ans=numberlength;ans>0;ans--){
		//as++;
		if(dang==dang1){
			 space=1;
			 space1=1;
		}
		if(dang>dang1){
			space=1;
			space1=c+1;
		}
		if(dang1>dang){
			space=c1+1;
			space1=1;	
		}
		y1=parseInt(number2[ans-space]);
		y=parseInt(number[ans-space1]);
		
		if(isNaN(y)){
			answer=y1;
		}
		else if(isNaN(y1)){
			answer=y;
		}
	    else if(y==0){
			answer=y1;
		}
		else if(y1==0){
			answer=y;
		}
		else{
			answer=y+y1;
		}
		if(finish<numberlength){
		if(answer>=10&&carry==false){
			answer=answer-10;
		   document.getElementById("tally"+(finish+1)).innerHTML+="1";
			document.getElementById("answer"+(finish)).innerHTML+=answer;
		 carry=true;
		 info.unshift(answer);
		}
		else if(answer>=10&&carry==true){
			answer=answer+1-10;
		   document.getElementById("tally"+(finish+1)).innerHTML+="1";
			//a=a+1;
			document.getElementById("answer"+(finish)).innerHTML+=answer;
			info.unshift(answer);
		}
		else if(answer<10&&carry==true){
			a=1;
			answer=answer+1;
			if(answer==10){
				answer=answer-10;
				 document.getElementById("tally"+(finish+1)).innerHTML+="1";
			//a=a+1;
			document.getElementById("answer"+(finish)).innerHTML+=answer;
			info.unshift(answer);
			}
			else if(answer<10){
			document.getElementById("answer"+(finish)).innerHTML+=answer;
            carry=false;
			info.unshift(answer);
			}
			
		}
		else if(answer<10&&carry==false){
			document.getElementById("answer"+(finish)).innerHTML+=answer;
			info.unshift(answer);
		}
		}
		
		else if(finish==numberlength){
			if(carry==true){
				a=1;
			answer=answer+a;
			document.getElementById("answer"+(finish)).innerHTML+=answer;
            carry=false;
			info.unshift(answer);
			}
			else if(carry==false){
			document.getElementById("answer"+(finish)).innerHTML+=answer;
			info.unshift(answer);
			}
		}
	}
function timerout(){
	clearTimeout(hit);
}
function removeTable(){
var rowCount = tbl.rows.length;
for (var x=rowCount-1; x>=0; x--) {
   tbl.deleteRow(x);
}
}