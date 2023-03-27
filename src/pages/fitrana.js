import { useState } from 'react';

const Fitrana = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateFitrana = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number.');
      return;
    }
    const fitrana = value * 0.0025;
    setResult(`Your Fitrana is ${fitrana.toFixed(2)} PKR.`);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold mb-4">Fitrana Calculator</h2>
            <div>
              <label htmlFor="fitrana-input" className="block text-sm font-medium text-gray-700 mb-2">Enter your income:</label>
              <input
                id="fitrana-input"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md px-4 py-2 mb-4"
              />
            </div>
            <button onClick={calculateFitrana} className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Calculate
            </button>
            {result && <p className="text-lg mt-4">{result}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitrana;
