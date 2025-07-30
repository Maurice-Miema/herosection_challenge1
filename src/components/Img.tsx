import { motion } from "framer-motion";

function Img() { 
    const images = [
        {"img": "/images/img1.png" },
        {"img": "/images/img2.png" },
        {"img": "/images/img3.png" },
        {"img": "/images/img4.png" },
        {"img": "/images/img5.png" },
        {"img": "/images/img6.png" },
        {"img": "/images/img7.png" },
        {"img": "/images/img8.png" },
    ]

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-2 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear",
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-2 min-w-60 w-60 rounded-md h-60 shrink-0"
                    >
                        <img
                            src={src.img}
                            alt=""
                            className="rounded-md  bg-center object-contain h-full w-full"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Img;
