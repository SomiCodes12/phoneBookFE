import { BiTask } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Task = () => {
  return (
    <div className="relative bg-green-400">
      <div className="text-[25px]  bottom-10 right-10 firstPoint:bottom-20 fifthPoint:right-10 fixed fifthPoint:fixed ">
       <NavLink to="/create"> <BiTask className="text-3xl " /></NavLink>
      </div>
    </div>
  );
};

export default Task;
