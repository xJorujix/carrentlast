import banner from "./banner.jpg"
import icon from "./icon.png"
import logo from "./logo.png"
import background from "./background.jpg"

function Header(){

 
    return(
        
        <header className="h-screen bg-[url('/img/hero-pattern.svg')">
            <div className= " w-4/5 mx-auto my-6 flex justify-between">
                <img src={logo} className="w-12 hover:scale-150" alt="logo" />
                <ul className=" flex mt-3 gap-9 ml-14 cursor-pointer  ">
                    <li className="hover:text-blue-500 hover:scale-125">მთავარი</li>
                    <li className="hover:text-blue-500 hover:scale-125">მანქანები</li>
                    <li className="hover:text-blue-500 hover:scale-125">ჩვენ შესახებ</li>
                </ul>
                <a className="border-2 hover:bg-blue-800  hover:border-b-2 hover:blue-green-800 border-blue-600 rounded-xl px-7 py-2 text-white bg-blue-600 ml-28 hover:scale-110" href="#">იპოვე შენი მანქანა</a>
               <button className="hover:scale-125"><img className="h-10" src={icon} alt="icon" /></button>
            </div><hr className="mt-5"/>
                <div className="flex">
                <h1 className=" mt-60 ml-32 h-16 text-xl ">იქირავე შენთვის სასურველი მანქანა იაფად!</h1>
                <img className=" rounded-xl mt-24 h-80 ml-44 " src={banner} alt="img" />
            </div>
        </header>
    )
}

export default Header;