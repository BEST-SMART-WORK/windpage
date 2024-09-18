    var elem = document.getElementById("stepid");
    var elem1 = document.getElementById("stepid1");
    var elem2 = document.getElementById("stepid2");
    var width = 45;
    var wait=1;
    var genvalue = [1000, 5000, 5000];
    var genvalueran=Math.floor(Math.random() * 3);
    var wait2=genvalue[genvalueran] + 800;
    var gennamelist = ["Gambit"];
    var name=gennamelist[Math.floor(Math.random() * 52)];
    var x=genvalue[genvalueran];
    var x= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var myVar2 = setInterval(UserTimer, 3000);
    function UserTimer() { document.getElementById("onlinuserid").innerHTML=Math.floor(Math.random() * 50)+200; 
    }
    var Radiovalue;
    function Mainstepfunction() {
    	var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) { Radiovalue = radios[i].value;
      }
    }
    	var  getusername= document.getElementById("username").value;
    	if (getusername!=""){
    			document.getElementById("Mainstep1").style.display = "none";
    			document.getElementById("Mainstep2").style.display = "block";
    	}else { document.getElementById("username").style.borderColor = "#fd6f6f";
      }
    }
    function functionPack1(cardvalue) {
    	var myVarCode = setInterval(genkey, 10);
    	var stop=0;
    	var KeyCode = ["A", "B", "C","D","E","F","G","H","I","J","K","L","Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","9","8","7","6","5","4","3","2","1","0"];
    	function genkey() {
    	 key1=KeyCode[Math.floor(Math.random() * 36)];
    	 key2=KeyCode[Math.floor(Math.random() * 36)];
    	 key3=KeyCode[Math.floor(Math.random() * 36)];
    	 key4=KeyCode[Math.floor(Math.random() * 36)];
    	 key5=KeyCode[Math.floor(Math.random() * 36)];
    	 key6=KeyCode[Math.floor(Math.random() * 36)];
    	 key7=KeyCode[Math.floor(Math.random() * 36)];
    	 key8=KeyCode[Math.floor(Math.random() * 36)];
    	 key9=KeyCode[Math.floor(Math.random() * 36)];
    	 key10=KeyCode[Math.floor(Math.random() * 36)];
    	 key11=KeyCode[Math.floor(Math.random() * 36)];
    	 key12=KeyCode[Math.floor(Math.random() * 36)];
    	 key13=KeyCode[Math.floor(Math.random() * 36)];
    	 key14=KeyCode[Math.floor(Math.random() * 36)];
    	 key15=KeyCode[Math.floor(Math.random() * 36)];
    	 key16=KeyCode[Math.floor(Math.random() * 36)];
    	if (stop<=98){
    		document.getElementById("gencode").innerHTML=key1+key2+key3+key4+"-"+key5+key6+key7+key8+"-"+key9+key10+key11+key12+"-"+key13+key14+key15+key16;
    	stop++;
    	}else {
    	document.getElementById("gencode").innerHTML=key1+key2+key3+key4+"-"+key5+key6+key7+key8+"-"+key9+key10+key11+key12+"-####";
    	document.getElementById("gencode1").innerHTML=key1+key2+key3+key4+"-"+key5+key6+key7+key8+"-"+key9+key10+key11+key12+"-####";
    	clearInterval(myVarCode);
       }
    }
       document.getElementById("Mainstep2").style.display = "none";
       document.getElementById("Mainstep3").style.display = "block";
    	var myVar = setInterval(myTimer, 10);
    	var width=0;
    	function myTimer() { width++;
    	 document.getElementById("Progressbar").style.width = width+"%";
    	 document.getElementById("percent").innerHTML=width + " %";
    	 if (width>=100){
    		if (cardvalue==1){
    			document.getElementById("selectedimage").src = "https://i.ibb.co/cCY7g6M/New-Project-2023-11-11-T150136-088.png";
    		}else if (cardvalue==2){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/16454932785b7b640a16766af88f84901c26fde30d.png";
    		}else if (cardvalue==3){
    			document.getElementById("selectedimage").src = "https://storage.googleapis.com/alpine-inkwell-325917.appspot.com/devices/iphone-14-header.png";         
    		}else if (cardvalue==4){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/16470047894e0de69106b6d5dc5add9dcfe186f25e.png";
    		}else if (cardvalue==5){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/16456066913af5eafc1e8f4b67bdb9fad531193dd3.png";
    		}else if (cardvalue==6){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/16456066916e6559533a5e292ccba8bb80f9149007.png";			
    		}else if (cardvalue==7){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/1645606691ccf0a7bdb704e85631127b851dc0e997.png";			
    		}else if (cardvalue==8){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/164560669197909a539d87aced1c1438c4da903d01.png";        
    		}else if (cardvalue==9){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/1645606690250c6c064370ec8752e020ce647d55a1.png";			
    		}else if (cardvalue==10){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/1645606690860b44915e39951ccef2f78aae356a84.png";			
    		}else if (cardvalue==11){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/1645606690bc25555bab4430a7900a83e596aef47d.png";			
    		}else if (cardvalue==12){
    			document.getElementById("selectedimage").src = "https://d2lmlpk6xgu7kg.cloudfront.net/uploads/1645606690dfe4c50e8dab48f102c825bbb91242c3.png";			
    		}        
    			document.getElementById("Mainstep3").style.display = "none";
    			document.getElementById("Mainstep4").style.display = "block";
    	  }
       }
    }
