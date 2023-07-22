import React from 'react';

const FormSelect = ({ label, id, name, value, onChange, options, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        required
      >
        <option value="">Pilih {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default FormSelect;
