const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer')

questions.forEach((question) => {
    const bar = question.querySelector('h2');
    const answer = question.querySelector('.answer');

    bar.addEventListener('click', () => {
        if (answer.classList.contains('hide') === false) {
            answer.classList.toggle('hide');
        } else {
            answers.forEach((el) => {
                el.classList.add('hide');
            })
    
            answer.classList.toggle('hide');
        }
    })
})