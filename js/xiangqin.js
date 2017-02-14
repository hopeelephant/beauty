var xihuan = document.getElementsByClassName('xihuan')[0];

var zan = document.getElementsByClassName('zan')[0];
var kaiguan = true;
xihuan.onclick = function(event){
	if(kaiguan){
		xihuan.style.color = "red";
		zan.innerHTML=889;
		kaiguan = false;
	}else{
		xihuan.style.color = "white";
		zan.innerHTML=888
		kaiguan = true;
	}
	event.preventDefault();
}

