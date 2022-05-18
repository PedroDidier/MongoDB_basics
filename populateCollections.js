db.dropDatabase()

// Inserindo diversos pontos turisticos por meio do insertMany
db.PontosTuristicos.insertMany([{
    nome: "Marco zero", 
    categoria: "Historico",
    cep: "50030-310",
    custoVisita:0,
    popularidade:4
},
{
    nome: "Castelo brennand",
    categoria: "Artistico",
    cep: "50741-904",
    custoVisita:10,
    popularidade:3
},
{
    nome: "Alto da Se",
    categoria: "Historico",
    cep: "53120-100",
    custoVisita:0,
    popularidade: 5
},
{
    nome: "Forte das 5 pontas",
    categoria: "Historico",
    cep: "54360-080",
    custoVisita:15,
    popularidade: 2
},
{
    nome: "Rei das coxinhas de Gravata",
    categoria: "Restaurante",
    cep: "55640-795",
    custoVisita:30,
    popularidade: 5
},
{
    nome: "Relogio das flores",
    categoria: "Jardim",
    cep: "55299-838",
    custoVisita:5,
    popularidade: 2
},
{
    nome: "Santuário mae rainha",
    categoria: "Religioso",
    cep: "53370-420",
    custoVisita:8,
    popularidade: 1
},
{
    nome: "Parque dos eucaliptos",
    categoria: "Jardim",
    cep: "55296350",
    custoVisita:20,
    popularidade: 2
},
{
    nome: "Mar de porto",
    categoria: "Praia",
    cep: "55590-000",
    custoVisita:5,
    popularidade: 5
},
{
    nome: "Barcacheira",
    categoria: "Restaurante",
    cep: "55590-000",
    custoVisita:22,
    popularidade: 4
},
{
    nome: "Igreja da se",
    categoria: "Religioso",
    cep: "53120-100",
    custoVisita:5,
    popularidade: 3
},
{
    nome: "Praia de boa viagem",
    categoria: "Praia",
    cep: "51020-001",
    custoVisita:0,
    popularidade: 5
},
{
    nome: "Mirabilandia",
    categoria: "Diversao",
    cep: "53110-110",
    custoVisita:50,
    popularidade: 3
},
{
    nome: "Praia de maria farinha",
    categoria: "Praia",
    cep: "53427-270",
    custoVisita:0,
    popularidade: 3
},
{
    nome: "Igreja de nossa senhora do O",
    categoria: "Religioso",
    cep: "53429-000",
    custoVisita:5,
    popularidade: 2
},
{
    nome: "Pontal de maria farinha",
    categoria: "Praia",
    cep: "53429-000",
    custoVisita:12,
    popularidade: 1
},
{
    nome: "Pontal de maracaipe",
    categoria: "Praia",
    cep: "55590-000",
    custoVisita:30,
    popularidade: 3
},
{
    nome: "Boi e brasa",
    categoria: "Restaurante",
    cep: "53110-660",
    custoVisita:45,
    popularidade: 4
},
{
    nome: "Ilha do retiro",
    categoria: "Esportes",
    cep: "50750-560",
    custoVisita:9,
    popularidade: 2
},
{
    nome: "Aflitos",
    categoria: "Esportes",
    cep: "52050-340",
    custoVisita:11,
    popularidade: 1
},
{
    nome: "Centro de Gravata",
    categoria: "Compras",
    cep: "55641-000",
    custoVisita:10,
    popularidade: 2
},
{
    nome: "Parque da jaqueira",
    categoria: "Esportes",
    cep: "55409-000",
    custoVisita:0,
    popularidade: 3
},
{
    nome: "Capela Dourada",
    categoria: "Religioso",
    cep: "50010-240",
    custoVisita:16,
    popularidade: 3
},
{
    nome: "Igreja Nossa Senhora dos Aflitos",
    categoria: "Religoso",
    cep: "52020-220",
    custoVisita:18,
    popularidade: 2
},
{
    nome: "Museu do estado de Pernambuco", 
    categoria: "Historico",
    cep: "52050-000",
    custoVisita:10,
    popularidade: 3
},
{
    nome: "Museu cais do sertao",
    categoria: "Historico",
    cep: "50030-150",
    custoVisita:22,
    popularidade: 3
},
{
    nome: "Espaco ciencia",
    categoria: "Ciencia",
    cep: "53020-560",
    custoVisita:35,
    popularidade: 3
}
])

