export default function Home() {
  type myitem = {
    id: number;
    text: string;
  };

  type myy = myitem[];

  const my: myy = [
    {
      id: 1,
      text: "Montly",
    },
    {
      id: 2,
      text: "Yearly",
    },
  ];

  return (
    <main className="flex items-center justify-center p-10  ">
      {/* button */}
      <div className="flex gap-x-4 bg-gray-900 p-2 rounded-full  ">{
        my.
      }</div>

      {/* price table */}

      <div></div>
    </main>
  );
}
