import React, { useState, useEffect, useRef } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, email };
    setSubmittedData([...submittedData, newEntry]);
    setName('');
    setEmail('');
    setSubmitted(true);
  };

  const handleDelete = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
    setSubmitted(false); // Reset submitted state when input changes
  };

  return (
    <div className="main h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-[400px] transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">Name:</label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 transform hover:scale-[1.02]"
              id="name"
              type="text"
              ref={nameInputRef}
              value={name}
              autoComplete="off"
              onChange={(e) => handleChange(e, setName)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">Email:</label>
            <input
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 transform hover:scale-[1.02]"
              id="email"
              type="email"
              value={email}
              autoComplete="off"
              onChange={(e) => handleChange(e, setEmail)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-transform duration-300 transform hover:scale-110"
              type="submit">
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-8 text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800">Form Submitted</h3>
          </div>
        )}
      </div>

      <div className="mt-12 w-full max-w-lg">
        {submittedData.map((data, index) => (
          <div key={index} className="bg-white p-6 mb-6 rounded-2xl shadow-lg flex justify-between items-center transform transition duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <p className="text-gray-800 font-medium"><strong>Name:</strong> {data.name}</p>
              <p className="text-gray-800 font-medium"><strong>Email:</strong> {data.email}</p>
            </div>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 transform hover:scale-110"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
