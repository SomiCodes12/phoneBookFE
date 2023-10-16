import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useGetContacts } from "../../../Hooks/ContactHook";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import Task from "../../Static/Task";

const ViewAllContacts = () => {
  const [state, setState] = useState<string>("");

  const { contacts } = useGetContacts();

  let filteredContacts = [];

  if (contacts) {
    filteredContacts = contacts.filter((contact: any) =>
      contact.category.includes(state.toLowerCase())
    );
  }

  const [parent] = useAutoAnimate();
  return (
    <div
      ref={parent}
      className="w-[calc(100vw-240px)] h-[calc(100vh-80px)]  secondPoint:w-[100vw] p-2"
    >
      <div
        className="w-[650px] secondPoint:w-[400px] fifthPoint:w-[300px] thirdPoint:w-[150px] fourthPoint:w-[300px] fifthPoint:fixed thirdPoint:h-[40px] items-center shadow-md flex rounded-md h-[70px] px-2 fixed bg-white"
        style={{}}
      >
        <input
          type="text"
          className="flex-1 h-[75%] p-3 outline-none"
          placeholder="Search Contact"
          onChange={(e: any) => {
            setState(e.target.value);
          }}
        />
        <BiSearch />
      </div>
      <div
      className="mt-20 fifthPoint:mt-10"></div>

      <div className="w-[48%] h-full  bg-blue-00 pl-[20px] fifthPoint:w-full">
        {filteredContacts?.map((props: any) => (
          <div
            className="w-full  p-4 flex items-center  secondPoint:w-[100vw]   fifthPoint:p-0 fifthPoint:pt-5"
            key={props._id}
          >
            <div className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border mr-5">
              {props.avatar}
            </div>
            <div className="text-[25px] fifthPoint:text-[20px]">
              {props.name}
            </div>
          </div>
        ))}
        <div>
          <Task />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ViewAllContacts;
