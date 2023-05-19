import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "mohammad",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form Data", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const staticForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.values);
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <form
        className="flex flex-col mx-auto bg-white w-[500px]"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-[2px]"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-[2px] "
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-[2px]"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button
          type="submit"
          className="mt-[30px] mx-auto bg-gray-500 rounded-[5px] w-[150px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default staticForm;
