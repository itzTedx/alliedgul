import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex gap-3 justify-center text-2xl">
      <Link
        href="https://www.linkedin.com/in/allied-gulf-construction-services-a4477324a/"
        passHref
      >
        <a target="_blank" alt="Linkedin">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
            icon={faLinkedin}
            height={24}
            alt="Linkedin"
          />
        </a>
      </Link>
      <Link href="https://www.facebook.com/agcs.bahrain/" passHref>
        <a target="_blank" alt="Facebook">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
            icon={faSquareFacebook}
            height={24}
            alt="Facebook"
          />
        </a>
      </Link>
      <Link href="https://www.instagram.com/agcs.bahrain/?hl=en" passHref>
        <a target="_blank" alt="Instagram">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
            icon={faSquareInstagram}
            height={24}
            alt="Instagram"
          />
        </a>
      </Link>
      <Link href="https://twitter.com/agcsbahrain" passHref>
        <a target="_blank" alt="Twitter">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
            icon={faSquareTwitter}
            height={24}
            alt="Twitter"
          />
        </a>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCkb5kHLLC_Ntqt8p7ZIKliA"
        passHref
      >
        <a target="_blank" alt="Subscribe Now">
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-500 transition-all duration-300"
            icon={faSquareYoutube}
            height={24}
            alt="Subscribe Now"
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialMedia;
