import { RxHamburgerMenu } from "react-icons/rx";
import pix from "../../assets/react.svg";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetContacts } from "../../Hooks/ContactHook";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);


 

  const onToggle = () => {

  

    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div>
      <div className="w-full h-[80px]  flex justify-center items-center ">
        <div className="w-[90%] h-full  flex justify-between items-center ">
          <div className="flex items-center">
            <div className="text-[25px] hidden secondPoint:flex">
              <RxHamburgerMenu />
            </div>
            <div className="thirdPoint:hidden">
              <div>
                <img src={pix} alt="" className="mx-3" />
              </div>
              <NavLink to="/">Contacts</NavLink>
            </div>
            {/* box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75); */}
          </div>
         
          {/*    
       <div className="text-[25px] mr-2 hidden thirdPoint:flex" onClick={onToggle}><BiSearch/></div> */}
          <div className="w-[40px] h-[40px] border rounded-[50%] flex justify-center items-center thirdPoint:hidden">
            S
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
