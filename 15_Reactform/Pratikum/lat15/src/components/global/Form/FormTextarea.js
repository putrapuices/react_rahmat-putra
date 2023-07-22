import React from 'react';

const FormTextarea = ({ label, id, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default FormTextarea;
