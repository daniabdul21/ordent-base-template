import react, {useState} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
export interface PaginationProps{}

export const Pagination = () => {
  const paginations = [
    {
      page : 1,
    },
    {
      page : 2,
    },
    {
      page : 3,
    },
    {
      page : 4,
    },
    {
      page : 5,
    },
  ];
  const [active, setActive] = useState(paginations[0]);
  return (
    <nav className="flex w-[1000px] items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-full flex-1">
        <button className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          <IoIosArrowBack className="mr-3 size-5 text-gray-400"></IoIosArrowBack>
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {paginations.map((value) => (
          <button
            onClick={() => setActive(value)}
            className={`inline-flex items-center border-t-2 ${value.page == active.page ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} px-4 pt-4 text-sm font-medium`}
          >
            {value.page}
          </button>
        ))}
        <span
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <button
          onClick={() => setActive({page: 20})}
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          20
        </button>
      </div>
      <div className="-mt-px flex w-full flex-1 justify-end">
        <button
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <IoIosArrowForward className="ml-3 size-5 text-gray-400"></IoIosArrowForward>
        </button>
      </div>
    </nav>
  )
}
