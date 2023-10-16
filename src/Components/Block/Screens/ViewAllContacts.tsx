import { useAutoAnimate } from "@formkit/auto-animate/react";
import pix from "../../../assets/dummy.jpg"
import pix2 from "../../../assets/react.svg"
import { useGetContacts } from "../../../Hooks/ContactHook";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const ViewAllContacts = () => {

  const [ state , setState ] = useState<string>("")

  const { contacts } = useGetContacts();

  let filteredContacts = [];

  if (contacts) {
    filteredContacts = contacts.filter((contact: any) =>
      contact.category.includes(state.toLowerCase())
    );
  }
 

  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="w-[calc(100vw-240px)] h-[calc(100vh-80px)]  secondPoint:w-[100vw] flex ">


<div
            className="w-[650px] secondPoint:w-[400px]  thirdPoint:w-[250px] thirdPoint:h-[40px] items-center shadow-md flex rounded-md h-[50px] px-2"
            style={{}}
          >
            
       <input
              type="text"
              className="flex-1 h-[75%]  outline-none"
              placeholder="Search Contact"
            onChange={(e : any)=>{
                setState(e.target.value)
            }}  />
            <div className="text-[25px] thirdPoint:text-[15px] mr-2">
              <BiSearch />
            </div>
           
          </div>


      <div className="w-[48%] h-full bg-blue-300 pl-[20px] fifthPoint:w-full">
        {
          filteredContacts?.map((props:any)=>(
            <div className="w-full  p-4 flex items-center  secondPoint:w-[100vw]   fifthPoint:p-0 fifthPoint:pt-5" key={props._id}>
          <div className="w-[50px] h-[50px] rounded-[50%] border mr-5"></div>
          <div className="text-[25px] fifthPoint:text-[20px]">{props.name}</div>
        </div>
          ))
        }
      
      </div>
      <div className="w-[50%] h-full thirdPoint:hidden pt-6">
      <div className="w-full h-[40%] flex justify-center items-center">
          <div className="w-[150px] h-[150px] thirdPoint:w-[15opx] thirdPoint:h-[100px]">
            <img src={pix} alt="" className="w-full h-full"/>
          </div>
          <div ></div>
        </div>
      <div className="p-4">
   <div className="flex items-center">
    <img src={pix2} alt="" className=" h-[40px] mr-8"/>
    <input type="text" className="w-[90%] h-[30px] border-b-2 outline-none my-4" placeholder="Contact Name"/>
   </div>
   <div className="flex items-center">
    <img src={pix2} alt="" className=" h-[40px] mr-8"/>
    <input type="text" className="w-[90%] h-[30px] border-b-2 outline-none my-4" placeholder="Phone Number"/>
   </div>
   <div className="flex items-center">
    <img src={pix2} alt="" className=" h-[40px] mr-8"/>
    <input type="text" className="w-[90%] h-[30px] border-b-2 outline-none my-4" placeholder="Category"/>
   </div>
      </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ViewAllContacts;
