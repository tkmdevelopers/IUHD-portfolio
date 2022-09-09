import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div href={"https://www.twitter.com/iuhddevelopers"}>
      <BsTwitter />
    </div>
    <div href={"https://www.facebook.com/iuhddevelopers"}>
      <FaFacebookF />
    </div>
    <div href={"https://www.instagram.com/iuhddevelopers"}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
