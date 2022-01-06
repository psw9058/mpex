import React from "react";
import styles from "./navbar.module.css";
import homeImg from "./home.png";

function Navbar() {
  return (
  <div className={styles.Navbar}>
    <div className={styles.container}></div>
      <div className={styles.navbar_contents}>
        <img className={styles.img} alt="home" src={homeImg} />
        <div className={styles.contentBox}>매칭신청</div>
        <div className={styles.contentBox}>공지사항</div>
        <div className={styles.contentBox}>커뮤니티</div>
        <input type="text" className={styles.searchBar} placeholder="" />
        <span className={styles.search__icon}>
          <i class="far fa-search"></i>
        </span>
      </div>
    <div className={styles.container}></div>
  </div>
  )
}

export default Navbar;