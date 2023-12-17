"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "Home",
    href: "#",
    src: "https://i.ibb.co/LSp3CNq/IRO-LAGOS-66-1.jpg",
  },
  {
    title: "Shop",
    href: "#",
    src: "https://i.ibb.co/qrFDtQn/IRO-LAGOS-55-1.jpg",
  },
  {
    title: "About Us",
    href: "#",
    src: "https://i.ibb.co/pbkDQgg/image-7.jpg",
  },
  {
    title: "Lookbook",
    href: "#",
    src: "https://i.ibb.co/phXj4Tw/image-6.jpg",
  },
  {
    title: "Contact",
    href: "#",
    src: "https://i.ibb.co/T1Q27db/image-3.jpg",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
