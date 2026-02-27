/*********************************************************************************************************************
 * Objetivo: Arquivo respnsável pela realização de TESTES UNITÁRIOS (UNIT TEST) do modulo referente
 *      a calculos matemáticos
 * Data: 24/02/2026
 * Autor DEV: Vitor Miguel
 * Autor TEST: Vitor Miguel
 * Versão: 1.0
 *********************************************************************************************************************/

//Import do arquivo que será feito o teste unitário
const requisicoes_front_end = require('../js/reqs.js')

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

    const result = await requisicoes_front_end.buscarAluno(1)
    expect(result).toBeDefined()
    expect(result).not.toBeNull()

    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('nome')
})



