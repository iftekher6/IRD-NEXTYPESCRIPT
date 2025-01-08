import { Category, Dua } from "../types/types"
import Image from "next/image"
interface Content{
    cat_id : number
}
export const DuaCard : React.FC<{dua: Dua[] | null, content: number}> = ({dua , content})=>{
       const filter  = dua?.filter(data=> data.cat_id === content)
       console.log(filter, 'filter')
    return(
        
        
        <div  className="flex flex-col w-[950px] h-[560px] overflow-y-scroll space-y-2 mt-[85px]">
        { filter?.map((data, index)  =>(
            <>
         
  <div key={data.dua_id || index} className="bg-white p-5 rounded-[10px] border-[0.5px]">
  <h1><span className="text-[#1FA45B]">Section: </span>{data.dua_name_en} </h1>
</div>
<div className="flex flex-col bg-white p-5 rounded-[10px] border-[0.5px] space-y-2">
   <h3 className="font-inter font-[600] text-[#1FA45B] text-[16px]"><img className="inline-block" src='assets/icons/allahu.svg' /> {data.dua_name_en}</h3>
   <p className="font-inter leading-7 text-justify text-[16px]">{data.top_en}</p>
   <p className="font-inter font-[400] text-[30px] text-right">{data.dua_arabic}</p>
   <p className="font-inter font-[500] text-[16px] ">{data.transliteration_en}</p>
   <p className="font-inter font-[400] text-[16px] ">{data.translation_en}</p>
<div className="flex flex-col">
<span className="text-[#1FA45B] font-[600]">Reference:</span> 
<span>{data.refference_en} </span>
</div>

<div className="flex justify-end space-x-10 cursor-pointer">

<Image src='assets/icons/copy.svg' alt='Home-btn' width={25} height={25}  />
    <Image src='assets/icons/save.svg' alt='allDua-btn' width={15} height={25} />
    <Image src='assets/icons/bulb.svg' alt='memorize-btn'  width={18} height={25} />
    <Image src='assets/icons/share.svg'alt='bookmark-btn'  width={25}  height={25}/>
    <Image src='assets/icons/report.svg'alt='bookmark-btn'  width={25} height={25} />
           </div>
</div>

            
</>
           )) }
           </div>
        
        
       

    )
}