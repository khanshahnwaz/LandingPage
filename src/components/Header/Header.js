import React, {useState } from "react";
import MobileViews from "./MobileHeader";
import { MdOutlineMenu} from "react-icons/md";

const Header = () => {
  const [controlSideBar, setControlSideBar] = useState("-left-[200%]"); 
  return (
    <>
      <div className="lg:hidden flex justify-between md:space-x-7 w-[95%] mx-auto py-3 px-2 ">
        <MdOutlineMenu
          onClick={() => setControlSideBar("left-0")}
          className="cursor-pointer hover:opacity-70 my-auto text-3xl"
        />
        <h1 className=" text-2xl text-blue-600 font-bold font-serif">Facebook</h1>
      </div>
      <MobileViews
        controlSideBar={controlSideBar}
        setControlSideBar={setControlSideBar}
        
      />

      <div
        id="head"
        className={`lg:block hidden sticky  lg:mt-10 lg:w-[80%] xl:w-[70%]  py-5 px-2 mx-auto text-center bg-white  `}
      >
       
          <nav>
            <ul className={`m-auto    flex flex-wrap items-center justify-around  `}>
            <li className=" text-2xl text-blue-600 font-bold font-serif">Facebook</li>
            <li className="font-bold">Products</li>
            
            <li >Solution</li>

            <li className="">Industries</li>
            <li className="">Pricing</li>
            <p className="">Resource</p>
            <li>
            <button className="cursor-pointer hover:opacity-60 px-10 py-3 text-white bg-blue-800 rounded-md items-center text-center ">
              Book a Demo
            </button>
            </li>
           
            </ul>
          </nav>
          
            
          {/* <div className="flex justify-around gap-x-5 items-center "> */}
                     
              
          {/* </div> */}

         
      
      </div>
    </>
  );
};

export default Header;
