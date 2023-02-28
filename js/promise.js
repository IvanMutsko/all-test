const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('button');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({
          position,
          delay,
        });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

submitBtn.addEventListener('click', evt => {
  evt.preventDefault();

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(1 + i, Number(delay.value) + i * Number(step.value))
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => form.reset());
  }
});
