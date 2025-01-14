import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import APIcall from "./API.jsx"

export default function searchButton() {
    let [city, setCity] = useState('');

    function handleEvent(event) {
        setCity(event.target.value); 
    }

    function handleMain(event) {  
        event.preventDefault(); 
        setCity('');
    }
const [submittedCity, setSubmittedCity] = useState('');

function handleMain(event) {  
    event.preventDefault(); 
    setSubmittedCity(city);// alaways use another useState for passing a set value
    setCity('');
}

return (
    <>
        <h1>Weather Search by City Name</h1>
        <form onSubmit={handleMain}>
        <TextField id="filled-basic" 
        label="Search here" 
        variant="filled"
        onChange={handleEvent} 
        value={city}
        />
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
        </form>
        <APIcall city={submittedCity}></APIcall>
    </>
)
}