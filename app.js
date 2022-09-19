const form = document.querySelector('#new-task-form')
const input = document.querySelector('#new-task')
const list = document.querySelector('#list')
const completed = document.querySelector('#completed')
const body = document.querySelector('body');
const clear = document.querySelector("#clear");

clear.addEventListener('click', function () {
    while (completed.firstChild) {
        completed.removeChild(completed.firstChild)
    }
})
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = newTask;
    input.value = "";
    newLi.addEventListener('mouseover', function () {
        newLi.style.backgroundColor = 'rgba(0, 255, 21, 0.781)'
    })
    newLi.addEventListener('mouseout', function () {
        newLi.style.backgroundColor = 'white'
    })
    newLi.addEventListener('click', function () {
        const coverPage = document.createElement('DIV')
        coverPage.classList.add('cover')
        coverPage.addEventListener('click', function () {
            body.removeChild(coverPage);
            body.removeChild(notifyComplete)
        });
        body.append(coverPage)

        const notifyComplete = document.createElement('DIV');
        notifyComplete.classList.add('prompt')
        notifyComplete.innerText = 'Are you finished with this task?'

        const yesButton = document.createElement('BUTTON');
        yesButton.innerText = 'Yes'
        yesButton.classList.add('option1')
        yesButton.addEventListener('click', function () {
            newLi.remove();
            completed.append(newLi);
            body.removeChild(coverPage);
            body.removeChild(notifyComplete)
        })
        notifyComplete.appendChild(yesButton)

        const noButton = document.createElement('BUTTON');
        noButton.innerText = 'no'
        noButton.classList.add('option2')
        noButton.addEventListener('click', function () {
            body.removeChild(coverPage);
            body.removeChild(notifyComplete)
        });
        notifyComplete.appendChild(noButton)

        body.append(notifyComplete)

    })
    list.append(newLi);
    if (newTask === "") { list.removeChild(list.lastChild) }

})