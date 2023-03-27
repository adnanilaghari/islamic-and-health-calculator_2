import { useState } from 'react';

const Usher = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateUsher = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Please enter a valid number.');
      return;
    }
    const usher = value * 0.025;
    setResult(`Your Usher is ${usher.toFixed(2)} PKR.`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Usher Calculator</h2>
      <div className="mb-4">
        <label htmlFor="usher-input" className="block font-semibold mb-2">Enter your income:</label>
        <input
          id="usher-input"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <button onClick={calculateUsher} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Calculate
      </button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};

export default Usher;
