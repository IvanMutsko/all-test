const formEl = document.querySelector('form.login - form');
formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    
  event.preventDefault();

  const { email, password } = event.target.elements;
  if (!email.value || !password.value) {
    alert('All fields must be filled in');
  } else {
    const formData = new FormData(formEl);
    formData.forEach((value, name) => {
      formData[name] = value;
    });
    console.table(formData);
    formEl.reset();
  }
}