// Insere as cidades por insertOne e salva os pontos turisticos por referencia
db.Cidades.insertOne(
    {
        nome: "Recife",
        qHabitantes: 1555000,
        temPraia: true,
        regiao: "RMR",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Marco zero"})._id,
            db.PontosTuristicos.findOne({nome: "Castelo brennand"})._id,
            db.PontosTuristicos.findOne({nome: "Forte das 5 pontas"})._id,
            db.PontosTuristicos.findOne({nome: "Praia de boa viagem"})._id,
            db.PontosTuristicos.findOne({nome: "Ilha do retiro"})._id,
            db.PontosTuristicos.findOne({nome: "Aflitos"})._id,
            db.PontosTuristicos.findOne({nome: "Parque da jaqueira"})._id,
            db.PontosTuristicos.findOne({nome: "Capela Dourada"})._id,
            db.PontosTuristicos.findOne({nome: "Igreja Nossa Senhora dos Aflitos"})._id,
            db.PontosTuristicos.findOne({nome: "Museu do estado de Pernambuco"})._id,
            db.PontosTuristicos.findOne({nome: "Museu cais do sertao"})._id
        ]
    }
);
db.Cidades.insertOne(
    {
        nome: "Olinda",
        qHabitantes: 393115,
        temPraia: true,
        regiao: "RMR",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Alto da Se"})._id,
            db.PontosTuristicos.findOne({nome: "Santuário mae rainha"})._id,
            db.PontosTuristicos.findOne({nome: "Igreja da se"})._id,
            db.PontosTuristicos.findOne({nome: "Mirabilandia"})._id,
            db.PontosTuristicos.findOne({nome: "Boi e brasa"})._id,
            db.PontosTuristicos.findOne({nome: "Espaco ciencia"})._id
        ]
    }
);
db.Cidades.insertOne(
    {
        nome: "Paulista",
        qHabitantes: 334376,
        temPraia: true,
        regiao: "RMR",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Praia de maria farinha"})._id,
            db.PontosTuristicos.findOne({nome: "Igreja de nossa senhora do O"})._id,
            db.PontosTuristicos.findOne({nome: "Pontal de maria farinha"})._id
        ]
    }
);
db.Cidades.insertOne(
    {
        nome: "Ipojuca",
        qHabitantes: 94533,
        temPraia: true,
        regiao: "Litoral norte",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Mar de porto"})._id,
            db.PontosTuristicos.findOne({nome: "Pontal de maracaipe"})._id,
            db.PontosTuristicos.findOne({nome: "Barcacheira"})._id
        ]
    }
);
db.Cidades.insertOne(
    {
        nome: "Gravata",
        qHabitantes: 85309,
        temPraia: false,
        regiao: "Agreste",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Rei das coxinhas de Gravata"})._id,
            db.PontosTuristicos.findOne({nome: "Centro de Gravata"})._id,
            db.PontosTuristicos.findOne({nome: "Barcacheira"})._id
        ]
    }
);
db.Cidades.insertOne(
    {
        nome: "Garanhuns",
        qHabitantes: 140577,
        temPraia: false,
        regiao: "Agreste",
        pontos: [
            db.PontosTuristicos.findOne({nome: "Relogio das flores"})._id,
            db.PontosTuristicos.findOne({nome: "Parque dos eucaliptos"})._id
        ]
    }
);


// Insere os pacotes da empresa ViajaAgora por insertOne e salva as cidades do pacote por referencia
db.Pacotes.insertOne(
    {
        nome: "RMR tour completo",
        preco: 1500,
        municipios: [
            db.Cidades.findOne({nome: "Recife"})._id,
            db.Cidades.findOne({nome: "Olinda"})._id,
            db.Cidades.findOne({nome: "Paulista"})._id
        ]
    }
);
db.Pacotes.insertOne(
    {
        nome: "Aventura de carnaval",
        preco: 900,
        municipios: [
            db.Cidades.findOne({nome: "Recife"})._id,
            db.Cidades.findOne({nome: "Olinda"})._id
        ]
    }
);
db.Pacotes.insertOne(
    {
        nome: "Agreste como voce nunca viu",
        preco: 600,
        municipios: [
            db.Cidades.findOne({nome: "Gravata"})._id,
            db.Cidades.findOne({nome: "Garanhuns"})._id
        ]
    }
);

