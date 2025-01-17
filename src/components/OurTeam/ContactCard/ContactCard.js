import React from 'react';
import styles from './ContactCard.module.css';


import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { FaLinkedinIn } from "react-icons/fa";
import {SiGmail } from "react-icons/si";
import {GrInstagram } from "react-icons/gr";




function ContactCard(props) {
  return (
    <div className={styles.contact_card}>
      <div className={styles.image}>
        <LazyLoadImage 
          alt={props.details.name} 
          src={props.details.image} 
          effect="blur"
          placeholderSrc="./images/profile-pic.png"
          height="100%"
          width="100%"
          className={styles.contact_card_img} 
        />
      </div>

      <div className={styles.contact_details}>
        <div className={styles.name}>{props.details.name}</div>
        <span className={styles.designation}>{props.details.designation}</span>
        <span className={styles.phone}>{props.details.phone}</span>
      </div>

      <div className={styles.icons}>
        {/* Use href for email and add target="_blank" */}
        <a href={`mailto:${props.details.mail}`} className={styles.icon} target="_blank" rel="noopener noreferrer">
          <SiGmail className={styles.iconTag} />
        </a>

        {/* Add the links for Facebook, Instagram, and LinkedIn with target="_blank" */}
        <a href={props.details.instagram} className={styles.icon} target="_blank" rel="noopener noreferrer">
          <GrInstagram className={styles.iconTag} />
        </a>
        <a href={props.details.linkedin} className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className={styles.iconTag} />
        </a>
      </div>
    </div>
  );
}
export default ContactCard;
