// 12 вопрос
//JSON с информацией о собаке:
[
  {
    breed: "Beagle",
    size: "large",
    color: "orange",
    age: 6,
  },
];

fetch("https://example.com/dogs.json", {
  method: "GET",
})
  .then((response) => response.json())
  .then((jsonData) => console.log(jsonData))
  .catch((error) => console.error(error));
