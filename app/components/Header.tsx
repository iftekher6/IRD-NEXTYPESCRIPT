"use client"
import { useSettings } from "../context/SettingContext";

 export const Header =()=>{
    const { toggleSettings } = useSettings();
    return(
        <header className="flex justify-between w-[1230px] relative top-[10px] left-[110px] p-4">
        <span className="font-poppins font-semiBold text-[25px]">Duas page</span>
     <div className="flex space-x-5">
   {/* search */}
   <div className="flex w-[300px] rounded-[7px] border-[1.5px] bg-[#FFFFFF] p-1 space-x-3 ">
            
            <input type="search" placeholder="Search by Dua Name" className="w-full p-2 bg-transparent outline-none"  />
            <img className="bg-[#F3F4F6] w-10 p-[8px] rounded-[6px]" src="assets/icons/searchCat.svg"  />
          </div>
         {/* profile */}
          <div className="flex space-x-2">
          <img className=" w-12 " src="assets/icons/profile.svg"  />
          <img className=" w-3 " src="assets/icons/dropdown.svg"  />
          <img onClick={toggleSettings} className=" w-10 "  src="assets/icons/settings.svg"  />
          
          </div>
     </div>
  
      </header>

    )
 }
 
