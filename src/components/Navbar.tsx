import { CiGlobe } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const linkMenu = [
        {"link": "Home"},
        {"link": "About us"},
        {"link": "Loan Repayment"},
        {"link": "FAQs"}
    ]
    return (
        <nav className='lg:px-20 md:px-14 px-4 py-4 flex justify-between items-center font-semibold'>

            <div>
                <h1 className='text-2xl bg-gradient-to-r from-yellow-500 from-25% via-pink-400 to-70% to-purple-500 bg-clip-text text-transparent'>Persoredee</h1>
            </div>

            <div className="lg:block hidden">
                <ul className='flex gap-10'>
                    {linkMenu.map((item, index)=> (
                        <li key={index}>
                            {item.link}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='lg:flex items-center gap-4 hidden'>
                <button className="flex items-center gap-1">
                    < CiGlobe size={20}/>
                    English
                </button>

                <button 
                    type='button'
                    className='bg-black cursor-pointer text-white px-8 py-2 rounded-4xl'
                >
                    Repeat Loan
                </button>
            </div>

            {/* btn responsive */}
            <div className="lg:hidden">
                <button 
                    type="button"
                    onClick={()=> setOpenMenu(true)}
                >
                    < RiMenu3Line size={30} />
                </button>
            </div>
            
            {/* menu responsive */}
            {openMenu && (
                <div className="fixed inset-0 z-10 bg-black/85 backdrop-blur-sm  px-5 pt-10 transition delay-150 duration-300 ease-in-out">
                    <div className=" text-white">
                        <button 
                            type="button"
                            onClick={()=> setOpenMenu(false)}
                        >
                            < IoClose size={35} />
                        </button>
                    </div>
                    <ul className=' text-center mt-4 text-white'>
                        {linkMenu.map((item, index)=> (
                            <li 
                                key={index}
                                className="md:text-4xl text-2xl py-3"
                            >
                                {item.link}
                            </li>
                        ))}
                    </ul>

                    <div className='gap-4'>
                        <div className="flex justify-center mt-6">
                            <button className="flex items-center gap-1 md:text-3xl text-xl bg-gradient-to-r from-yellow-500 from-15% via-pink-400 to-85% to-purple-500 px-10 text-white py-1 rounded-4xl ">
                                < CiGlobe size={30}/>
                                English
                            </button>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button 
                                type='button'
                                className='flex items-center gap-1 md:text-3xl text-xl bg-gradient-to-r from-yellow-500 from-15% via-pink-400 to-85% to-purple-500 px-10 text-white py-1 rounded-4xl '
                            >
                                Repeat Loan
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
        </nav>
    )
}

export default Navbar
