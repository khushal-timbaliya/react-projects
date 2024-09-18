    import React, { useState } from 'react';

    export default function App() {
        const [category, setCategory] = useState(''); 
        const [sellerDetails, setSellerDetails] = useState({
            name: '',
            email: '',
            mobile: '',
            gstin: ''
        });
        const [errors, setErrors] = useState({});

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const mobileRegex = /^[6-9]\d{9}$/; 
        const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/; 

        const validate = () => {
            const errors = {};
            if (!sellerDetails.name) errors.name = 'Name is required';
            if (!sellerDetails.email) {
                errors.email = 'Email is required';
            } else if (!emailRegex.test(sellerDetails.email)) {
                errors.email = 'Invalid email format';
            }
            if (!sellerDetails.mobile) {
                errors.mobile = 'Mobile number is required';
            } else if (!mobileRegex.test(sellerDetails.mobile)) {
                errors.mobile = 'Invalid mobile number';
            }
            if (!sellerDetails.gstin) {
                errors.gstin = 'GSTIN is required';
            } else if (!gstinRegex.test(sellerDetails.gstin)) {
                errors.gstin = 'Invalid GSTIN format';
            }
            return errors;
        };

        const handleCategoryChange = (e) => {
            setCategory(e.target.value);''
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
            }
        };

        return (
            <div className='flex justify-center items-center min-h-screen bg-gray-100'>
                <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-lg'>
                    <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Seller Details</h1>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Seller Name'
                                className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                value={sellerDetails.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email ID'
                                className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                value={sellerDetails.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="mobile"
                                placeholder='Enter Mobile Number'
                                className={`w-full p-3 border rounded-lg ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                                value={sellerDetails.mobile}
                                onChange={handleInputChange}
                            />
                            {errors.mobile && <p className='text-red-500 text-sm mt-1'>{errors.mobile}</p>}
                        </div>

                        <div className='flex items-center space-x-4'>
                            {['Electronics', 'Books', 'Food', 'Clothing', 'Furniture'].map(e => (
                                <label key={e} className='flex items-center'>
                                    <input
                                        type="radio"
                                        name="category"
                                        value={e}
                                        className='mr-2'
                                        onChange={handleCategoryChange}
                                    />
                                    {e}
                                </label>
                            ))}
                        </div>

                        {category === 'Electronics' && (
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    placeholder='Enter Warranty Period'
                                    className='w-full p-3 border rounded-lg'
                                />
                                <input
                                    type="text"
                                    placeholder='Enter Brand Name'
                                    className='w-full p-3 border rounded-lg'
                                />
                            </div>
                        )}

                        {category === 'Books' && (
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    placeholder='Enter Author Name'
                                    className='w-full p-3 border rounded-lg'
                                />
                                <input
                                    type="text"
                                    placeholder='Enter ISBN Number'
                                    className='w-full p-3 border rounded-lg'
                                />
                            </div>
                        )}

                        {category === 'Food' && (
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    placeholder='Enter Expiry Date'
                                    className='w-full p-3 border rounded-lg'
                                />
                                <input
                                    type="text"
                                    placeholder='Enter Food Certification'
                                    className='w-full p-3 border rounded-lg'
                                />
                            </div>
                        )}

                        {category === 'Clothing' && (
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    placeholder='Enter Size'
                                    className='w-full p-3 border rounded-lg'
                                />
                                <input
                                    type="text"
                                    placeholder='Enter Fabric Type'
                                    className='w-full p-3 border rounded-lg'
                                />
                            </div>
                        )}

                        {category === 'Furniture' && (
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    placeholder='Enter Material Type'
                                    className='w-full p-3 border rounded-lg'
                                />
                                <input
                                    type="text"
                                    placeholder='Enter Dimensions'
                                    className='w-full p-3 border rounded-lg'
                                />
                            </div>
                        )}

                        <div>
                            <input
                                type="text"
                                name="gstin"
                                placeholder='Enter GSTIN'
                                className={`w-full p-3 border rounded-lg ${errors.gstin ? 'border-red-500' : 'border-gray-300'}`}
                                value={sellerDetails.gstin}
                                onChange={handleInputChange}
                            />
                            {errors.gstin && <p className='text-red-500 text-sm mt-1'>{errors.gstin}</p>}
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg'>
                            Go to Next Page
                        </button>
                    </form>
                </div>
            </div>
        );
    }
