import React from 'react';

const FormInput = ({ label, type, id, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        required
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default FormInput;
