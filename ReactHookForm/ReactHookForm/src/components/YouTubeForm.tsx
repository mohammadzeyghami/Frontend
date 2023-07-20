import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
interface formValues {
  username: string;
  email: string;
  channel: string;
}
const YouTubeForm = () => {
  const form = useForm<formValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: formValues) => {
    console.log("formSubmited", data);
  };

  //   const { name, onBlur, ref, onChange } = register("username");
  return (
    <div className="w-full h-full flex pt-[30vh] justify-center items-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          className="border-[1px]"
          id="username"
          {...register("username")}
          //   ref={ref}
          //   onBlur={onBlur}
        />
        <p className="text-[red]">{errors.username?.message}</p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          className="border-[1px]"
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
          })}
          id="email"
          name="email"
        />
        <p className="text-[red]">{errors.email?.message}</p>
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          className="border-[1px]"
          id="channel"
          {...register("channel")}
        />
        <p className="text-[red]">{errors.channel?.message}</p>
        <button className="mt-[10px] border-[1px] px-[10px] py-[5px]">
          submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
