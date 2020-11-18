import React from 'react';
import { useFormik } from 'formik';

function Input({ submit, textButton, id, styleClass, item }) {
  const formik = useFormik({
    initialValues: {
      breed: item ? item.breed : '',
      color: item ? item.color : '',
      age: item ? item.age : '',
      signs: item ? item.signs : '',
    },
    onSubmit: (values) => {
      submit(values, id);
      formik.resetForm();
    },
    validate: (values) => {
      let errors = {};
      if (!values.breed) {
        errors.breed='error'
      }
      if (!values.color) {
        errors.color='error'
      }
      if (!values.age) {
        errors.age='error'
      }
      if (!values.signs) {
        errors.signs='error'
      }
      return errors;
    },
  });

  return (
    <form className={styleClass} onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        value={formik.values.breed}
        name="breed"
        id="breed"
        className={`input ${formik.errors.breed && 'error'}`}
        type="text"
        placeholder="Порода"
      />
      <input
        onChange={formik.handleChange}
        name="color"
        id="color"
        value={formik.values.color}
        className={`input ${formik.errors.color && 'error'}`}
        type="text"
        placeholder="Цвет"
      />
      <input
        onChange={formik.handleChange}
        name="age"
        id="age"
        value={formik.values.age}
        className={`input ${formik.errors.age && 'error'}`}
        type="text"
        placeholder="Возраст"
      />
      <input
        onChange={formik.handleChange}
        name="signs"
        id="signs"
        value={formik.values.signs}
        className={`input ${formik.errors.signs && 'error'}`}
        type="text"
        placeholder="Отличительные признаки"
      />
      <button className="but">{textButton}</button>
    </form>
  );
}

export default Input;
