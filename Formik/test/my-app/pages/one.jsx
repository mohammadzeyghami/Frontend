import React from "react";
import { useForm } from "react-hook-form";

const staticForm = () => {
  const form = useForm();
  const { register } = form;
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <form className="flex flex-col mx-auto w-[500px]">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="border-[2px]"
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="border-[2px]"
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          className="border-[2px]"
        />

        <button className="mt-[30px] mx-auto bg-gray-500 rounded-[5px] w-[150px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default staticForm;
