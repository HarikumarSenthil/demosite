'use client';
import React, { useState } from 'react';
import Icon from '@/Icons/Icon';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    patient: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    patient: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: '', email: '', phone: '', patient: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (must be at least 10 digits)';
      isValid = false;
    }
    if (!formData.patient.trim()) {
      newErrors.patient = 'Patient Name is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', patient: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center min-h-screen bg-gradient-to-r from-blue-50 to-white relative">
      <div className="flex flex-col md:flex-row items-center w-full gap-8 relative -top-24">
        
        {/* Form Section with Increased Height */}
        <div className="ml-8 bg-white p-6 rounded-3xl shadow-lg w-full md:w-1/2 flex flex-col justify-between h-[550px]">
          <form className="flex flex-col h-full justify-between" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-lato">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg border-customBlue shadow-sm focus:ring-blue-500 focus:border-blue-500 font-lato"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-lato">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg border-customBlue shadow-sm focus:ring-blue-500 focus:border-blue-500 font-lato"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-lato">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg border-customBlue shadow-sm focus:ring-blue-500 focus:border-blue-500 font-lato"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="patient" className="block text-sm font-medium text-gray-700 mb-1 font-lato">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patient"
                  placeholder="Patient Name"
                  value={formData.patient}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm border-customBlue focus:ring-blue-500 focus:border-blue-500 font-lato"
                />
                {errors.patient && <p className="text-red-500 text-sm">{errors.patient}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-lato">
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-customBlue font-lato"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm font-lato">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-customBlue text-white font-lato p-2 rounded-2xl flex items-center justify-center space-x-2">
              <span>Submit</span>
              <Icon type="arrow-icon" width="18" height="18" fill="white" />
            </button>
          </form>
        </div>

        {/* Map Section with Increased Height */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[550px] md:h-[550px]">
          <iframe
            className="rounded-3xl shadow-lg w-full h-full md:w-11/12"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0012251963487!2d-122.42127878468153!3d37.7749296797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858155d2ae94fb%3A0x4211ed0e64e6e3f7!2sBronx%2C%20New%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1640789757025!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
