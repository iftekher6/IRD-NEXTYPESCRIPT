"use client"
import { useState } from "react";
import Image from "next/image";
import { Category, Dua, Subcategory } from "../types/types";
import { DuaCard } from "./DuaCard";

// interface Cat{
//   cat_id : number
// }

export const Categories : React.FC<{categories: Category[], dua: Dua[],sub: Subcategory[] }> = ({categories , dua, sub})=>{
   
 const [selectedCat, setSelectedCat] = useState(categories[0]) 

 const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null)
 console.log(selectedCat, 'se')


 const handleClick = (cat_id: number) => {
  setActiveCategoryId((prev) => (prev === cat_id ? null : cat_id));
};

  
  if (!categories || categories.length === 0) {
    return <div>No Duas Found</div>;
  }

  const handleOnClick = (data : any)=>{
    setSelectedCat(data)
  
    handleClick(data.cat_id)
  }
    
    return (  
      
       
      <div className="flex gap-2">
 <div className="h-[435px] w-[285px] bg-white mt-[85px] box-border rounded-[10px] border-[0.5px]  overflow-hidden" >
          <h1 className="bg-[#1FA45B] text-center p-2 text-[#FFFFFF] rounded-t-[10px]">Categories</h1>
          <div className="flex flex-col justify-center items-center mt-2">
            {/* searchBar */}
            <div className="flex w-[95%] rounded-[7px] border-[1.5px] bg-['#E2E2E2'] p-1 space-x-3 ">
                <Image src="assets/icons/searchCat.svg" alt='searchIcon'/>
              <input type="search" placeholder="Search by Categories" className="w-full bg-transparent outline-none"  />
            </div>
        
          </div>
             {/* Data section */}
             {/* <> */}
             <div className=" flex flex-col h-full  justify-start items-center overflow-y-scroll ">
               
           {
            
             categories.map(data=> (
              <>
               <div key={data.id} onClick={()=> handleOnClick(data )} className="flex w-[275px] justify-between items-center space-x-5   hover:bg-[#E8F0F5] hover:rounded-[10px] p-3  cursor-pointer ">
            
                <div className="flex justify-center items-center space-x-2">
                <Image src='assets/icons/human.svg' width={50} alt='humanIcon'  />
                <div className="flex flex-col">
              
                      <p className="text-[14px] text-nowrap text-[#393939] font-[600] font-inter">{data.cat_name_en}</p>
                       <p className="text-[14px] font-poppins text-[#7E7E7E] font-[400]">Subcategory: {data.no_of_subcat}</p> 
               
                
                </div>
             </div>
            
              <div className="flex flex-col justify-center items-center p-2  border-l-[1px] border-[#E2E2E2] text-sm ">  
                <span className="text-[#393939] font-inter font-[600]">{data.no_of_dua}</span> 
                <span className="font-poppins font-[400] text-[#7E7E7E]">Duas</span>
              </div>
            
          
              </div>
              {
                activeCategoryId === data.cat_id && sub
                .filter((subs) => subs.cat_id === data.cat_id)
                .map((sub) => (
                  <p className="flex flex-col"><span>{sub.subcat_name_en}</span></p>
                ))
                 
              }
          
             </>
           
            
            
            )
            
            )
          
          }
           </div>
           {/* </> */}
        </div>
        <DuaCard dua={dua} content={selectedCat.cat_id}/>
      </div>    
      
    )
}

