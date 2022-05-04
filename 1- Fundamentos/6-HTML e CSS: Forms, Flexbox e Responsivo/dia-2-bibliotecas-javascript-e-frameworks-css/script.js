let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

// let picker = new Pikaday({
//   field: document.getElementById('datepicker'),
//   format: 'D/M/YYYY',
//   toString(date, format) {
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   },
//   parse(dateString, format) {
//     const parts = dateString.split('/');
//     const day = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10) - 1;
//     const year = parseInt(parts[2], 10);
//     return new Date(year, month, day);
//   }
// });


function verify() {
  const nameLength = document.querySelector('#full-name').value.length;
  const emailLength = document.querySelector('#user-email').value.length;
  const whyLength = document.querySelector('#user-why').value.length;
  let validName = true;
  let validEmail = true;
  let validWhy = true;
  if (nameLength < 10 || nameLength > 40) {
    validName = false;
  }

  if (emailLength < 10 || emailLength > 50) {
    validEmail = false;
  }

  if (whyLength > 500) {
    validWhy = false;
  }
  if (validName && validEmail && validWhy) {
    return true;
  } else {
    return false;
  }
}

function sendForm(event) {
  event.preventDefault();
  if (verify()) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
}

function btnSend() {
  const btn = document.querySelector('#send');
  btn.addEventListener('click', sendForm);
}
btnSend();