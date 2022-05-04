function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// 1ºexercício


function allDaysDez() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let tagUl = document.getElementById('days');
    for (let i in dezDaysList) {
        let tagLi = document.createElement('li');
        tagLi.innerHTML = dezDaysList[i];
        tagLi.className = 'day';
        if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
            tagLi.className += ' holiday';
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            tagLi.className += ' friday';
        }
        tagUl.appendChild(tagLi);
    }
}
allDaysDez();

// 2ºexercício

function createButton(btnName) {
    let btn = document.createElement('button');
    btn.innerHTML = btnName;
    btn.id = 'btn-holiday';
    let tagDiv = document.querySelector('.buttons-container');
    tagDiv.appendChild(btn);
}
createButton('Feriados');

// 3ºexercício

function addClick() {
    let btn = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    btn.addEventListener('click', function () {
        for (let index = 0; index < holidays.length; index++) {
            let newColor = 'lightgreen';
            if (holidays[index].style.backgroundColor !== newColor) {
                holidays[index].style.backgroundColor = newColor;
            } else {
                holidays[index].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    })
}
addClick();

// 4ºexercício

function createButton2(btnName) {
    let btn2 = document.createElement('button');
    btn2.innerHTML = btnName;
    btn2.id = 'btn-friday';
    let tagDiv = document.querySelector('.buttons-container');
    tagDiv.appendChild(btn2);
}
createButton2('Sexta-feira');

// 5ºexercício

function addClick2() {
    let btn = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let fridayNums = ['4', '11', '18', '25'];
    btn.addEventListener('click', function () {
        for (let index = 0; index < fridays.length; index++) {
            let newText = 'SEXTOU!!!';
            if (fridays[index].innerHTML !== newText) {
                fridays[index].innerHTML = newText;
            } else {
                fridays[index].innerHTML = fridayNums[index];
            }
        }
    })
}
addClick2()

// 6ºexercício

function zoomOn() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '35px';
    });
}
zoomOn();

function zoomOff() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
    });
}
zoomOff();

// 7ºexercício

function addTask(word) {
    let tagDiv = document.querySelector('.my-tasks');
    let tagSpan = document.createElement('span');
    tagSpan.innerText = word;
    tagDiv.appendChild(tagSpan);
}
addTask('Cozinhar');

// 8ºexercício

function addColor(color) {
    let tagDiv = document.createElement('div');
    tagDiv.className = 'task';
    tagDiv.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(tagDiv);
}
addColor('orange');

// 9ºexercício

function addClass() {
    let tagDiv = document.querySelector('.task');
    tagDiv.addEventListener('click', function () {
        let newClass = 'task selected';
        if (tagDiv.className !== newClass) {
            tagDiv.className = newClass;
        } else {
            tagDiv.className = 'task';
        }
    })
}
addClass();

// 10ºexercício

function changeDaysColor() {
    let tagUl = document.querySelector('#days');
    let tagDiv = document.querySelector('.task');
    tagUl.addEventListener('click', function (event) {
        if (tagDiv.className === 'task selected') {
            let changeColor = document.querySelector('.task.selected').style.backgroundColor;
            if (event.target.style.color !== changeColor) {
                event.target.style.color = changeColor;
            } else {
                event.target.style.color = 'rgb(119,119,119)';
            }
        }
    })
}
changeDaysColor();

// 11ºexercício bônus

function addAppointment() {
    let inpt = document.getElementById('task-input');
    let btn = document.getElementById('btn-add');
    let tagUl = document.querySelector('.task-list');
    btn.addEventListener('click', function () {
        if (inpt.value !== '') {
            let tagLi = document.createElement('li');
            tagLi.innerText = inpt.value;
            tagUl.appendChild(tagLi);
            inpt.value = '';
        } else {
            alert("Error: Escreva seu compromisso está vazio.");
        }
    });
    inpt.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            if (inpt.value !== '') {
                let tagLi = document.createElement('li');
                tagLi.innerText = inpt.value;
                tagUl.appendChild(tagLi);
                inpt.value = '';
            } else {
                alert("Error: Escreva seu compromisso está vazio.");
            }
        }
    });

}
addAppointment();
