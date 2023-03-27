import { useState } from 'react';

const Zakat = () => {
  const [amount, setAmount] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCalculateClick = () => {
    setShowResult(true);
  };

  const handleResetClick = () => {
    setAmount('');
    setShowResult(false);
  };

  const calculateZakat = () => {
    // Calculate zakat here
    const nisab = 780000; // Nisab amount in PKR
    const zakatRate = 0.025; // Zakat rate (2.5%)

    if (isNaN(amount)) {
      return 'Invalid input. Please enter a valid number.';
    }

    const zakatAmount = amount >= nisab ? amount * zakatRate : 0;
    return `Your zakat amount is ${zakatAmount.toFixed(2)} PKR.`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Zakat Calculator</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Enter your total wealth in PKR:</label>
        <input
          className="border border-gray-300 p-2 rounded w-full"
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={handleCalculateClick}>
          Calculate
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      {showResult && (
        <div className="mt-4">
          <p className="text-lg font-semibold">{calculateZakat()}</p>
        </div>
      )}
    </div>
  );
};

export default Zakat;
