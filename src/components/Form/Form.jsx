import React from "react";

const Form = ({ handleSubmit, handleChange, inputName }) => (
  <form className="form" onSubmit={handleSubmit}>
    <label className="label-name"> Название </label>
    <input
      ref={inputName}
      className="input-name"
      defaultValue=""
      type="text"
      onChange={handleChange}
      name="name"
      required={true}
      placeholder="Город"
    />

    <label className="label-timezone"> Временная зона</label>
    <input
      className="input-timezone"
      type="number"
      onChange={handleChange}
      name="timeZone"
      defaultValue=""
      required={true}
      placeholder="+ часов"
    />

    <button className="btn-submit" onSubmit={handleSubmit}>
      Добавить
    </button>
  </form>
);

export { Form };
