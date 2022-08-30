import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

export const HeaderSocials = () => {
  return (
    <div className="header__social">
      <a href="htttps://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="htttps://github.com">
        <FaGithub />
      </a>
      <a href="htttps://dribbble.com">
        <FiDribbble />
      </a>
    </div>
  );
};
