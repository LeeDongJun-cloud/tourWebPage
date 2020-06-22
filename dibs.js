function init(){
	var dibs = document.getElementsByClassName("dibs");
	for(i=0;i<localStorage.length;i++){
		var on = localStorage.key(i);
		for(j=0;j<dibs.length;j++){
			if(dibs[j].name.match(on)){
				dibs[j].src="dibs.png";
			}
		}
	}
}
function gyeongbokDibs(){
	 var dibs = document.getElementsByClassName("gyeongbokDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("경복궁","seoul.html#seoul_sightseeing");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("경복궁");
	 }
}
function myeongdongDibs(){
	 var dibs = document.getElementsByClassName("myeongdongDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("명동","seoul.html#seoul_sightseeing");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("명동");
	 }
}
function namsanDibs(){
	 var dibs = document.getElementsByClassName("namsanDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("남산","seoul.html#seoul_sightseeing");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("남산");
	 }
}
function cheonggyecheonDibs(){
	 var dibs = document.getElementsByClassName("cheonggyecheonDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("청계천","seoul.html#seoul_sightseeing");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("청계천");
	 }
}
function cuisinboDibs(){
	 var dibs = document.getElementsByClassName("cuisinboDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("쿠이신보","seoul.html#seoul_restaurant");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("쿠이신보");
	 }
}
function soiDibs(){
	 var dibs = document.getElementsByClassName("soiDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("소이연남마오","seoul.html#seoul_restaurant");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("소이연남마오");
	 }
}
function jinmiDibs(){
	 var dibs = document.getElementsByClassName("jinmiDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("진미평양냉면","seoul.html#seoul_restaurant");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("진미평양냉면");
	 }
}
function herbDibs(){
	 var dibs = document.getElementsByClassName("herbDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("허브족발","seoul.html#seoul_restaurant");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("허브족발");
	 }
}
function zzzipDibs(){
	 var dibs = document.getElementsByClassName("zzzipDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("ZZZIP","seoul.html#seoul_lodging");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("ZZZIP");
	 }
}
function shillaDibs(){
	 var dibs = document.getElementsByClassName("shillaDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울신라호텔","seoul.html#seoul_lodging");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울신라호텔");
	 }
}
function backpackerDibs(){
	 var dibs = document.getElementsByClassName("backpackerDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("Backpackers","seoul.html#seoul_lodging");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("Backpackers");
	 }
}
function sglampingDibs(){
	 var dibs = document.getElementsByClassName("sglampingDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울북한산럭셔리카라반&수영장글램핑","seoul.html#seoul_lodging");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울북한산럭셔리카라반&수영장글램핑");
	 }
}
function naksanDibs(){
	 var dibs = document.getElementsByClassName("naksanDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("낙산공원","seoul.html#seoul_photospot");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("낙산공원");
	 }
}
function yongmaDibs(){
	 var dibs = document.getElementsByClassName("yongmaDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("용마랜드","seoul.html#seoul_photospot");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("용마랜드");
	 }
}
function olympicparkDibs(){
	 var dibs = document.getElementsByClassName("olympicparkDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("올림픽공원","seoul.html#seoul_photospot");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("올림픽공원");
	 }
}
function gyeongheeDibs(){
	 var dibs = document.getElementsByClassName("gyeongheeDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("경희궁","seoul.html#seoul_photospot");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("경희궁");
	 }
}
function roseDibs(){
	 var dibs = document.getElementsByClassName("roseDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울장미축제","seoul.html#seoul_festival");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울장미축제");
	 }
}
function roadartDibs(){
	 var dibs = document.getElementsByClassName("roadartDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울거리예술축제","seoul.html#seoul_festival");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울거리예술축제");
	 }
}
function lanternDibs(){
	 var dibs = document.getElementsByClassName("lanternDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울빛초롱축제","seoul.html#seoul_festival");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울빛초롱축제");
	 }
}
function fireworksDibs(){
	 var dibs = document.getElementsByClassName("fireworksDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("서울세계불꽃축제","seoul.html#seoul_festival");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("서울세계불꽃축제");
	 }
}
function fritzDibs(){
	 var dibs = document.getElementsByClassName("fritzDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("프릳츠","seoul.html#seoul_cafe");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("프릳츠");
	 }
}

function layeredDibs(){
	 var dibs = document.getElementsByClassName("layeredDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("레이어드","seoul.html#seoul_cafe");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("레이어드");
	 }
}
function dongyangDibs(){
	 var dibs = document.getElementsByClassName("dongyangDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("동백양과점","seoul.html#seoul_cafe");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("동백양과점");
	 }
}
function namusairoDibs(){
	 var dibs = document.getElementsByClassName("namusairoDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("나무사이로","seoul.html#seoul_cafe");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("나무사이로");
	 }
}
function cartDibs(){
	 var dibs = document.getElementsByClassName("cartDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("카트체험장","seoul.html#seoul_activity");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("카트체험장");
	 }
}
function lotteworldDibs(){
	 var dibs = document.getElementsByClassName("lotteworldDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("롯데월드","seoul.html#seoul_activity");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("롯데월드");
	 }
}
function gbboatDibs(){
	 var dibs = document.getElementsByClassName("gbboatDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("수상레저체험","seoul.html#seoul_activity");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("수상레저체험");
	 }
}
function cableDibs(){
	 var dibs = document.getElementsByClassName("cableDibs");
	 if(dibs[0].src.match("nodibs.png")){
	 	dibs[0].src="dibs.png";
	 	localStorage.setItem("케이블카","seoul.html#seoul_activity");
	 }
	 else{
	 	dibs[0].src="nodibs.png";
	 	localStorage.removeItem("케이블카");
	 }
}