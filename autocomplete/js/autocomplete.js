window.onload = function() {
	erase_js();
	erase_css();
	erase_html();
	enumerate();
};

function stuff_js () {
	$("span.gap_js").css("background-color","#9A2EFE");
	$("span.gap_js").css("color","white");
	
	$('#sol0').text("strict");
	$('#sol1').text("ready");
	$('#sol2').text("click");
	$('#sol3').text("FileReader");
	$('#sol4').text("result");
	$('#sol5').text("text()");
	$('#sol6').text("text()");
	$('#sol7').text("readAsText");
	$('#sol8').text("token.type");
	$('#sol8A').text("match");
	$('#sol9').text("\s+");
	$('#sol10').text("\[([^\]\\r\\n]+)\]");
	$('#sol11').text("[;#](.*)");
	$('#sol12').text("([^=;\\r\\n]+)=([^;\\r\\n]*)");
	$('#sol13').text("(.|\\n)+");
	$('#sol14').text("exec");
	$('#sol15').text("m[0].length");
	$('#sol16').text("'blanks'");
	$('#sol17').text("m");
	$('#sol18').text("m.index+m[0].length");
	$('#sol19').text("out.push({ type: 'header', match: m });");
	$('#sol20').text("m.index+m[0].length");
	$('#sol21').text("out.push({ type: 'comments', match: m });");
	$('#sol22').text("m.index+m[0].length");
	$('#sol23').text("out.push({ type: 'nameEqualtextue', match: m });");
	$('#sol24').text("out.push({ type: 'error', match: m });");
}

function stuff_html() {
	$("span.gap_html").css("background-color","#9A2EFE");
	$("span.gap_html").css("color","white");
	$('#html1').text("fileinput");
	$('#html2').text("initialinput");
	$('#html3').text("finaloutput");
}

function stuff_css() {
	$("span.gap_css").css("background-color","#9A2EFE");
	$("span.gap_css").css("color","white");
	$('#css1').text("none");
	$('#css2').text("block");
	$('#css3').text("background-color");
	$('#css4').text("___");
	$('#css5').text("background-color");
	$('#css6').text("___");
	$('#css7').text("background-color");
	$('#css8').text("___");
	$('#css9').text("background-color");
	$('#css10').text("___");
	$('#css11').text("background-color");
	$('#css12').text("___");
}

function erase_js () {
	$("span.gap_js").css("color","black");
<<<<<<< HEAD
	$("span.gap_js").css("background-color","#D6B64C");
=======
	$("span.gap_js").css("background-color","#BFAA84");
>>>>>>> origin/master
	$("span.gap_js").text('_______');
}

function erase_css () {
	$("span.gap_css").css("color","black");
<<<<<<< HEAD
	$("span.gap_css").css("background-color","#D6B64C");
=======
	$("span.gap_css").css("background-color","#BFAA84");
>>>>>>> origin/master
	$("span.gap_css").text('_______');
}

function erase_html () {
	$("span.gap_html").css("color","black");
<<<<<<< HEAD
	$("span.gap_html").css("background-color","#D6B64C");
=======
	$("span.gap_html").css("background-color","#BFAA84");
>>>>>>> origin/master
	$("span.gap_html").text('_______');
}