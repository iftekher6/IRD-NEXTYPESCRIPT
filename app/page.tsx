import Navbar from "./components/Navbar";
import { Categories } from "./components/Categories";
import { Settings } from "./components/Settings";

export default async function Home() {

 
  const response = await fetch('http://localhost:3000/api/database',{
    cache : 'force-cache'
  })
  const data = await response.json()

  return (
  <>
  <div className="flex space-x-2 mt-[-80px]">
  
  <Navbar/>
   <Categories categories={data.categories} dua={data.dua} sub={data.subcategories}/>
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
