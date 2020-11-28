const bodyContent = document.querySelector('#body-content');
const btn = document.querySelector('#addFood');

bodyContent.innerHTML = '<h1>Hello World</h1>';

function generateFood() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((result) => result.meals[0])
    .then((data) => {
      console.log(data);
      bodyContent.innerHTML += `<div>
      <img src="${data.strMealThumb}" alt="" width="100"/>
      ${data.strMeal}
      </div>`;
    });
}

btn.addEventListener('click', () => {
  console.log('clicked');
  generateFood();
});
