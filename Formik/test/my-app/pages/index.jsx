import { useFormik } from "formik";
export default function Home() {
  const initialValues = {
    name: "",
    lastName: "",
    Channel: "",
  };
  const onSubmit = (values) => {
    console.log(values, "11");
  };
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.Channel) {
      errors.Channel = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[gray] ">
      <from
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 border-2 rounded-md p-[10px]"
      >
        <label htmlFor="name" className="mr-[40px]">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-md outline-none px-[8px]"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label className="mr-[15px]" htmlFor="lastname">
          lastName
        </label>
        <input
          className="rounded-md outline-none px-[8px]"
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="Channel" className="mr-[24px]">
          Channel
        </label>
        <input
          className="rounded-md outline-none px-[8px]"
          type="text"
          id="Channel"
          name="Channel"
          onChange={formik.handleChange}
          value={formik.values.Channel}
        />
        {formik.errors.Channel ? (
          <div className="error">{formik.errors.Channel}</div>
        ) : null}

        <button
          type="submit"
          className="bg-[white] w-[180px] rounded-md mx-auto"
        >
          submit
        </button>
      </from>
    </div>
  );
}
