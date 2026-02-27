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

import { lerCursos, listaAlunosPorCurso, buscarAluno, lerAlunos } from './reqs.js';

async function CriarCursos() {

    let cursos_data = await lerCursos()

    cursos_data.forEach(curso => {
        let curso_criado = document.createElement("div")
        let nomeCurso = document.createElement("h1")
        let imagem = document.createElement('img')

        if(curso.nome == "Desenvolvimento de Sistemas") {
            imagem.src = "../img/icon-desenvolvimento.svg"
            curso_criado.appendChild(imagem)
        } else if (curso.nome == "Redes") {
            imagem.src = "../img/icon-redes.svg"
            curso_criado.appendChild(imagem)
        }
            

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

    const aluno = await buscarAluno(id)

    const fotoAluno = document.createElement('img')
    const nomeAluno = document.createElement('h1')

    fotoAluno.src = aluno.foto
    nomeAluno.textContent = aluno.nome

    aluno.desempenho.forEach(nota => {
        let notaMateria = document.createElement('div')
        let notaValorGrafico = document.createElement('div')
        let coluna = document.createElement('div')
        let notaValor = document.createElement('h2')
        let nomeMateria = document.createElement('h1')

        coluna.classList.add('coluna-nota')
        notaMateria.classList.add('nota-singular')

        notaValorGrafico.style.height   = nota.valor + '%'
        notaValorGrafico.style.width    = '16px' 
        notaValor.textContent = nota.valor
        nomeMateria.textContent = nota.categoria

        if (nota.valor >= 60) {
            notaValorGrafico.style.backgroundColor = '#3347B0'
            notaValor.style.color = '#3347B0'
        } else if (nota.valor > 30) {
            notaValorGrafico.style.backgroundColor = '#E5B657'
            notaValor.style.color = '#E5B657'
        } else {
            notaValorGrafico.style.backgroundColor = '#C11010'
            notaValor.style.color = '#C11010'
        }
            

        desempenho.appendChild(notaMateria)
        notaMateria.appendChild(notaValor)
        notaMateria.appendChild(coluna)
        coluna.appendChild(notaValorGrafico)
        notaMateria.appendChild(nomeMateria)
        

    })

    detalhes_aluno.appendChild(fotoAluno)
    detalhes_aluno.appendChild(nomeAluno)

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



