import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "../NavLinks/NavLinks";

const MobileMenu = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["hamburger-menu"]}>
        <button
          className={
            toggle
              ? `${styles.active} ${styles["hamburger"]} ${styles["hamburger--shelf"]}`
              : `${styles["hamburger"]} ${styles["hamburger--shelf"]}`
          }
          type="button"
          onClick={() => {
            SetToggle(!toggle);
            console.log(toggle);
          }}
        >
          <div className={styles.inner}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles["mobile-menu"]}
            initial={{ height: "0%" }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.5 }}
            exit={{ height: "0%" }}
          >
            <NavLinks delay={0.15} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
