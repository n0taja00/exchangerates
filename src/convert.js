import './App.css';
import {useState} from "react";

const URL = "http://api.exchangeratesapi.io/v1/latest?access_key=e35f672fed6bd1036ddbc927d3016fc9"
const API_KEY = "e35f672fed6bd1036ddbc927d3016fc9"

async function convert(e) {
    e.preventDefault();
    try {
      const address = URL + API_KEY;
      const response = await fetch(address);
  
      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP)
  
        setGbp(eur * json.rates.GBP);
      } else {
        alert("Error retrieving exchange rate.");
        console.log(response);
      }
    } catch (err) {
      alert(err)
    }
  }

export default App;