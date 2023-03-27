import { useState } from 'react';

const Miras = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateMiras = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number.');
      return;
    }
    const miras = value * 0.0833;
    setResult(`Your Miras is ${miras.toFixed(2)} PKR.`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Miras Calculator</h2>
      <div className="flex mb-4">
        <label htmlFor="miras-input" className="w-1/3 font-semibold mr-4">Enter your property value:</label>
        <input
          id="miras-input"
          type="number"
          className="border border-gray-300 p-2 rounded w-2/3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        onClick={calculateMiras}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Calculate
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default Miras;
