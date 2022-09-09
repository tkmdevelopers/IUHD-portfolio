import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper/";
import { images } from "../../constants";
import Image from "next/dist/client/image";
import { useAnimation } from "framer-motion";

import { useEffect, useState } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const imageArray = [
  images.profile,
  images.profile1,
  images.profile2,
  images.profile3,
  images.profile4,
  images.profile5,
];
const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const Header = () => {
  const [count, setCount] = useState(0);

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = imageArray[count % imageArray.length];

  return (
    <>
      <div className="app__header app__flex" style={{ marginTop: 60 }}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
          style={{ marginRight: 60 }}
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 10 }}>
                <p className="p-text">Salam !🖐 We're </p>
                <h1 className="head-text">
                  Programmers of <span className="app__">IUHD</span>
                </h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web, Mobile dizaýn</p>
              <p className="p-text">Android applikasiýalar</p>
              <p className="p-text">Graphic dizaýn</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <motion.div
            initial={"hidden"}
            animate={animationControls}
            variants={animationVariants}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Image
              src={image}
              alt="profile_bg"
              width={800}
              height={800}
              placeholder="blur"
              priority
              onLoad={() => setLoaded(true)}
            />
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="overlay_circle"
            >
              <Image src={images.circle} alt="profile_circle" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <Image src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(Header, "baş sahypa", "baş_sahypa");
