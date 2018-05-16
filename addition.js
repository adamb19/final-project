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
//adition function feature all the extras to do the column addition method
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
	//creation tbl
	creation=document.getElementById('creation');
	tbl=document.createElement('table');
	timer3();
}

//make the timer so when timer ticks the animation are done at certain parts of the time
function timer3(){
	time++;
	var hon;
	hon++;
	checklength();
	//if time==1 then create first row
	if(time==1){
	     row1();
	}
	//if time==3 then create second row
	else if(time==3){
	     row2();
	}
	//if timer==5  then create third row
	else if(time==5){
	     row3();
	}
	//if time==7 then create fourth row
	else if(time==7){
	     row4();
	}
	//if time will always incrmenet until number length is less then finish
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
	//show answer in the box shown
    if(time==wind1){
		document.getElementById("a2").innerHTML+=info.join("");
	}
	creation.appendChild(tbl);
	//if time reset everything
	if(time==wind2){
		removeTable();
		document.getElementById("a2").innerHTML="";
		info=[];
		wind=8;
		wind1=13;
		wind2=15;
		finish1=0;
		finish=0;
		timerout();
		ans=numberlength;
		document.getElementById('time').innerHTML="";
	}
	document.getElementById('time').innerHTML=time;
	//reset every 1 millisecond
	if(time<wind2){
	hit=setTimeout(timer3,1000);
	}
}
	
//this length checks how big the two number are
function checklength(){
	//if the firstnumber is bigger than the second then move the second two to the right to line up number proerly
     if(numberlength>numberlength1){
		f1=numberlength-numberlength1;
		t1=t1-f1;
		f1=0;
		numberlength1=numberlength;	
	}
	//if the second number isbigger then the first number then change the first number proerly
	else if(numberlength1>numberlength){
		f=numberlength1-numberlength;
		t=t-f;
		f=0;
		numberlength=numberlength1;
	}
    //if they are the same then leave both the same	
	else if(numberlength1==numberlength){
		//bool=4;
		numberlength2=numberlength1;
	}
}

//make the first row
function row1(){
	tr=document.createElement('tr');
	//carry on making cells until all the first number is placed in cells in the box
	for (var i=numberlength+1;i>0;i--){
	td=document.createElement('td');
	t++;
	td.id="1stNo"+i;
	td.height = '40';
	td.width= '25';
	//if it less then zero then it willbe blank otherwise put anumber in the box
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

//roww 2 will make 2nd number this is very similar to the first number
function row2(){
	tr2=document.createElement('tr');
	for(var j=numberlength1;j>0;j--){
		td2=document.createElement('td')
		t1++;
		td2.id="2ndNo"+j;
		td2.height = '40';
		td2.width= '25';
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

//the third row will be empty until information is placed in 
function row3(){
	tr3=document.createElement('tr');
	//this makes a border above the cell
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

//this moves the last row until tally inofrmatin is given
function row4(){
	 tr4=document.createElement('tr');
	 //add a border at the top and make the font size smaller
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

//thhis help make the answer and tally 
//param ans, finish
function answer1(ans,finish){
	var answer;
	var y ;
	var y1;
	var a;
	var space;;
	var space1;
	var sd1;
	var sd2;
	var dang=number2.length;
	var dang1=number.length;
	var c=dang-dang1;
	var c1=dang1-dang;
	 bingo=0;
	 //make the dange so the rest number are picked proerly as there might be a difference in size
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
		
		//if the number are 0 or nothing then the other number is the nswer
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
		//if finish is less then it will do carrys normally
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
		
		//don't use carrys here 
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
	
	//timerout equals clesartimeout
function timerout(){
	clearTimeout(hit);
}

//this would remove the table
function removeTable(){
var rowCount = tbl.rows.length;
for (var x=rowCount-1; x>=0; x--) {
   tbl.deleteRow(x);
}
}