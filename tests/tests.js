var assert = chai.assert;

suite('PRUEBAS PARA EL LOCALSTORAGE', function() {
	test('Soporta localStorage', function() {
		if (window.localStorage) {
			localStorage.finaloutput = '\n\n<ol> <li class = "header"> <span > { \n"type": "header", \n"match": [ \n "[special_fields]", \n "special_fields" \n] \n} </span> <li class = "blanks"> <span > { \n"type": \n"blanks", \n"match": [ \n " \r\n" \n] \n} </span> <li class = "nameEqualValue"> <span > \n{ \n"type": "nameEqualValue", \n"match": [ \n "required = \"EmailAddr,FirstName, \\", \n "required ", \n " \"EmailAddr,FirstName, \\" \n] \n} </span> <li class = "blanks"> <span > \n{ \n"type": "blanks", \n"match": [ \n "\r\n" \n] \n} </span> <li class = "error"> <span > \n{ \n"type": "error", \n"match": [ \n "LastName, \\", \n "\\" \n] \n} </span> </ol>';
			assert.deepEqual(localStorage.finaloutput, '\n\n<ol> <li class = "header"> <span > { \n"type": "header", \n"match": [ \n "[special_fields]", \n "special_fields" \n] \n} </span> <li class = "blanks"> <span > { \n"type": \n"blanks", \n"match": [ \n " \r\n" \n] \n} </span> <li class = "nameEqualValue"> <span > \n{ \n"type": "nameEqualValue", \n"match": [ \n "required = \"EmailAddr,FirstName, \\", \n "required ", \n " \"EmailAddr,FirstName, \\" \n] \n} </span> <li class = "blanks"> <span > \n{ \n"type": "blanks", \n"match": [ \n "\r\n" \n] \n} </span> <li class = "error"> <span > \n{ \n"type": "error", \n"match": [ \n "LastName, \\", \n "\\" \n] \n} </span> </ol>');
			localStorage.removeItem("test");
		}
	});
	
});

suite('PRUEBAS PARA LOS STRING', function() {
    test('Pretty', function() {
		var tokens = lexer("pretty = string");
		var pretty = tokensToString(tokens);
		assert.isString(pretty);
    });	
});

suite('PRUEBAS PARA LA DETECCIÓN DE LOS TYPE', function() {
	setup(function(){
		var tokens;
	});

	test('Detección: Blanks', function() {
		tokens = lexer(" ");
		assert.equal(tokens[0].type,'blanks');
		assert.equal(tokens[0].match[0], ' ');
	});
	test('Detección: Header', function() {
		tokens = lexer("[header]");
		assert.equal(tokens[0].type,'header');
		assert.equal(tokens[0].match[0], '[header]');
		assert.equal(tokens[0].match[1], 'header');
	});
	test('Detección: Comments', function() {
		tokens = lexer(";comments");
		assert.equal(tokens[0].type,'comments');
		assert.equal(tokens[0].match[0], ';comments');
		assert.equal(tokens[0].match[1], 'comments');
	});
	test('Detección: NameEqualValue', function() {
		tokens = lexer("nameEqualValue=nameEqualValue");
		assert.equal(tokens[0].type,'nameEqualValue');
		assert.equal(tokens[0].match[0], 'nameEqualValue=nameEqualValue');
		assert.equal(tokens[0].match[1], 'nameEqualValue');
		assert.equal(tokens[0].match[2], 'nameEqualValue');
	});
});

suite('PRUEBAS PARA LA DETECCIÓN DE LOS MATCH', function() {
	setup(function(){
		var tokens;
		var pretty;
	});

	test('Detección: Blanks', function() {
		tokens = lexer(" ");
		pretty = tokensToString(tokens);
		assert.equal(pretty, '<ol>\n\n\t\t\t<li class = "blanks"> <span > {\n  "type": "blanks",\n  "match": [\n    " "\n  ]\n} </span>\n\t\t</ol>');
		assert.notEqual(pretty, '<ol></ol>');
	});
	test('Detección: Header', function() {
		tokens = lexer("[header]");
		pretty = tokensToString(tokens);
		assert.equal(pretty, '<ol>\n\n\t\t\t<li class = "header"> <span > {\n  "type": "header",\n  "match": [\n    "[header]",\n    "header"\n  ]\n} </span>\n\t\t</ol>');
		assert.notEqual(pretty, '<ol></ol>');
	});
	test('Detección: Comments', function() {
		tokens = lexer(";comments");
		pretty = tokensToString(tokens);
		assert.equal(pretty, '<ol>\n\n\t\t\t<li class = "comments"> <span > {\n  "type": "comments",\n  "match": [\n    ";comments",\n    "comments"\n  ]\n} </span>\n\t\t</ol>');
		assert.notEqual(pretty, '<ol>\n\n\t\t\t<li class = "header"> <span > {\n  "type": "header",\n  "match": [\n    "[header]",\n    "header"\n  ]\n} </span>\n\t\t</ol>');
	});
	test('Detección: NameEqualValue', function() {
		tokens = lexer("pretty = string");
		pretty = tokensToString(tokens);
		assert.equal(pretty, '<ol>\n\n\t\t\t<li class = "nameEqualValue"> <span > {\n  "type": "nameEqualValue",\n  "match": [\n    "pretty = string",\n    "pretty ",\n    " string"\n  ]\n} </span>\n\t\t</ol>');
		assert.notEqual(pretty, '<ol>\n\n\t\t\t<li class = "header"> <span > {\n  "type": "header",\n  "match": [\n    "[header]",\n    "header"\n  ]\n} </span>\n\t\t</ol>');
   });	
});

suite('PRUEBAS PARA COMPROBAR ERRORES', function() {
	setup(function(){
		var tokens;
		var pretty;
	});
	
	test('Type', function() {
		tokens = lexer("!!");
		assert.match(tokens[0].type, /error/);
	});
	
	test('Match', function() {
		tokens = lexer("!!");
		pretty = tokensToString(tokens);
		assert.match(pretty, /error/);
	});
});