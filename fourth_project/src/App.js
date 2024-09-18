import React, { useState, useEffect, useRef } from 'react';

export default function App() {
    const [category, setCategory] = useState(''); // State for selected category
    const [sellerDetails, setSellerDetails] = useState({
        name: '',
        email: '',
        mobile: '',
        gstin: ''
    });
    const [errors, setErrors] = useState({});
    const formRef = useRef(null); // To focus and animate on submit

    // Input validation logic
    const validate = () => {
        const errors = {};
        if (!sellerDetails.name) errors.name = 'Name is required';
        if (!sellerDetails.email) errors.email = 'Email is required';
        if (!sellerDetails.mobile) errors.mobile = 'Mobile number is required';
        if (!sellerDetails.gstin) errors.gstin = 'GSTIN is required';
        return errors;
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleInputChange = (e) => {
        setSellerDetails({
            ...sellerDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Submitted', sellerDetails, category);
            formRef.current.classList.add('animate-pulse'); // Add animation on successful submit
        } else {
            formRef.current.classList.add('animate-shake'); // Add animation on error
        }
    };

    useEffect(() => {
        formRef.current.classList.remove('animate-shake', 'animate-pulse'); // Remove animation classes after they're applied
    });

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500'>
            <div ref={formRef} className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
                <h1 className='text-2xl font-bold text-center mb-4'>Seller Details</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Seller Name'
                            className={`w-full p-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            value={sellerDetails.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email ID'
                            className={`w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            value={sellerDetails.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="mobile"
                            placeholder='Enter Mobile Number'
                            className={`w-full p-2 border rounded-lg ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                            value={sellerDetails.mobile}
                            onChange={handleInputChange}
                        />
                        {errors.mobile && <p className='text-red-500 text-sm'>{errors.mobile}</p>}
                    </div>

                    <div className='flex items-center space-x-4'>
                        <label className='flex items-center'>
                            <input
                                type="radio"
                                name="category"
                                value="Electronics"
                                className='mr-2'
                                onChange={handleCategoryChange}
                            />
                            Electronics
                        </label>
                        <label className='flex items-center'>
                            <input
                                type="radio"
                                name="category"
                                value="Books"
                                className='mr-2'
                                onChange={handleCategoryChange}
                            />
                            Books
                        </label>
                        <label className='flex items-center'>
                            <input
                                type="radio"
                                name="category"
                                value="Food"
                                className='mr-2'
                                onChange={handleCategoryChange}
                            />
                            Food
                        </label>
                    </div>

                    {/* Conditionally render category-specific fields */}
                    {category === 'Electronics' && (
                        <div>
                            <input
                                type="text"
                                placeholder='Enter Warranty Period'
                                className='w-full p-2 border rounded-lg'
                            />
                            <input
                                type="text"
                                placeholder='Enter Brand Name'
                                className='w-full p-2 border rounded-lg mt-2'
                            />
                        </div>
                    )}

                    {category === 'Books' && (
                        <div>
                            <input
                                type="text"
                                placeholder='Enter Author Name'
                                className='w-full p-2 border rounded-lg'
                            />
                            <input
                                type="text"
                                placeholder='Enter ISBN Number'
                                className='w-full p-2 border rounded-lg mt-2'
                            />
                        </div>
                    )}

                    {category === 'Food' && (
                        <div>
                            <input
                                type="text"
                                placeholder='Enter Expiry Date'
                                className='w-full p-2 border rounded-lg'
                            />
                            <input
                                type="text"
                                placeholder='Enter Food Certification'
                                className='w-full p-2 border rounded-lg mt-2'
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            name="gstin"
                            placeholder='Enter GSTIN'
                            className={`w-full p-2 border rounded-lg ${errors.gstin ? 'border-red-500' : 'border-gray-300'}`}
                            value={sellerDetails.gstin}
                            onChange={handleInputChange}
                        />
                        {errors.gstin && <p className='text-red-500 text-sm'>{errors.gstin}</p>}
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105'>
                        Go to Next Page
                    </button>
                </form>
            </div>
        </div>
    );
}
