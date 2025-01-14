'use cache'
import Navbar from "./components/Navbar";
import { Categories } from "./components/Categories";
import { Settings } from "./components/Settings";
// import { Data } from "@/utils/database";
// import { GET } from "./api/database/route";
import { getData } from "@/utils/database";
// import { getData } from "./actions/getData";

export default async function Home() {
 console.log(process.env.URL, 'dataaaaaaaaa')
// try {
      //  const response= await fetch(`${process.env.URL}/api/database`, {
      //       cache : 'force-cache'
      //  })
       const response = await getData()
       const data = await response.json()
// } catch (error) {
//       console.log(error)
// }

  return (
  <>
  <div className="flex space-x-2 mt-[-80px]">
  
  <Navbar/>
   <Categories 
         categories={data.categories} 
         dua={data.dua} 
         sub={data.subcategories}/>
   <Settings/>
   {/* <DuaComponent dua={data.dua}/> */}
   {/* <Component/> */}
  </div>
 
  </>

  );
}

// export async function get(){
//   // const {categories, subcategories, dua} = useApiData()
  
//     const response = await fetch('/api/database');
//     const data : ApiResponse= await response.json();
//     // const {categories, subcategories , dua} = data
//   return {
//     props: {
//       categories : data.categories, 
//       subcategories : data.subcategories,
//        dua : data.dua
//     }
//   }
// }
