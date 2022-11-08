import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btnCreatePromises: document.querySelector('button'),
}

refs.form.addEventListener('input', createPromise);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay);
  })

  return promise;
}

createPromise(12, 2000).then(onMakeNotifySuccess).catch(onMakeNotifyError);

function onMakeNotifySuccess(result) {
  Notiflix.Notify.success(result);
}

function onMakeNotifyError(result) {
  Notiflix.Notify.failure(result);
}

// const formData = {};

// function onFormInput(event) {
//   console.log('Show me INPUT');
//   formData[event.target.name] = event.target.value;
//   console.log(formData);
// }