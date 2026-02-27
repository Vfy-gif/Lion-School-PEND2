/*********************************************************************************************************************
 * Objetivo: Arquivo respnsável pela realização de TESTES UNITÁRIOS (UNIT TEST) do modulo referente
 *      a calculos matemáticos
 * Data: 27/02/2026
 * Autor DEV: Vitor Miguel
 * Autor TEST: Vitor Miguel
 * Versão: 1.0
 *********************************************************************************************************************/

//Import do arquivo que será feito o teste unitário
import { lerCursos, listaAlunosPorCurso, buscarAluno, lerAlunos } from '../js/reqs.js';

test('Validação de requisição na busca dos alunos da API: ', async function() {
    result = await lerAlunos()

    expect(Array.isArray(result)).toBe(true)
    expect(result).not.toBeNull()
    expect(result).toBeDefined()
})

test('Validação de requisição na busca dos cursos da API: ', async function() {
    result = await lerCursos()

    expect(Array.isArray(result)).toBe(true)
    expect(result).not.toBeNull()
    expect(result).toBeDefined()
})

test('Validação de requisição na busca dos alunos por curso da API: ', async function() {
    result = await listaAlunosPorCurso(1)

    expect(Array.isArray(result)).toBe(true)
    expect(result).not.toBeNull()
    expect(result).toBeDefined()
})

test('Validação de requisição na busca dos aluno da API: ', async function() {

    const result = await buscarAluno(1)
    expect(result).toBeDefined()
    expect(result).not.toBeNull()

    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('nome')
})



