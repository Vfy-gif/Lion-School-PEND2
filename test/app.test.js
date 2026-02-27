/*********************************************************************************************************************
 * Objetivo: Arquivo respnsável pela realização de TESTES UNITÁRIOS (UNIT TEST) do modulo referente
 *      a calculos matemáticos
 * Data: 24/02/2026
 * Autor DEV: Vitor Miguel
 * Autor TEST: Vitor Miguel
 * Versão: 1.0
 *********************************************************************************************************************/

//Import do arquivo que será feito o teste unitário
const test = require('node:test')
const requisicoes_front_end = require('../app.js')

test('Validação de requisição na busca dos alunos da API: ', async function() {
    result = await requisicoes_front_end.lerAlunos()

    expect(Array.isArray(result)).toBe(true)
})

test('Validação de requisição na busca dos cursos da API: ', async function() {
    result = await requisicoes_front_end.lerCursos()

    expect(Array.isArray(result)).toBe(true)
})

test('Validação de requisição na busca dos alunos por curso da API: ', async function() {
    result = await requisicoes_front_end.listaAlunosPorCurso(1)

    expect(Array.isArray(result)).toBe(true)
})

test('Validação de requisição na busca dos aluno da API: ', async function() {
    result = await requisicoes_front_end.buscarAluno(1)

    expect(Array.isArray(result)).toBeProperty('id')
})



