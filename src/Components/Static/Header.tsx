import {RxHamburgerMenu} from "react-icons/rx"
import pix from "../../assets/profile.png"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import { NavLink } from "react-router-dom"


const Header = () => {

  const [ toggle , setToggle ] = useState<boolean>(false)

  const onToggle = () => {
    setToggle(!toggle)
  }

  console.log(toggle);
  

  return (
    <div>
      <div className="w-full h-[80px]  flex justify-center items-center">
         <div className="w-[90%] h-full  flex justify-between items-center ">
        <div className="flex items-center">
          <div className="text-[25px] hidden secondPoint:flex"><RxHamburgerMenu/></div>
          <div><img src={pix} alt="" className="mx-3"/></div>
          <NavLink to="/" >Contacts</NavLink>
          {/* box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.75); */}

        </div>
   {
    toggle ? null : (    <div className="w-[650px] secondPoint:w-[400px]  thirdPoint:hidden items-center shadow-md flex rounded-md h-[50px] px-2" style={{}}>
    <div className="text-[25px] mr-2"><BiSearch/></div>
    <input type="text" className="flex-1 h-[75%]  outline-none" placeholder="Search"/>
    </div>)
   }
       <div className="text-[25px] mr-2 hidden thirdPoint:flex" onClick={onToggle}><BiSearch/></div>
        <div className="w-[40px] h-[40px] border rounded-[50%] flex justify-center items-center">S</div>
         </div>
      </div>
    </div>
  )
}

export default Header;