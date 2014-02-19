window.onload = function() {
	erase_js();
	erase_css();
	erase_html();
};


function stuff_js () {
	$("span.gap_js").css("background-color","white");
	$("span.gap_js").css("color","blue");
	
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
	$("span.gap_html").css("background-color","white");
	$("span.gap_html").css("color","blue");
	$('#html1').text("fileinput");
	$('#html2').text("initialinput");
	$('#html3').text("finaloutput");
}

function stuff_css() {
	$("span.gap_css").css("background-color","white");
	$("span.gap_css").css("color","blue");
	$('#css1').text("___");
	$('#css2').text("___");
	$('#css3').text("___");
	$('#css4').text("___");
	$('#css5').text("___");
	$('#css6').text("___");
	$('#css7').text("___");
	$('#css8').text("___");
	$('#css9').text("___");
	$('#css10').text("___");
	$('#css11').text("___");
	$('#css12').text("___");
}

function erase_js () {
	$("span.gap_js").css("color","black");
	$("span.gap_js").css("background-color","yellow");
	$("span.gap_js").text('_______');
}

function erase_css () {
	$("span.gap_css").css("color","black");
	$("span.gap_css").css("background-color","yellow");
	$("span.gap_css").text('_______');
}

function erase_html () {
	$("span.gap_html").css("color","black");
	$("span.gap_html").css("background-color","yellow");
	$("span.gap_html").text('_______');
}