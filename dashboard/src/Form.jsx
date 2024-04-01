import React, { useState } from 'react';

const PatientForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    bloodRate: '',
    sleepHours: '',
    behavior: '',
    mood: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      bloodRate: '',
      sleepHours: '',
      behavior: '',
      mood: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Blood Rate:
        <input type="number" name="bloodRate" value={formData.bloodRate} onChange={handleChange} />
      </label>
      <label>
        Sleep Hours:
        <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} />
      </label>
      <label>
        Behavior:
        <input type="text" name="behavior" value={formData.behavior} onChange={handleChange} />
      </label>
      <label>
        Mood:
        <input type="text" name="mood" value={formData.mood} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default PatientForm;
