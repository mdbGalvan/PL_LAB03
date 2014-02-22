var assert = chai.assert;

suite('PRUEBAS PARA EL LOCALSTORAGE', function() {
	test('Soporta localStorage', function() {
		if (window.localStorage) {
			localStorage.finaloutput = "test";
			assert.equal(localStorage.finaloutput, "test");
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
	});
	test('Detección: Header', function() {
		tokens = lexer("[header]");
		assert.equal(tokens[0].type,'header');
	});
	test('Detección: Comments', function() {
		tokens = lexer(";comments");
		assert.equal(tokens[0].type,'comments');
	});
	test('Detección: NameEqualValue', function() {
		tokens = lexer("nameEqualValue = nameEqualValue");
		assert.equal(tokens[0].type,'nameEqualValue');
	});
	test('Detección: Error', function() {
		tokens = lexer("!!");
		assert.equal(tokens[0].type,'error');
	});
});

suite('PRUEBAS PARA LA DETECCIÓN DE LOS TYPE', function() {
	setup(function(){
		var tokens;
	});

	test('Detección: Blanks', function() {
		tokens = lexer(" ");
		assert.equal(tokens[0].type,'blanks');
	});
	test('Detección: Header', function() {
		tokens = lexer("[header]");
		assert.equal(tokens[0].type,'header');
	});
	test('Detección: Comments', function() {
		tokens = lexer(";comments");
		assert.equal(tokens[0].type,'comments');
	});
	test('Detección: NameEqualValue', function() {
		var tokens = lexer("pretty = string");
		var pretty = tokensToString(tokens);
		assert.equal(pretty, '<ol>\n\n\t\t\t<li class = "nameEqualValue"> <span > {\n  "type": "nameEqualValue",\n  "match": [\n    "pretty = string",\n    "pretty ",\n    " string"\n  ]\n} </span>\n\t\t</ol>');
    });	
	test('Detección: Error', function() {
		tokens = lexer("!!");
		assert.equal(tokens[0].type,'error');
	});
});
