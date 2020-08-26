import React from 'react';

const SelectedCountry = (props) => {
    const selectedCountry = props.selectedCountry;
//     let totalPopulation = 0;
//     for (let i = 0; i < selectedCountry.length; i++) {
//         const country = selectedCountry[i];
//         totalPopulation = totalPopulation + country.population;
// }
const totalPopulation = selectedCountry.reduce ((totalPopulation, country) =>totalPopulation + country.population,0);
    return (
        <div>
            <h3>Selected Country: {selectedCountry.length}</h3>
            <p>Total Area: {totalPopulation}</p>
        </div>
    );
};

export default SelectedCountry;