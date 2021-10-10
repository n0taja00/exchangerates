import './App.css';
import {useState} from "react";

const URL = "http://api.exchangeratesapi.io/v1/latest?access_key=e35f672fed6bd1036ddbc927d3016fc9"
const API_KEY = "e35f672fed6bd1036ddbc927d3016fc9"

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>eur</label>&nbsp;
          <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)}/>
          <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
