import Navbar from "./Navbar"
import { motion } from "motion/react";
import Img from "./Img";
import { TiStar } from "react-icons/ti";
import Icones from "./Icones";

function Hero() {
    return (
        <>
            <section>
                < Navbar />

                <div className="lg:pt-4 md:pt-8 pt-5">
                    <motion.h1 
                        className="lg:text-5xl md:text-4xl text-3xl lg:flex lg:justify-center text-center font-medium"
                        animate={{ opacity: 0, y: 80}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{ once: false, amount: 0.3}}
                        transition={{ duration: 0.8, ease: "easeOut"}}
                    >
                        Unclock your financial freedom: 
                    </motion.h1>
                    <h1 className="lg:flex lg:justify-center text-center md:text-4xl text-2xl pt-4 font-medium bg-gradient-to-r from-yellow-500 from-25% via-pink-400 to-70% to-purple-500 bg-clip-text text-transparent">Get your first loan for free !</h1>
                    <p className="pt-4 lg:flex lg:justify-center items-center text-center font-semibold text-sm md:px-0 px-4">
                        <strong className="mr-2 md:text-xl text-md">
                            0% interest
                        </strong>
                        if you pay back on the first payment date
                    </p>

                    <div className="my-4">
                        <div className="flex justify-center">
                            <button 
                                type="button"
                                className="md:py-2 md:px-10 py-1 px-8 rounded-4xl bg-gradient-to-r from-yellow-500 from-15% via-pink-400 to-85% to-purple-500 text-white font-semibold cursor-pointer"
                            >
                                Get first loan
                            </button>
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-2 lg:py-0 py-2">
                            <div>
                                <h1 className="font-semibold">Overall client rating 4.95</h1>
                            </div>
                            <div className="flex gap-1 text-amber-400 text-xl">
                                < TiStar />
                                < TiStar />
                                < TiStar />
                                < TiStar />
                                < TiStar />
                            </div>
                        </div>
                    </div>

                    {/* les icones */}
                    <div className="lg:mt-8">
                        < Icones />
                    </div>

                    {/* les images */}
                    <div className="lg:mt-2 mt-4">
                        < Img />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
