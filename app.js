'use strict'

const cursos = document.getElementById("cursos")

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

async function CriarCurso() {
    
    let cursos = lerCursos()

    cursos.forEach(curso => {
        let 
    });

}



