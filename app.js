'use strict'

const cursos = document.getElementById('cursos')
const alunos = document.getElementById('alunos')
const desempenho = document.querySelector('.desempenho')
const detalhes_aluno = document.querySelector('.detalhes-aluno')
const botao_sair = document.querySelector('.botao-sair')
const botao_voltar = document.querySelector('.botao-voltar')
const container_cursos = document.querySelector('.container-cursos')
const container_curso = document.querySelector('.container-curso')
const container_aluno = document.querySelector('.container-aluno')


async function lerAlunos() {
    const url = 'https://lion-school-phbo.onrender.com/alunos'

    const response = await fetch(url)
    const alunos = await response.json()

    return alunos
}

async function lerCursos() {
    const url = 'https://lion-school-phbo.onrender.com/cursos'

    const response = await fetch(url)
    const cursos = await response.json()

    return cursos
}

async function listaAlunosPorCurso(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${id}`

    const response = await fetch(url)
    const alunos = await response.json()

    return alunos
}

async function buscarAluno(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos/${id}`

    const response = await fetch(url)
    const aluno = await response.json()

    return aluno
}

async function CriarCursos() {

    let cursos_data = await lerCursos()

    cursos_data.forEach(curso => {
        let curso_criado = document.createElement("div")
        let nomeCurso = document.createElement("h1")

        curso_criado.classList.add('curso')
        curso_criado.id = curso.id
        nomeCurso.textContent = curso.sigla

        cursos.appendChild(curso_criado)
        curso_criado.appendChild(nomeCurso)

        curso_criado.addEventListener('click', function () {
            container_cursos.classList.remove('active')
            botao_sair.classList.remove('active')
            container_curso.classList.add('active')
            botao_voltar.classList.add('active')
            CriarListaAlunos(curso.id, curso.nome)
        })

    });
}

async function CriarListaAlunos(id, cursoNome) {

    const titulo_curso = container_curso.querySelector('h1');

    if (titulo_curso) {
        titulo_curso.remove();
    }

    alunos.replaceChildren()

    let nomeCurso = document.createElement('h1')
    let alunos_data = await listaAlunosPorCurso(id)

    nomeCurso.textContent = cursoNome

    container_curso.appendChild(nomeCurso)
    container_curso.appendChild(alunos)

    alunos_data.forEach(aluno => {

        let cardAluno = document.createElement('div')
        let fotoAluno = document.createElement('img')
        let nomeAluno = document.createElement('h1')

        fotoAluno.src = aluno.foto
        fotoAluno.alt = "foto-perfil"
        nomeAluno.textContent = aluno.nome

        cardAluno.id = aluno.id
        cardAluno.classList.add('aluno', 'finalizado-curso-aluno')

        alunos.appendChild(cardAluno)
        cardAluno.appendChild(fotoAluno)
        cardAluno.appendChild(nomeAluno)

        cardAluno.addEventListener('click', function () {
            container_curso.classList.remove('active')
            container_aluno.classList.add('active')

            AbrirPerfilAluno(aluno.id)

        })
    })

}

async function AbrirPerfilAluno(id) {

    let aluno = await buscarAluno(id)

    let perfilAluno = document.createElement('div')
    let fotoAluno = document.createElement('img')
    let nomeAluno = document.createElement('h1')

    fotoAluno.src = aluno.foto
    nomeAluno.textContent = aluno.nome

    aluno.desempenho.forEach(nota => {
        let notaMateria = document.createElement('div')
        let notaValorGrafico = document.createElement('div')
        let notaValor = document.createElement('h2')
        let nomeMateria = document.createElement('h1')

        notaValorGrafico.style.height = nota.valor + '%'
        notaValor.textContent = nota.valor
        nomeMateria.textContent = nota.categoria

        if (nota.valor >= 60)
            notaValorGrafico.style.backgroundColor = '#3347B0'
        else if (nota.valor > 30)
            notaValorGrafico.style.backgroundColor = '#E5B657'
        else
            notaValorGrafico.style.backgroundColor = '#C11010'

        desempenho.appendChild(notaMateria)
        nomeMateria.appendChild(notaValor)
        notaMateria.appendChild(notaValorGrafico)
        notaMateria.appendChild(nomeMateria)

    })

    detalhes_aluno.appendChild(perfilAluno)
    perfilAluno.appendChild(fotoAluno)
    perfilAluno.appendChild(nomeAluno)

}


botao_voltar.addEventListener('click', function () {

    if (!container_aluno.classList.contains('active')) {
        container_cursos.classList.add('active')
        botao_sair.classList.add('active')
        container_curso.classList.remove('active')
        botao_voltar.classList.remove('active')
    } else {
        detalhes_aluno.replaceChildren()
        desempenho.replaceChildren()
        container_aluno.classList.remove('active')
        container_curso.classList.add('active')
    }
        
})



CriarCursos()



