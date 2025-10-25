
const apilink = 'https://opentdb.com/api.php?amount=10'
let questoes = []
let indiceAtual = 0
const pera = async () => {
    try {
        const teste = await fetch(apilink)
        const dados = await teste.json()
        questoes = dados.results
        indiceAtual = 0
        if (questoes.length > 0) {
            exibir(questoes[indiceAtual])
        }
    } catch (error) {
        console.error('Erro:', error)
    }
}

const exibir = (questao) => {
    document.getElementById('question').textContent = questao.question
    document.getElementById('op3').style.display = ''
    document.getElementById('op4').style.display = ''
    if (questao.type === 'boolean') {
        document.getElementById('op1').textContent = questao.correct_answer
        document.getElementById('op2').textContent = questao.incorrect_answers[0]
        document.getElementById('op3').style.display = 'none'
        document.getElementById('op4').style.display = 'none'
    } else {
        const coiso = Math.ceil(Math.random() * 4)
        switch (coiso) {
            case 1:
                document.getElementById('op1').textContent = questao.incorrect_answers[0]
                document.getElementById('op2').textContent = questao.incorrect_answers[1]
                document.getElementById('op3').textContent = questao.incorrect_answers[2]
                document.getElementById('op4').textContent = questao.correct_answer
                break;
            case 2:
                document.getElementById('op1').textContent = questao.incorrect_answers[0]
                document.getElementById('op2').textContent = questao.incorrect_answers[1]
                document.getElementById('op3').textContent = questao.correct_answer
                document.getElementById('op4').textContent = questao.incorrect_answers[2]
                break;
            case 3:
                document.getElementById('op1').textContent = questao.incorrect_answers[0]
                document.getElementById('op2').textContent = questao.correct_answer
                document.getElementById('op3').textContent = questao.incorrect_answers[1]
                document.getElementById('op4').textContent = questao.incorrect_answers[2]
                break;
            case 4:
                document.getElementById('op1').textContent = questao.correct_answer
                document.getElementById('op2').textContent = questao.incorrect_answers[1]
                document.getElementById('op3').textContent = questao.incorrect_answers[2]
                document.getElementById('op4').textContent = questao.incorrect_answers[0]
                break;
        }
    }
}

const proxima = () => {
    indiceAtual++;
    if (indiceAtual < questoes.length) {
        exibir(questoes[indiceAtual]);
    } else {
        alert('Fim das perguntas!');
    }
}

window.onload = pera()
const verificar = (dado) => {
    const respostaCorreta = questoes[indiceAtual].correct_answer;
    if (dado === respostaCorreta) {
        alert('acertou');
    } else {
        alert('errou');
    }
    proxima();
}
