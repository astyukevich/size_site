"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
 
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    
		let formData = new FormData(form);
		

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
        
			}
		} 

  }
  
 
  
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }  else {
        if (input.value === '') {
          formAddError (input);
          error++;
        }
      }
    }
    return error;
  }

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
//Функция теста email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

}); 


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-1');
  form.addEventListener('submit', formSend);
  const closePopup = document.getElementsByClassName('popup');

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    
		let formData = new FormData(form);
		

		if (error === 0) {
			form.classList.add('_sending-1');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				
				form.reset();
				form.classList.remove('_sending-1');
			} else {
				alert("Ошибка");
        form.reset();
				form.classList.remove('_sending-1');
        closePopup.classList.remove('open');
			}
		} 

  }
  
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req-1');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email-1')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }  else {
        if (input.value === '') {
          formAddError (input);
          error++;
        }
      }
    }
    return error;
  }

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
//Функция теста email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

}); 




$(function ($) {
    $(".my_phone").mask("+375 (99) 999-99-99");
});


