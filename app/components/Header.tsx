"use client"
import { useSettings } from "../context/SettingContext";
import Image from "next/image";

 export const Header =()=>{
    const { toggleSettings } = useSettings();
    return(
        <header className="flex justify-between w-[1230px] relative top-[10px] left-[110px] p-4">
        <span className="font-poppins font-semiBold text-[25px]">Duas page</span>
     <div className="flex space-x-5">
   {/* search */}
   <div className="flex w-[300px] rounded-[7px] border-[1.5px] bg-[#FFFFFF] p-1 space-x-3 ">
            
            <input type="search" placeholder="Search by Dua Name" className="w-full p-2 bg-transparent outline-none"  />
            <Image className="bg-[#F3F4F6] w-10 p-[8px] rounded-[6px]" src="assets/icons/searchCat.svg" alt='searchIcon' width={20} height={20}/>
          </div>
         {/* profile */}
          <div className="flex space-x-2">
          <Image className=" w-12 " src="assets/icons/profile.svg" alt="profileIcon"  width={20} height={20}/>
          <Image className=" w-3 " src="assets/icons/dropdown.svg"  alt="dropdownIcon" width={20} height={20}/>
          <Image onClick={toggleSettings} className=" w-10 " alt="settingsIcon" src="assets/icons/settings.svg" width={20} height={20} />
          
          </div>
     </div>
  
      </header>

    )
 }
 
