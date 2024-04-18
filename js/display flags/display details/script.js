fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
console.log(data);

})
.catch(error => {
    console.error('error:',error);
});

var countries = [
    {
    name: "canada",
    region: "america",
    population: 25761425,
    code: "AU"
    
    }
    {
        name: "JAPAN",
        region: "Asia",
        population: 126476461,
        code: "JP"
        
        }
        {
            name: "Germany",
            region: "europe",
            population: 83783942,
            code: "BE"
            
            }
        ];
        countries.forEach(function(country){
          console.log(country.name +" - " + country.region + " - " + " - population: " + country.population + " - code: " + country.code);  
        });
