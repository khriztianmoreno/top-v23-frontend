import { useState } from 'react';

const useForm = (initState = {}) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }) => {
    const {
      name, type, checked, value: inputValue,
    } = target;
    const value = type === 'checkbox' ? checked : inputValue;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, handleChange];
};

export default useForm;
