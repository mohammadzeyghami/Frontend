import React from "react";
import { useFormik } from "formik";

const Validate = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("form Data", values);
    },
  });

  console.log(formik.values);
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <form className="flex flex-col mx-auto bg-white w-[500px]">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-[2px]"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="username">email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-[2px] "
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-[2px]"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

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

export default Validate;
