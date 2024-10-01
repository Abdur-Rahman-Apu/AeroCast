// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result, "all country");

//     for (const country of result) {
//       const countryName = country.name.common;
//       const code = country.cca2;
//       const flag = country.flags.png;

//       console.log(countryName, "name");

//       if (countryName in data) {
//         data[countryName] = {
//           cities: data[countryName],
//           code,
//           flag,
//         };
//       } else {
//         data[countryName] = {
//           cities: [],
//           code,
//           flag,
//         };
//       }
//     }

//     console.log(Object.keys(data).length);
//     console.log(data, "country");
//   });

// for(const country in data){
//     const citiesArr=data[country]
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res=>res.json())
//     .then(data=>{

//     })
// }

import init from "./modules/init.js";

function app() {
  init();
}

app();
