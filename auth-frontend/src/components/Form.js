import React from 'react';

function Form({ title, fields, onSubmit, buttonText }) {
  return (
    <form onSubmit={onSubmit} className="bg-light p-4 rounded shadow-sm">
      <h3 className="mb-4 text-center">{title}</h3>
      {fields.map((field, index) => (
        <div key={index} className="mb-3">
          <label className="form-label">{field.label}</label>
          <input
            type={field.type}
            className="form-control"
            name={field.name}
            placeholder={field.placeholder}
            value={field.value} // Bind to the state value passed as prop
            onChange={field.onChange} // Bind to the onChange handler passed as prop
            required
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary w-100">
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
