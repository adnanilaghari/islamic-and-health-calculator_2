import { useState } from 'react';

const RozaKaFidia = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateFidia = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number.');
      return;
    }
    const fidia = value * 100;
    setResult(`Your Roza Ka Fidia is ${fidia.toFixed(2)} PKR.`);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Roza Ka Fidia Calculator</h2>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <label htmlFor="fidia-input" className="mr-4">
            Enter the value of one meal:
          </label>
          <input
            id="fidia-input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-white py-2 px-3 border border-gray-400 rounded shadow-md"
          />
        </div>
        <button
          onClick={calculateFidia}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Calculate Fidia
        </button>
        {result && (
          <p className="text-lg font-bold mt-4">{result}</p>
        )}
      </div>
    </div>
  );
};

export default RozaKaFidia;
