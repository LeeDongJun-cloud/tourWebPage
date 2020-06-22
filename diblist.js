function loadlist(){
	var key = "";
	var pairs = "<tr><th>찜목록</th><th>링크</th></tr>\n";
	var i=0;
	document.getElementById("myDibs").innerHTML = pairs;
	for(i=0;i<localStorage.length;i++){
		key = localStorage.key(i);
		pairs += "<tr><td>"+key+"</td>\n<td><a href=\""+localStorage.getItem(key)+"\"  data-ajax=\"false\" style=\"text-decoration: none; color:black;\">이동</a></th></tr>\n";
		document.getElementById("myDibs").innerHTML = pairs;
	}
	
}