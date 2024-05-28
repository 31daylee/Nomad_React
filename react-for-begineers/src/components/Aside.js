import React, { useEffect, useRef, useState } from "react";
import styles from "../css/Aside.module.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Aside = ({ width = 280, genres }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    if (side.current && !side.current.contains(e.target)) {
      setX(width);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  // Logo 클릭 시 토글 메뉴
  const handleLogoClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.aside}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px)`,
        }}
      >
        <button onClick={toggleMenu} className={styles.button}>
          {isOpen ? (
            <span>X</span>
          ) : (
            <img
              src={logo}
              alt="contact open button"
              className={styles.openBtn}
              onClick={handleLogoClick} // Logo 클릭 시 토글 메뉴
            />
          )}
        </button>

        <div className={styles.content}>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>
                <Link to={`/movie/${genre.toLowerCase()}`}>{genre}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
