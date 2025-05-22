import react, {useState} from "react";

export interface TabsProps {
  bgColorTabActive : string;
}

export const Tabs = (props : TabsProps) => {
  const {bgColorTabActive} = props;
  const data = [
    {id : '1', title : "Tabs 1"},
    {id : '2', title : "Tabs 2"},
    {id : '3', title : "Tabs 3"},
    {id : '4', title : "Tabs 4"},
    {id : '5', title : "Tabs 5"},
  ];
  const [active, setActive] = useState(data[0]);

  return (
    <div className={"relative w-full"}>
        <div className={"flex max-w-full mx-auto w-fit overflow-x-auto scroll-smooth border border-[#F3F4F6] bg-[#F3F4F6] p-1 rounded-full"}>
          {data.map((value, index, array) => (
            <div id={value.id} onClick={() => setActive(value)} style={{backgroundColor : active.title == value.title ? bgColorTabActive : ''}} className={`flex-shrink-0 py-3 px-8 bg min-w-[100px] my-auto ${active.title == value.title && ` rounded-full text-white`}`}>
              <button className={`hover:font-bold cursor-pointer ${active.title == value.title ? `font-bold` : `font-normal`}`}>
                {value.title}
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}
