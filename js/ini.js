"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

$(document).ready(function() {
	$("#fileinput").change(calculate);
	// http://www.html5rocks.com/es/tutorials/file/dndfiles/
	// Setup the dnd listeners.
	var dropZone = document.getElementById('drop_zone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', handleFileSelect, false);
});

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    calculate(evt);
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function calculate(evt) {
	
	if (evt.type == "drop") 	// Si entra como drop
		var f = evt.dataTransfer.files[0];	// FileList object.
	else
		var f = evt.target.files[0]; 

	if (f) {
		var r = new FileReader();
		r.onload = function(e) { 
			var contents = e.target.result;
		  
			var tokens = lexer(contents);
			var pretty = tokensToString(tokens);
		  
			out.className = 'unhidden';
			
			// Si el navegador soporta localStore almacenamos en el localStorage los datos introducidos
			if (window.localStorage) {
				localStorage.initialinput = contents;
				localStorage.finaloutput = pretty;
			}
			
			initialinput.innerHTML = contents;		// El contenido original del fichero
			finaloutput.innerHTML = pretty;			// El árbol sintáctico usando underscore
		}
		r.readAsText(f);
		// http://jsfiddle.net/moscartong/uunAY/1/embedded/
		file.innerHTML = '<strong>' + f.name + '</strong>' + ' (' + f.type + ')' + ' -' + f.size + 'bytes' + ', last modified: ' + f.lastModifiedDate.toLocaleDateString();
		if (window.localStorage){
			localStorage.fileinput = file.innerHTML ;	
		} 
	} else { 
		alert("Failed to load file");
	}
}

function tokensToString(tokens) {
	var r = '';
	// Underscore
	var template = lista.innerHTML;	
   
	for(var i=0; i < tokens.length; i++) {
		var t = tokens[i]
		var s = JSON.stringify(t, undefined, 2);
		s = _.template(template, {token: t, match: s});
		r += s;
	}
	
	return '<ol>\n'+r+'</ol>';
}

function lexer(input) {
  var blanks         = /^\s+/;
  var iniheader      = /^\[([^\]\r\n]+)\]/;
  var comments       = /^[;#](.*)/;
  var nameEqualValue = /^([^=;\r\n]+)=([^;\r\n]*)/;
  var any            = /^(.|\n)+/;

  var out = [];
  var m = null;

  while (input != '') {
    if (m = blanks.exec(input)) {
      input = input.substr(m.index+m[0].length);
      out.push({ type : 'blanks', match: m });
    }
    else if (m = iniheader.exec(input)) {
      input = input.substr(m.index+m[0].length);
      out.push({ type: 'header', match: m });
    }
    else if (m = comments.exec(input)) {
      input = input.substr(m.index+m[0].length);
      out.push({ type: 'comments', match: m });
    }
    else if (m = nameEqualValue.exec(input)) {
      /* while (match casa con /\\$/) concatena la siguiente línea */
      input = input.substr(m.index+m[0].length);
      out.push({ type: 'nameEqualValue', match: m });
    }
    else if (m = any.exec(input)) {
      out.push({ type: 'error', match: m });
      input = '';
    }
    else {
      alert("Fatal Error!"+substr(input,0,20));
      input = '';
    }
  }
  return out;
}

window.onload = function() {		// Cuando se cargue la página se ejecuta lo que está aquí dentro
	// Si el navegador soporta localStorage y tenemos algo almacenado, pues lo cargamos en el textarea
    if (window.localStorage && localStorage.initialinput && localStorage.finaloutput) {	
		out.className = "unhidden";								// Cambiamos a la clase que muestra la tabla
        initialinput.innerHTML = localStorage.initialinput;		// Cargamos los datos del fichero original
        finaloutput.innerHTML = localStorage.finaloutput;		// Cargamos el árbol sintáctico
		file.innerHTML = localStorage.fileinput;				// Cargamos el nombre del fichero
    }	
};