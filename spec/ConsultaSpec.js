describe("Consulta", function() {


	it("nao deve cobrar nada se for um retorno", function() {
		var andre = new Paciente("Andre", 23, 60, 1.7);
		var consulta = new Consulta(andre, [], true, true);

		expect(consulta.preco()).toEqual(0);

	});


	it("deve cobrar 25 por cada procedimento comum", function() {
		var andre = new Paciente("Andre", 23, 60, 1.7);
		var consulta = new Consulta(andre, ["proc1", "proc2", "proc3"], false, false);

		expect(consulta.preco()).toEqual(75);
	});


	it("deve cobrar preco especifico dependendo do procedimento", function() {
		var andre = new Paciente("Andre", 23, 60, 1.7);
		var consulta = new Consulta(andre, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

		expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
	});


	it("deve cobrar no particular procedimentos comuns", function() {
		var andre = new Paciente("Andre", 23, 60, 1.7);
		var consulta = new Consulta(andre, ["procedimento-comum", "procedimento-comum"], true, false);

		expect(consulta.preco()).toEqual(50 * 2);
	});


	it("deve cobrar no particular procedimentos especiais", function() {
		var andre = new Paciente("Andre", 23, 60, 1.7);
		var consulta = new Consulta(andre, ["raio-x", "gesso"], true, false);

		expect(consulta.preco()).toEqual((55 + 32) * 2);
	});
});