export async function lerAlunos() {
    const url = 'https://lion-school-backend.onrender.com/alunos'

    const response = await fetch(url)
    const alunos = await response.json()

    return alunos
}

export async function lerCursos() {
    const url = 'https://lion-school-backend.onrender.com/cursos'

    const response = await fetch(url)
    const cursos = await response.json()

    return cursos
}

export async function listaAlunosPorCurso(id) {
    const url = `https://lion-school-backend.onrender.com/alunos?curso_id=${id}`

    const response = await fetch(url)
    const alunos = await response.json()

    return alunos
}

export async function buscarAluno(id) {
    const url = `https://lion-school-backend.onrender.com/alunos/${id}`

    const response = await fetch(url)
    const aluno = await response.json()

    return aluno
}
