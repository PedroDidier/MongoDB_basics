// 2. FIND
// Acha todos os pontos turisticos do sistema
db.PontosTuristicos.find();
// Acha todos os documentos de cidade que tem praia
db.Cidades.find({ temPraia: true });
// Acha o documento correspondente a cidade de olinda
db.Cidades.findOne({ nome: "Olinda" });

// 3. SIZE
// Acha as cidades com 3 pontos turisticos
db.Cidades.find({ pontos: { $size: 3 } });

// 5. MATCH, 10. COUNT
// Conta a quantidade de Pontos Turísticos com a categoria "Histórico"
db.PontosTuristicos.aggregate([
  { $match: { categoria: "Historico" } },
  {
    $count: "Pontos históricos",
  },
]);

// 4. AGGREGATE, 6. PROJECT, 8. GROUP, 9. SUM
// Conta quantas vezes cada municipio aparece em pacotes de viagem
db.Pacotes.aggregate([
  { $project: { municipios: 1 } },
  { $unwind: "$municipios" },
  {
    $group: {
      _id: "$municipios",
      quantidade: { $sum: 1 },
    },
  },
]);

// 13. EXISTS
// Lista todos os pontos turísticos que não possuem um CEP associado
db.PontosTuristicos.find({
  cep: {
    $exists: false,
  },
});

// 14. SORT, 15. LIMIT
// Ordena os pacotes de viagem por preço e retorna o mais barato
db.Pacotes.aggregate([{ $sort: { preco: 1 } }, { $limit: 1 }]);

// 12. AVG
// Separa as cidades em cidades que tem e não tem praia, e retorna a media de habitantes em cada um dos grupos
db.Cidades.aggregate([
  {
    $group: {
      _id: "$temPraia",
      mediaHabitantes: { $avg: "$qHabitantes" },
    },
  },
]);

// 7. GTE, 24. FILTER, 19. PRETTY, 28. COND
// Retorna as agências e seus guias que foram contratados depois de 1 de janeiro de 2021
db.Agencias.aggregate([
  {
    $project: {
      nome: "$nome",
      guias: {
        $filter: {
          input: "$guias",
          as: "guia",
          cond: { $gte: ["$$guia.dataContratacao", ISODate("2021-01-01")] },
        },
      },
    },
  },
]).pretty();

// 16. $WHERE, 18. FUNCTION
// Retorna os pontos turísticos com entrada paga
db.PontosTuristicos.find({
  $where: function() {
    var value = this.custoVisita > 0
    return value
  },
})

// 17. MAPREDUCE
//Cria um DB com todas as regiões e seu total de população
db.Cidades.mapReduce(
  function() { emit( this.regiao, this.qHabitantes)},
  function(key, values) { return(Array.sum( values ))},
  {
    out: "soma-regiao"
  }
)


//20. ALL, 22. TEXT, 23. SEARCH
//Cria um índice para o nome das Agências, após isso, retorna a(s) agência(s) que possuem os guias "Pedro Tenorio" e "Pedro Didier" e possuem "Viaja" no nome
db.Agencias.createIndex( { nome: "text" } )

db.Agencias.find({
  $and: [
    {
      guias: {
        $all: [
          { "$elemMatch" : { nome: "Pedro Tenorio" } },
          { "$elemMatch" : { nome: "Pedro Didier" } }
        ]
      }
    },
    {
      $text: {
        $search: "Viaja"
      }
    }
  ]
})

// 11. MAX
// Agrupa os pontos turisticos pela sua popularidade, e retorna os ponstos com custos mais caros
db.PontosTuristicos.aggregate(
  [
    {
      $group:
        {
          _id: "$popularidade",
          custoVisita: { $max: "$custoVisita" }
        }
    }
  ]
)

// 25 UPDATE, 21 SET
// Seleciona os pontos turisticos com popularidade igual a 5, e substitui o seu custo de visita para 50
db.PontosTuristicos.update(
  { 'popularidade': 5 },
  { $set:{'custoVisita': 50}},
  { multi:true}
)

// 27. RENAMECOLLECTION
//Essa operação irá renomear a collection PontosTuristicos para Pontos_Turisticos
db.PontosTuristicos.renameCollection("Pontos_Turisticos")