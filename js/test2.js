// об'єкт елементів форми
const elemForm = {
  submitBtn: document.querySelector('.login-form > button'),
  mailInput: document.querySelector('[name="email"]'),
  passInput: document.querySelector('[name="password"]'),
};
const userData = [];
elemForm.submitBtn.addEventListener('click', event => {
    
    event.preventDefault();
    
  if (elemForm.mailInput.value === '' || elemForm.passInput.value === '') {
    alert("Всі поля обов'язкові до заповнення");
  } else {
    const dataObj = {
      email: elemForm.mailInput.value,
      password: elemForm.passInput.value,
    };
    userData.push(dataObj);
    document.querySelector('.login-form').reset();
  }
  console.table(userData);
});
