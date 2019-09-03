var assert    = require("chai").assert;
var hasMutation = require("../src/common/functions");

describe("Probando App Mutation: ", function() {
	describe("Checando hasMutation: ", function() {
		it("Mutación vertical: ", function() {
            let dna = [
                "ACTGTT",
                "ACTGGT",
                "ATCGCC",
                "ACTTGT",
                "CCTGAC"
            ];
            
            let result = hasMutation(dna);
			assert.equal(result, true);
        });	
        it("Mutación horizontal: ", function() {
            let dna = [
                "ACTGTT",
                "GCTGGT",
                "ATCGCC",
                "ACTTTT",
                "CCTGAC"
            ];
            
            let result = hasMutation(dna);
			assert.equal(result, true);
        });	
        it("Mutación oblicua: ", function() {
            let dna = [
                "ACGTGA",
                "CAGTGC",
                "TTATGT",
                "AGAATG",
                "CCGCTA",
                "TCACTG"
            ];
            
            let result = hasMutation(dna);
			assert.equal(result, true);
		});	
		it("Sin mutación: ", function() {
            let dna = [
                "ACGTGA",
                "CAGTGC",
                "TTATGT",
                "AGACTG",
                "CCGCTA",
                "TCACTG"
            ];
            let result = hasMutation(dna);
			assert.equal(result, false);
		});		

	});		
		
});