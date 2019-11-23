import React from "react";
import image1 from "../assets/social_people_1.png";
import image2 from "../assets/social_people_2.png";
import image3 from "../assets/social_people_3.png";
import image4 from "../assets/social_people_4.png";
import image5 from "../assets/social_facebook.png";
import image6 from "../assets/social_instagram.png";
import image7 from "../assets/social_linkedin.png";
import image8 from "../assets/social_twitter.png";

export default function friends() {
  return (
    <div className='friends'>
      <h4 className='friends__heading'>With Friends:</h4>
      <div className='friends__flex'>
        <img src={image1} alt='social' className='friends__img' />
        <img src={image2} alt='social' className='friends__img' />
        <img src={image3} alt='social' className='friends__img' />
        <img src={image4} alt='social' className='friends__img' />
      </div>
      <h4 className='friends__heading'>Social Media:</h4>
      <div className='friends__flex'>
        <img src={image5} alt='social' className='friends__img' />
        <img src={image6} alt='social' className='friends__img' />
        <img src={image7} alt='social' className='friends__img' />
        <img src={image8} alt='social' className='friends__img' />
      </div>
    </div>
  );
}
