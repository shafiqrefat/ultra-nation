import React from 'react';

const Country = (props) => {
    const handleAddCountry = props.handleAddCountry;
    const {name,flag,population,region} = props.country;
    const flagStyle = {
        height:'100px',
        width:'150px'}
    const countryStyle = {
        border: '3px solid purple',
        margin:'15px',
        padding:'10px'
    }
    const buttonStyle = {
        backgroundColor:'Purple',
        lineHeight:'30px',
        color:'white',
        borderRadius:'5px',
        padding:'7px',
        width:'150px',
        fontSize:'18px'
    }
    
    return (
        <div style={countryStyle}>
            <h2>Country: {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><strong>Region:{region}</strong></p>
            <button onClick={() =>handleAddCountry(props.country)} style={buttonStyle}>Add Country</button>
        </div>
    );
};

export default Country;