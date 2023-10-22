import {
  CgSmartHomeCooker,
  CgPolaroid,
  CgPresentation,
  CgPrinter,
  CgSlack,
  CgSmartHomeBoiler,
} from "react-icons/cg";
export default function Features_items() {
  type f_items = {
    icone: React.ReactNode;
    header: string;
    text: string;
  };

  const feat_items: f_items[] = [
    {
      icone: <CgSmartHomeCooker />,
      header: "Data tracking",
      text: "Built-in analytics and reporting capabilities help businesses gather insights, make data-driven decisions.",
    },
    {
      icone: <CgPolaroid />,
      header: "Feedback activity",
      text: "Leave comments and questions directly within the document, ensuring proactive communication.",
    },
    {
      icone: <CgPresentation />,
      header: "Profile permissions",
      text: "Maintain control and security over your collaborative projects with our role-based permission settings.",
    },
    {
      icone: <CgSmartHomeBoiler />,
      header: "AI assistant",
      text: "Designed to enhance your editing experience, providing suggestions and streamlining your workflow.",
    },
    {
      icone: <CgSlack />,
      header: "Custom reports",
      text: "Formatting and styling can be time-consuming, especially when dealing with large documents.",
    },
    {
      icone: <CgPrinter />,
      header: "Content suggestions",
      text: "Tap into the power of our AI to fuel your creativity and overcome content creation challenges.",
    },
  ];

  return (
    <>
      {feat_items.map((item, index) => {
        return (
          <div className="p-[40px] rounded-[24px] border border-[rgb(36,36,36)] bg-[rgb(22,22,22)] ">
            <div className="flex flex-col gap-[10px] ">
              <div className=" text-[#FBFBFB] text-[24px]  ">{item.icone} </div>
              <div className="flex flex-col gap-[8px] ">
                <h6 className=" text-[#FBFBFB] text-[16px] font-bold ">
                  {item.header}{" "}
                </h6>
                <p className=" text-[#9b9ca1] text-[16px] font-normal  ">
                  {item.text}{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
