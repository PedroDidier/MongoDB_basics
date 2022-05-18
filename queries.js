// 2. FIND 
// Acha todos os pontos turisticos do sistema
db.PontosTuristicos.find();
// Acha todos os documentos de cidade que tem praia
db.Cidades.find({temPraia:true});
// Acha o documento correspondente a cidade de olinda
db.Cidades.findOne({nome:"Olinda"});

// 3. SIZE
// Acha as cidades com 3 pontos turisticos
db.Cidades.find({pontos:{$size:3}});