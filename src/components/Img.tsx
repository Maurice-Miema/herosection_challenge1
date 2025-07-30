import { motion } from "framer-motion";

function Img() { 
    const images = [
        {"img": "./src/assets/img1.png" },
        {"img": "./src/assets/img2.png" },
        {"img": "./src/assets/img3.png" },
        {"img": "./src/assets/img4.png" },
        {"img": "./src/assets/img5.png" },
        {"img": "./src/assets/img6.png" },
        {"img": "./src/assets/img7.png" },
        {"img": "./src/assets/img8.png" },
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