// Insere os pacotes da empresa ViajeBem por insertOne e salva as cidades do pacote por referencia
db.Pacotes.insertOne(
    {
        nome: "Conheca pernambuco",
        preco: 2500,
        municipios: [
            db.Cidades.findOne({nome: "Recife"})._id,
            db.Cidades.findOne({nome: "Olinda"})._id,
            db.Cidades.findOne({nome: "Paulista"})._id,
            db.Cidades.findOne({nome: "Gravata"})._id,
            db.Cidades.findOne({nome: "Garanhuns"})._id,
            db.Cidades.findOne({nome: "Ipojuca"})._id
        ]
    }
);
db.Pacotes.insertOne(
    {
        nome: "Praias pernambucanas",
        preco: 1250,
        municipios: [
            db.Cidades.findOne({nome: "Recife"})._id,
            db.Cidades.findOne({nome: "Olinda"})._id,
            db.Cidades.findOne({nome: "Ipojuca"})._id
        ]
    }
);
db.Pacotes.insertOne(
    {
        nome: "Sao Joao empolgante",
        preco: 1050,
        municipios: [
            db.Cidades.findOne({nome: "Recife"})._id,
            db.Cidades.findOne({nome: "Gravata"})._id,
            db.Cidades.findOne({nome: "Garanhuns"})._id
        ]
    }
);
db.Pacotes.insertOne(
    {
        nome: "Saindo da RMR",
        preco: 1340,
        municipios: [
            db.Cidades.findOne({nome: "Ipojuca"})._id,
            db.Cidades.findOne({nome: "Gravata"})._id,
            db.Cidades.findOne({nome: "Garanhuns"})._id
        ]
    }
);


// Insere a agencia de turismo ViajaAgora e referencia seus pacotes
db.Agencias.insertOne(
    {
        CNPJ:"111",
        nome:"ViajaAgora",
        receitaAnual:1000000,
        guias:[
            {nome:"Pedro Didier",CPF:"123.456.789-10",dataContratacao:new Date("2021-01-12")},
            {nome:"Pedro Tenorio",CPF:"692.469.234-52",dataContratacao:new Date("2020-07-14")},
            {nome:"Daniel Pacheco",CPF:"111.111.111-11",dataContratacao:new Date("2019-12-12")}
        ],
        itens:[
            db.Pacotes.findOne({nome: "RMR tour completo"})._id,
            db.Pacotes.findOne({nome: "Aventura de carnaval"})._id,
            db.Pacotes.findOne({nome: "Agreste como voce nunca viu"})._id
        ]
    }
);

// Insere a agencia de turismo ViajeBem e referencia seus pacotes
db.Agencias.insertOne(
    {
        CNPJ:"222",
        nome:"ViajeBem",
        receitaAnual:2000000,
        guias:[
            {nome:"G",CPF:"222.222.222-22",dataContratacao:new Date("2020-02-02")},
            {nome:"Heitor Coimbra",CPF:"111.456.789-10",dataContratacao:new Date("2021-09-22")},
            {nome:"Charles Gabriel",CPF:"696.362.234-12",dataContratacao:new Date("2020-01-14")},
            {nome:"Nilo Tubarino",CPF:"333.333.333-33",dataContratacao:new Date("2019-11-19")},
            {nome:"Gustavo Chaves",CPF:"444.444.444-44",dataContratacao:new Date("2022-02-02")}
        ],
        itens:[
            db.Pacotes.findOne({nome: "Conheca pernambuco"})._id,
            db.Pacotes.findOne({nome: "Praias pernambucanas"})._id,
            db.Pacotes.findOne({nome: "Sao Joao empolgante"})._id,
            db.Pacotes.findOne({nome: "Saindo da RMR"})._id
        ]
    }
);