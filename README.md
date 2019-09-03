# App with Node, Mongodb
API de tipo REST que valida si existe mutaciones en un array de cadenas. Estas solo pueden contener combinaciones formadas por las siguientes letas (A,T,C,G).

Montar la Aplicación: <br/>
npm run start 

Testear la aplicación: <br />
npm run test

Testear la aplicación con cobertura: <br/>
npm run test-coverage


Peticiones Http

Validar mutaciones: <br/>
POST - https://app-mutations.herokuapp.com/mutation <br/>
OBJETO:  { "dna":["ACGTGA","CAGTGC","TTATGT","AGAATG","CCGCTA","TCACTG"] }

Consultar Ratio <br/>
GET - https://app-mutations.herokuapp.com/stats



