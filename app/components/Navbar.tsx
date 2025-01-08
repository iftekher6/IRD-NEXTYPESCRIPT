// import Logo from '../../public/assets/icons/'
import Image from "next/image";
const NavBar = ()=>{
  return(
    <nav>
    <div className="flex flex-col justify-evenly items-center w-[80px] h-[500px] rounded-[24px] bg-[#FFFFFF] ml-5 mt-6">
    <Image src='assets/icons/logo.svg' alt='logo' width={75} height={75} />
    {/* Navs */}
    <div className="space-y-2">
      
   
    <Image src='assets/icons/allDua.svg' alt='allDua-btn' width={35} height={73} />
    <Image src='assets/icons/Memorize.svg' alt='memorize-btn'  width={35} height={73} />
    <Image src='assets/icons/Bookmark.svg'alt='bookmark-btn'  width={35} height={73} />
    <Image src='assets/icons/Ruqyah.svg' alt='ruqyah-btn' width={35} height={73} />
    <Image src='assets/icons/dua.svg' alt='dua-btn' width={35} height={73} />
    <Image src='assets/icons/Book.svg' alt='book-btn' width={35} height={73} />
    {/* <img src='assets/icons/Book.svg' width={43} height={73} /> */}
      </div> 
      <div>
      <Image src='assets/icons/support.svg' alt='support-btn' width={80} height={80} />
      </div>
    </div>
    </nav>
  )
}

export default NavBar;