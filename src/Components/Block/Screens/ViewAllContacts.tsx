import { useAutoAnimate } from "@formkit/auto-animate/react";

const ViewAllContacts = () => {
  const [parent] = useAutoAnimate();
  return (
    <div
      ref={parent}
      className=" border w-[calc(100vw-240px)] h-[calc(100vh-80px)] secondPoint:w-[100vw] items-center p-4 flex flex-col"
    >
      <div className="w-[60%] h-[70px]  border-gray-400 flex items-center justify-between px-[50px] my-4">
        <div>Name</div>
        <div className="secondPoint:hidden">Phone Number</div>
      </div>
      <div className="w-[60%] fifthPoint:w-[40%] h-[600px] flex flex-col items-center pr-[50px] my-4">
        <div className="flex justify-between w-full my-4 items-center">
          <div className="flex items-center fourthPoint:-ml-10">
            <div className="w-[50px]  h-[50px] border rounded-[50%] mr-6 secondPoint:w-[35px] secondPoint:h-[35px] secondPoint:rounded-full"></div>
            <div>Somijkbdwsfuiwerui</div>
          </div>
          <div className="secondPoint:hidden ml-5">08067952110</div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllContacts;
