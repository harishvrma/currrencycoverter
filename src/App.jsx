import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="w-full bg-slate-300 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
    >
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;