"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useSettings } from "../context/SettingContext";
export const Settings = ()=>{
//    const [isOpen , setIsOpen] = useState(true)
   const { isOpen, closeSettings } = useSettings();
   const cardRef = useRef<HTMLDivElement>(null);

   // Close settings on outside click
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
         closeSettings();
       }
     };
 
     if (isOpen) {
       document.addEventListener("mousedown", handleClickOutside);
     } else {
       document.removeEventListener("mousedown", handleClickOutside);
     }
 
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [isOpen ,closeSettings]);
    return (
        <div ref={cardRef} className={`flex flex-col justify-start items-center  fixed top-0 right-0 h-full w-80 bg-[#FFFFFF] shadow-lg rounded-[32px] border-[0.5px] pt-10 transform transition-transform duration-300 ease-in-out ${ isOpen ? "translate-x-0" : "translate-x-full"}`}>
           <h3 className="font-inter font-bold text-[20px]">Settings</h3>
           <div className="flex flex-col space-y-4 mt-10">
            <div className="flex justify-start items-center space-x-3 bg-[#F7F8FA] p-2 rounded-[5px]">
               <Image src='assets/icons/language.svg' alt='Home-btn' width={30} height={73}  />
               <span className="font-inter font-400 text-[#868686]">Language Settings</span>

            </div>
            <div className="flex justify-start items-center space-x-3  bg-[#F7F8FA] p-2 rounded-[5px]">
               <Image src='assets/icons/general.svg' alt='Home-btn' width={30} height={73}  />
               <span className="font-inter font-400 text-[#868686]">General Settings</span>

            </div>
            <div className="flex justify-start items-center space-x-3  bg-[#F7F8FA] p-2 rounded-[5px]">
               <Image src='assets/icons/font.svg' alt='Home-btn' width={30} height={73}  />
               <span className="font-inter font-400 text-[#868686]">Font Settings</span>

            </div>
            <div className="flex justify-start items-center space-x-3  bg-[#F7F8FA] p-2 rounded-[5px] border-l-[5px] border-[#1FA45B]">
               <Image src='assets/icons/menu.svg' alt='Home-btn' width={30} height={73}  />
               <span className="font-inter font-semibold text-[#1FA45B]">Appearence Settings</span>

            </div>
            <div className="flex justify-between items-center space-x-3 bg-[#F7F8FA] p-3 w-[260px] rounded-[5px]">
               <span className="font-inter font-400 text-[#868686]">Night Mode</span>
               <Image src='assets/icons/toggle.svg' alt='Home-btn' width={25} height={73}  />

            </div>

           </div>
        </div>
    )
}