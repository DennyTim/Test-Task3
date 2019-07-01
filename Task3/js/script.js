async function fetchData() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const arrLastWeek = [];
  const msOfDay = 86400000;
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  };
  let i = 0;

  const dataProgress = () => {
    let progressElement = document.getElementById('data-progress');
    i > 7 ? '' : progressElement.value = i * 100;
  }

  while (i < 7) {
    let day = Date.now() - i * msOfDay;
    let date = (new Date(day)).toLocaleString("ru", options);

    let data = await fetch(proxyurl + `https://api.privatbank.ua/p24api/exchange_rates?json&date=${date}`);
    let info = await data.json();
    arrLastWeek.push(info)
    i++;
    dataProgress();
  }
  return JSON.stringify(arrLastWeek);
}


fetchData()
  .then(data => document.write(data))
  .catch(err => console.log(err));


