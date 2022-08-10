import React, { useState } from "react";
import "./Carousel.css";
import { image } from "./source.js";
import { motion, useCycle, Variants } from "framer-motion";
import MenuToggler from "./MenuToggler";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel({ slide }) {
  const [currImg, setCurrImg] = useState(3);
  const [Lrotate, LsetRotate] = useState(false);
  const [Rrotate, RsetRotate] = useState(false);
  const [Lscale, LsetScale] = useState(false);
  const [Rscale, RsetScale] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);

  function prevSlide() {
    setCurrImg(currImg === 0 ? image.length - 1 : currImg - 1);
  }

  function nextSlide() {
    setCurrImg(currImg === image.length - 1 ? 0 : currImg + 1);
  }

  const sidebarVariants: Variants = {
    open: {
      
      clipPath: `circle(1200px at 100px 100px)`,
      transition: {
        duration: 0.4
      }
    },
    closed: {
      opacity: 1,
      clipPath: `circle(0px at 0px 0px)`,
      transition: {
        duration: 2,
        delay: 0.2
      }
    }
  };

  return (
    <div className="bossDiv">
      <div className="jugad">
        <MenuToggler className="toggler" toggle={() => toggleOpen()} />
      </div>
      <motion.div
        className={
          image[currImg].subtitle - 1 === currImg
            ? "carousel active"
            : "carousel"
        }
        style={{ backgroundImage: `url(${image[currImg].img})` }}
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="left" onClick={prevSlide}>
          <motion.div
            className="arrowleft"
            animate={{
              rotate: Lrotate ? [0, 180, 180, 0] : 360,

              scale: Lscale ? [1, 4, 4, 1] : 1
            }}
            transition={{ duration: 1 }}
            onClick={() => {
              return [LsetRotate(!Lrotate), LsetScale(!Lscale)];
            }}
          >
            <ArrowBackIosIcon />
          </motion.div>
        </motion.div>
        <div className="center"></div>

        <div className="right" onClick={nextSlide}>
          <motion.div
            className="arrowright"
            animate={{
              rotate: Rrotate ? [0, 180, 180, 0] : 360,

              scale: Rscale ? [1, 4, 4, 1] : 1
            }}
            transition={{ duration: 1 }}
            onClick={() => {
              return [RsetRotate(!Rrotate), RsetScale(!Rscale)];
            }}
          >
            <ArrowForwardIosIcon />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Carousel;
