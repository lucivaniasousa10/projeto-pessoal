const prompt = require("prompt-sync")()

// listas
let metas = []
let materias = []
let horarios = []
let agenda = []
let notas = []

// metas
function adicionarMeta() {
    let meta = prompt("Digite sua meta: ")
    let data = prompt("Digite a data (dd/mm/aaaa): ")
    let nivel = prompt("Digite o nível (opcional): ")

    let novaMeta = { meta, data, nivel }
    metas.push(novaMeta)

    console.log("Meta adicionada!")
}

// materias
function cadastrarMateria() {
    let materia = prompt("Digite o nome da matéria: ")
    let subtemas = []

    for (let i = 0; i < 3; i++) {
        let sub = prompt(`Digite o subtema ${i+1}: `)
        subtemas.push(sub)
    }

    let novaMateria = { materia, subtemas }
    materias.push(novaMateria)

    console.log("Matéria cadastrada!")
}

// organizar
function organizarMaterias() {
    materias.sort((a, b) => a.materia.localeCompare(b.materia))
    console.log("Matérias organizadas!")
}

// horários
function adicionarHorario() {
    let dia = prompt("Digite o dia da semana: ")
    let definicao = prompt("Digite a definição: ")

    let novoHorario = { dia, definicao }
    horarios.push(novoHorario)

    console.log("Horário adicionado!")
}

// agenda
function adicionarAgenda() {
    let compromisso = prompt("Digite o compromisso: ")
    let data = prompt("Digite a data (dd/mm/aaaa): ")

    let novoCompromisso = { compromisso, data }
    agenda.push(novoCompromisso)

    console.log("Compromisso adicionado!")
}

// notas
function adicionarNota() {
    let tipo = prompt("Digite o tipo da nota: ")
    let valor = parseFloat(prompt("Digite o valor: "))
    let meta = parseFloat(prompt("Digite a meta (opcional): "))

    let novaNota = { tipo, valor, meta }
    notas.push(novaNota)

    console.log("Nota registrada!")
}

// menu
function menu() {
    while (true) {
        console.log("\n--- MENU ---")
        console.log("1 - Adicionar Meta")
        console.log("2 - Cadastrar Matéria")
        console.log("3 - Organizar Matérias")
        console.log("4 - Adicionar Horário")
        console.log("5 - Adicionar Agenda")
        console.log("6 - Adicionar Nota")
        console.log("7 - Sair")

        let opcao = prompt("Escolha uma opção: ")

        if (opcao === "1") adicionarMeta()
        else if (opcao === "2") cadastrarMateria()
        else if (opcao === "3") organizarMaterias()
        else if (opcao === "4") adicionarHorario()
        else if (opcao === "5") adicionarAgenda()
        else if (opcao === "6") adicionarNota()
        else if (opcao === "7") {
            console.log("Encerrando programa...")
            break
        } else {
            console.log("Opção inválida!")
        }
    }
}

// iniciar
menu()
