describe("Paciente", function() {

	// Criar um único teste por classe de equivalência
	/* 
	Classes de equivalência é o nome que damos para quando temos testes "parecidos", que exercitam o mesmo caminho no código de produção.
	Idealmente devemos ter apenas um único teste por classe de equivalência.
	Afinal, se dois testes exercitam o mesmo trecho de código, então ambos passarão e falharão no mesmo momento, tornando um deles desnecessário.
	*/
	it("deve calcular o imc", function() {

		var andre = new Paciente("Andre", 23, 60, 1.7);

		expect(andre.imc()).toEqual(60 / (1.7 * 1.7));

	});

	it("deve calcular os batimentos cardiacos", function() {

		var andre = new Paciente("Andre", 23, 60, 1.7);

		expect(andre.batimentos()).toEqual(23 * 365 * 24 * 60 * 80);

	});

});