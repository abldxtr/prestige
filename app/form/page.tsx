"use client";

import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export type formdata = {
  firstname: string;
  email: string;
  password: string;
  age: number;
  confirmpassword: string;
};
export default function Page() {
  const [show, setshow] = useState(false);
  const schema: ZodType<formdata> = z
    .object({
      firstname: z
        .string()
        .min(2, "First name atleast 2 characters")
        .max(32, "First name less than 32 characters"),
      email: z.string().email("Please enter a valid email adress."),
      password: z.string().min(4).max(12),
      age: z.number().min(18).max(77),
      confirmpassword: z.string().min(4).max(12),
    })
    .refine((data) => data.password === data.confirmpassword, {
      message: "password don't match",
      path: ["confirmpassword"],
    });
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formdata>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: formdata) => {
    console.log("it work", data);
    reset();
  };
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[220px] bg-gray-200 rounded-md [&_input]:mb-4 p-4 "
      >
        <label htmlFor="firstname">name</label>
        <input type="text" {...register("firstname")} />
        {errors.firstname && <span>{errors.firstname.message}</span>}

        <label htmlFor="email">email</label>
        <input type="email" {...register("email")} />
        <label htmlFor="age">age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        <label htmlFor="password">password</label>
        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            {...register("password")}
            className="w-full h-full relative !mb-0 pr-7"
          />
          {show ? (
            <AiOutlineEye
              className="absolute -translate-y-1/2 top-1/2 right-2 rounded-full hover:bg-gray-200 transition cursor-pointer w-5 h-5 p-0.5 "
              onClick={() => setshow((p) => !p)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute  -translate-y-1/2 top-1/2 right-2 rounded-full hover:bg-gray-200 transition cursor-pointer w-5 h-5 p-0.5 z-10  "
              onClick={() => setshow((p) => !p)}
            />
          )}
        </div>
        <label htmlFor="confirmpassword">confirm password</label>
        <input type="password" {...register("confirmpassword")} />
        <button
          type="submit"
          disabled={isSubmitting}
          className="disabled:bg-gray-400 disabled:opacity-30"
        >
          submit
        </button>
        {watch().firstname?.length > 0 && console.log(watch().firstname)}
      </form>
    </div>
  );
}
