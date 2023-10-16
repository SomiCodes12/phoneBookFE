import { GiClockwork } from "react-icons/gi";
import { BiTask } from "react-icons/bi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { MdOutlineCreate } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sider = () => {
  const [parent] = useAutoAnimate();
  return (
    <div
      ref={parent}
      className="w-[240px] h-[calc(100vh-80px)]  p-6 flex flex-col secondPoint:hidden bg-gray-200"
    >
      <div className="w-[180px] h-[50px]  rounded-[10px] flex p-3 items-center text-black hover:cursor-pointer border ">
        <div>
          <MdOutlineCreate />
        </div>
        <NavLink to="/create" className="ml-2">
          Create Contact
        </NavLink>
      </div>
      <div className="">
        <div className="w-[160px] h-[50px] rounded-[10px] my-5 flex p-3 items-center text-black hover:cursor-pointer border ">
          <div className="mr-4">
            <GiClockwork />
          </div>
          <NavLink to="/business">Business</NavLink>
        </div>
        <div className="w-[160px] h-[50px]  rounded-[10px] my-5 flex p-3 items-center text-black hover:cursor-pointer border ">
          <div className="mr-4">
            <BiTask />
          </div>
          <NavLink to="/friends">Friends</NavLink>
        </div>
        <div className="w-[160px] h-[50px]  rounded-[10px] my-5 flex p-3 items-center text-black hover:cursor-pointer border ">
          <div className="mr-4">
            <BiTask />
          </div>
          <NavLink to="/family">Family</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sider;
