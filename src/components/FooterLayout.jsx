import React from "react";
import { FaCommentDots, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const FooterLayout = () => {

  window.onscroll = () => {
    const footer = document.querySelector('.footerMobile');
    if (window.pageYOffset >=150) {
      footer.classList.add("hide");
    } else {
      footer.classList.remove("hide");
    }
      
  };
  return (
    <div className="footerMobile">

      <div className="iconos_footer">
        <AiFillHome size={30} />
      </div>
      <div className="iconos_footer">
        <FaSearch size={27} color="#767676" />
      </div>
      <div className="iconos_footer">
        <FaCommentDots size={30} color="#767676" />
      </div>
      <div className="iconos_footer">
        <BsFillPersonFill size={30} color="#767676" />
      </div>
    </div>
  );
};

export default FooterLayout;
