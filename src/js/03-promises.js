// 1)
import Notiflix from 'notiflix';

const formOfGenerator = document.querySelector('.form');

formOfGenerator.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const formData = event.currentTarget.elements;

  const firstDelay = formData.delay.value;
  const delayStep = formData.step.value;
  const amount = formData.amount.value;

  for (let index = 1; index <= Number(amount); index += 1) {
    const mainDelay = Number(firstDelay) + Number(delayStep) * (index - 1);
    
    createPromise(index, mainDelay).then(onMakeNotifySuccess).catch(onMakeNotifyError);
  };
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  })

  return promise;
}

function onMakeNotifySuccess({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onMakeNotifyError({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}


























// ========================================================================

// 2)
// import Notiflix from 'notiflix';

// const refs = {
//   form: document.querySelector('.form'),
//   btnCreatePromises: document.querySelector('button'),
// }

// refs.form.addEventListener('input', gatherDatasForPromisesGenerator);
// refs.btnCreatePromises.addEventListener('click', startPromisesGenerator);

// const formData = {};

// function startPromisesGenerator(event) {
//   event.preventDefault();

//   gatherDatasForPromisesGenerator(event);

//   for (let index = 1; index <= Number(amount); index += 1) {
//     const mainDelay = Number(delay) + Number(step) * (index - 1);
    
//     createPromise(index, mainDelay).then(onMakeNotifySuccess).catch(onMakeNotifyError);
//   };
// }

// function gatherDatasForPromisesGenerator(event) {
//   formData[event.target.name] = event.target.value;
  
//   return { delay, step, amount } = formData;
// }

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay })
//       } else {
//         reject({ position, delay })
//       }
//     }, delay);
//   })

//   return promise;
// }

// function onMakeNotifySuccess({ position, delay }) {
//   Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
// }

// function onMakeNotifyError({ position, delay }) {
//   Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
// }