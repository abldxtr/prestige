import { z } from "zod";

export default function Page() {
    const schema = z.object()
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form
        action=""
        className="w-[220px] bg-gray-200 rounded-md [&_input]:mb-4 p-4 "
      >
        <label htmlFor="name">name</label>
        <input type="text" />

        <label htmlFor="email">email</label>
        <input type="email" />
        <label htmlFor="age">age</label>
        <input type="numbers" />
        <label htmlFor="password">password</label>
        <input type="password" />
        <label htmlFor="confirm password">confirm password</label>
        <input type="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
