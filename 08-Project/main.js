const listMakanan = document.querySelector('#list-makanan');
const listKategori = document.querySelector('#list-kategori');
const btn = document.querySelector('#addFood');

let arrKategori = ['Aneka nasi', 'Cepat Saji', 'Minuman', 'Cemilan'];

arrKategori.forEach((kategori) => {
  listKategori.innerHTML += `<a href="#" class="mr-4">${kategori}</a>`
})

function generateFood() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((result) => result.meals[0])
    .then((data) => {
      console.log(data);
      listMakanan.innerHTML += `      
      <div class="col-sm p-2">
        <div class="card" style="width: 18rem;">
          <img src="${data.strMealThumb}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${data.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      `;
    });
}

btn.addEventListener('click', () => {
  console.log('clicked');
  generateFood();
});
