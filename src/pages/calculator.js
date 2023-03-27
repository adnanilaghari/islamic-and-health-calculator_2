import { useState } from 'react';

const Calculator = () => {
    const [activeTab, setActiveTab] = useState('religious');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);

    // Define calculation formulas and their respective labels
    const formulas = {
        religious: {
            label: 'Religious Calculator',
            inputs: [
                { label: 'Enter your age:', name: 'age', type: 'number' },
                { label: 'Enter your income:', name: 'income', type: 'number' },
            ],
            calculate: (inputs) => {
                // Calculate religious result here
                const age = inputs.age;
                const income = inputs.income;
                return `Your religious result is ${age * income}.`;
            },
        },
        health: {
            label: 'Health Calculator',
            inputs: [
                { label: 'Enter your weight in kg:', name: 'weight', type: 'number' },
                { label: 'Enter your height in cm:', name: 'height', type: 'number' },
            ],
            calculate: (inputs) => {
                // Calculate health result here
                const weight = inputs.weight;
                const height = inputs.height;
                const bmi = weight / ((height / 100) ** 2);
                return `Your health result is ${bmi.toFixed(2)}.`;
            },
        },
        agriculture: {
            label: 'Agriculture Calculator',
            inputs: [
                { label: 'Enter the area of land:', name: 'area', type: 'number' },
                { label: 'Enter the cost of seeds per acre:', name: 'cost', type: 'number' },
            ],
            calculate: (inputs) => {
                // Calculate agriculture result here
                const area = inputs.area;
                const cost = inputs.cost;
                return `Your agriculture result is ${area * cost}.`;
            },
        },
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setInputs({});
        setResult(null);
    };

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCalculateClick = () => {
        const formula = formulas[activeTab];
        const result = formula.calculate(inputs);
        setResult(result);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Calculator</h1>
            <div className="flex mb-4">
                {Object.keys(formulas).map((tab) => (
                    <button
                        key={tab}
                        className={`${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                            } flex-1 text-lg font-semibold py-2 px-4 rounded`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {formulas[tab].label}
                    </button>
                ))}
            </div>
            {formulas[activeTab].inputs.map((input) => (
                <div className="mb-4" key={input.name}>
                    <label className="block font-semibold mb-2">{input.label}</label>
                    <input
                        className="border border-gray-300 p-2 rounded w-full"
                        type={input.type}
                        name={input.name}
                        value={inputs[input.name]}
                    onChange={handleInputChange} />
                </div>
            ))}
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleCalculateClick}
            >
                Calculate
            </button>
            {result && (
                <div className="mt-4">
                    <p className="font-semibold">{formulas[activeTab].label}</p>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;





