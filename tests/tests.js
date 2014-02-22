var assert = chai.assert;

suite('PRUEBAS PARA EL INI FILES PARSER', function() {

	test('Funcionamiento del LocalStorage', function() {
		if (window.localStorage) {
			localStorage.finaloutput = "test";
			assert.equal(localStorage.finaloutput, "test");
			localStorage.removeItem("test");
		}
	});
	
});