import react from "react";
import { MdDateRange } from "react-icons/md";
import {Button} from "../button/button";

export interface CardProps {
  rounded?: '0%' | '25%' | '50%' | '75%' | '100%';
  withImage?: boolean;
  title: string;
  description : string;
}

export const Card = ({rounded, title, description} : CardProps) => {

  return (
    <div style={{borderRadius: rounded}} className={"border border-gray-500 rounded cursor-pointer"}>
      <img src="/images/default.png" alt={"default jpg"} id=""
           className="w-full aspect-4/3 object-contain rounded-t-2xl"/>
      <div className={"flex space-x-5 ml-4 py-2"}>
        <div className={"flex space-x-2"}>
          <MdDateRange className={"my-auto"}/>
          <span>10 Desc 2025</span>
        </div>
        <div className={"flex space-x-2"}>
          <MdDateRange className={"my-auto"}/>
          <span>Success</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-3 px-4 w-full h-[155px] md:h-[175px]">
          <h3 className="min-h-[50px] sm:min-h-[70px] line-clamp-3">{title}</h3>
          <p className="body-normal line-clamp-3">{description}</p>
        </div>
        <div className="w-full flex justify-center px-4 pb-6 pt-7">
          <Button label={"Button Card"} bgColorButton={'#253C97'}></Button>
        </div>
      </div>
    </div>
  )
}
