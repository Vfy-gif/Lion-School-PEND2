'use strict'

const cursos = document.getElementById("cursos")
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
            container_curso.classList.add('active')
        })

    });
}

async function CriarListaAlunos(id) {

    let cursos = await lerCursos()

    if (id = cursos.id) {
        let nomeCurso = document.createElement('h1')
        let aluno = await listaAlunosPorCurso(id)
    }

}



CriarCursos()



