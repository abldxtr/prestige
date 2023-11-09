export default function Dropdown_pages() {
  type dp = {
    header: string;
    body: string[];
  };
  const dp_menus: dp[] = [
    {
      header: "Product",
      body: ["Pricing", "Features", "Integrations", "Changelog"],
    },
    {
      header: "Company",
      body: ["About", "Blog"],
    },
    {
      header: "Resources",
      body: ["FAQ", "Contact", "Terms of service", "Privacy policy", "404"],
    },
  ];

  return (
    <>
      <div className="p-[32px] w-[600px] flex ">
        {dp_menus.map((item, index) => {
          return (
            <div className="flex grow-1 flex-1  ">
              <ul className="flex flex-col flex-1 gap-[16px]  ">
                <div>{item.header}</div>
                {item.body.map((itemm, index) => {
                  return <li className="!p-0">{itemm}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
