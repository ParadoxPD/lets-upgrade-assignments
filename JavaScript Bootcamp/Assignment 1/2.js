const countries = [
  {
    name: "India",
    capital: "Delhi",
    population: 500000,
  },
  {
    name: "Vatican City",
    capital: "Vatican City",
    population: 100,
  },
  {
    name: "USA",
    capital: "Washington, D.C.",
    population: 5000,
  },
  {
    name: "South Africa",
    capital: "Cape Town",
    population: 1000,
  },
  {
    name: "UAE",
    capital: "Abu Dhabi",
    population: 300,
  },
  {
    name: "Russia",
    capital: "Moscow",
    population: 10000,
  },
  {
    name: "England",
    capital: "London",
    population: 40000,
  },
  {
    name: "France",
    capital: "Paris",
    population: 1000,
  },
  {
    name: "Italy",
    capital: "Rome",
    population: 100,
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 5000,
  },
];

countries.forEach((country) => {
  if (country.population > 2000) console.log(country);
});
