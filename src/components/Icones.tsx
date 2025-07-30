import { motion } from "motion/react";
import { FaGoogle } from "react-icons/fa";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoMicrosoft } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiVercelLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiBmw } from "react-icons/si";

function Icones() {
    const icones = [
        {"icone": < FaGoogle className="min-w-20" />},
        {"icone":  < SiGooglecontaineroptimizedos className="min-w-20" />},
        {"icone": < SiTailwindcss className="min-w-20" />},
        {"icone": < FaReact className="min-w-20" />},
        {"icone": < TbBrandVite className="min-w-20" />},
        {"icone": < IoLogoMicrosoft className="min-w-20" />},
        {"icone": < FaCode className="min-w-20" />},
        {"icone": < FiGithub className="min-w-20" />},
        {"icone": < RiVercelLine className="min-w-20" />},
        {"icone": < RiNextjsLine className="min-w-20" />},
        {"icone": < SiBmw className="min-w-20" />},
        {"icone": < FaGoogle className="min-w-20" />},
        {"icone": < SiGooglecontaineroptimizedos className="min-w-20" />},
        {"icone": < SiTailwindcss className="min-w-20" />},
        {"icone": < FaReact className="min-w-20" />},
        {"icone": < TbBrandVite className="min-w-20" />},
        {"icone": < IoLogoMicrosoft className="min-w-20" />}
    ]
    return (
        <div className="overflow-hidden w-full">
            <motion.div 
                className="flex justify-between text-4xl text-gray-300"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
            >
                {[...icones, ...icones].map((item, index) => (
                    <div key={index} className="shrink-0">
                        {item.icone}
                    </div>
                ))}
            </motion.div>
        </div>
        
    )
}

export default Icones
