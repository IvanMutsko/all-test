const movieToSave = 157336;

// function add new movie in localStorage
function addToWatched(movieId, string) {
  const movieList = [];

  try {
    // перевірка чи пусте
    const isEmpty = localStorage.getItem(`${string}`);

    // якщо масив пустий то записуємо перший ключ та об'єкт з першим ІД
    if (!isEmpty) {
      movieList.push(movieId);
      localStorage.setItem(`${string}`, JSON.stringify(movieList));
      return;
    }

    // якщо є якісь дані то перевіряємо чи є в об'єкті таке значення
    if (isEmpty.includes(movieId)) {
      console.log('такий фільм є');
      return;
    }

    // якщо фільма нема, треба його додати
    // localStorage.getItem(watchedList)
    const arr = JSON.parse(localStorage.getItem(`${string}`));

    arr.push(movieId);

    localStorage.setItem(`${string}`, JSON.stringify(arr));
  } catch (error) {
    console.log(error);
  }
}

addToWatched(5555, 'watched');
addToWatched(5555, 'qweqweqwe');
addToWatched(7676767, 'qweqweqwe');

// try/catch
