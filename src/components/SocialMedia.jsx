import React from "react";
import facebook from "./../assets/icons/icons8-facebook.svg";
import twitter from "./../assets/icons/icons8-twitter-bird.svg";
import instagram from "./../assets/icons/icons8-instagram.svg";
import linkedin from "./../assets/icons/icons8-linkedin.svg";
import arrowDown from "./../assets/icons/arrow-down.svg";

export default function SocialMedia() {
  return (
    <div className="border-b-2 border-b-[#EDEDED]">
      <div className="container flex justify-between">
        <div className="flex gap-1">
          <img className="bg-gray-300 rounded-md" src={facebook} alt="facebook" />
          <img className="bg-gray-300 rounded-md" src={twitter} alt="twitter" />
          <img className="bg-gray-300 rounded-md" src={instagram} alt="instagram" />
          <img className="bg-gray-300 rounded-md" src={linkedin} alt="linkedin" />
        </div>
        <h4 className="text-[#707070] font-semibold text-[14px]">
          FREE SHIPPING THIS WEEK ORDER OVER - $55
        </h4>
        <div className="text-[#707070] flex gap-1">
          <div className="flex">
            <span>USD $</span>
            <img src={arrowDown} />
          </div>
          <div className="flex">
            <span>ENGLISH</span>
            <img src={arrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
