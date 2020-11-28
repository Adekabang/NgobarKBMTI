//GET
fetch('https://reqres.in/api/users')
  .then((response) => response.json())
  .then((data) => console.log(data));

//POST
fetch('https://reqres.in/api/login', {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
