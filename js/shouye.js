var box =document.getElementById("box");
			var pic =document.getElementById("pic");
			var buttons=document.getElementById("buttons").getElementsByTagName('a');
			var buttons2=document.getElementById("buttons");
			var prev =document.getElementById("prev");
			var next =document.getElementById("next");
			var index=0;
			var play;
			function G(id){
				return document.getElementById(id);
			}
			function addClass(obj,classname){
				var old = obj.getAttribute("class");
				if(old==null){
					obj.setAttribute("class",classname);
				}else{
					if(old.match(classname)==null){
						obj.setAttribute("class",old+" "+classname);
					}
				}
			}
			function removeClass(obj,classname){
				var old = obj.className;
				var arr =old.split(" ");
				for (var i = 0; i < arr.length; i++) {
					if(arr[i]==classname){
						arr.splice(i,1);
						i=0;
					}
				}
				var newClass = arr.join(" ");
				obj.className = newClass;
			}
			
			buttons2.onclick=function(event) {
				var tar =event.target;
				var xxx= tar.getAttribute("href");
				
				if(xxx=="#"){
					var ind = tar.getAttribute("index")-1;
					console.log(typeof tar.getAttribute("index"))
					index = ind;
					var ml =ind *-960+"px";
					pic.style.marginLeft=ml;
					for (var j = 0; j < buttons.length; j++){
						removeClass(buttons[j],"red");
						
					}
					addClass(buttons[index],"red");
					return false;
				}
				
			}
			function lunbo(){
				if(index<3){
							index=index+1;
						}else{
							index=0;
						}
						var ml =index*-960+"px";
						pic.style.marginLeft=ml;
						for (var j = 0; j < buttons.length; j++){
						removeClass(buttons[j],"red");
						
					}
						addClass(buttons[index],"red");
			}
			play = setInterval(lunbo,2000);
			box.onmouseenter=function(){
				clearInterval(play);
			}
			box.onmouseleave=function(){
				play=setInterval(lunbo,2000);
			}
