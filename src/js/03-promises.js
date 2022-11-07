function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const refs = {
  form: document.querySelector('.form'),
  btnCreatePromises: document.querySelector('button'),
}

refs.form.addEventListener('input', onFormInput);

const formData = {};

console.log(refs.form)
console.log(refs.btnCreatePromises)

function onFormInput(event) {
  console.log('Show me INPUT');
  formData[event.target.name] = event.target.value;
  console.log(formData);
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });