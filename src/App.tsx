import { Heart } from "lucide-react";
import gojo from "../public/cutegojo.png";
import weridkiss from "../public/weridkiss.webp";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function App() {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });
  const [yes, setYes] = useState(false)

  const moveButton = () => {
    const randomY = Math.random() * 300 - 150; 
    const randomX = Math.random() * 300 - 150;

    setRandomPosition({ x: randomX, y: randomY });
  };

  const heartAnimations = useMemo(() => {
    return [...Array(5)].map(() => ({
      randomStartY: Math.random() * 20 - 20,
      randomDelay: Math.random() * 1.5,
    }));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen bg-black/10 space-y-10">
      <h2 className="text-[#F04444] text-center text-5xl font-black">
        {
          !yes? 
          'Do you wanna be my valentine?'
          :
          ':)))))))))))))))))))))))))))'
        }
      </h2>
      <img src={gojo} className={`size-70 transition-all duration-1000 ${!yes? 'opacity-100 relative' : 'opacity-0 absolute'}`} alt="" />
      <img src={weridkiss} className={`size-70 transition-all duration-1000 ${!yes? 'opacity-0 absolute' : 'opacity-100 relative'}`} alt="" />
      <div className="flex gap-20">
        <button 
        onClick={() => setYes(!yes)}
        className="px-7 py-3 bg-[#F04444] text-white rounded-full cursor-pointer">
          Yes!
        </button>
        <motion.div
          animate={{ x: randomPosition.x, y: randomPosition.y }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          onMouseEnter={moveButton}
        >
          <button className="px-7 py-3 bg-gray-500 text-white rounded-full cursor-pointer">
            No
          </button>
        </motion.div>
      </div>

      <div className="flex gap-4 text-[#F04444]">
        {heartAnimations.map((item, i) => {

          return (
            <motion.div
              key={i}
              className="size-10"
              initial={{ y: item.randomStartY }}
              animate={{ y: [item.randomStartY, item.randomStartY + 20, item.randomStartY] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.randomDelay,
              }}
            >
              <Heart className="size-8" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
