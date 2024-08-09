import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">START NOW?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your skills to the next level? Look
          no further than START NOW, the premier community dedicated
          to helping students achieve their goals and reach their full
          potential.
          <br />
          <br />
          As the founder and CEO of 'START NOW', we know firsthand the challenges
          that come with learning and growing in the industry.
          That&apos;s why I created START NOW &ndash; to provide new s
          with the resources and support they need to succeed.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques. But that&apos;s
          just the beginning. Our affordable courses are designed to give you
          the high-quality education you need to succeed in the industry,
          without breaking the bank.
          <br />
          <br />
          At 'START NOW', we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          But 'START NOW' is more than just a community &ndash; we&apos;re a
          family. Our supportive community of like-minded individuals is here
          to help you every step of the way, whether you&apos;re just starting
          out or looking to take your skills to the next level.
          <br />
          <br />
          With 'START NOW' by your side, there&apos;s nothing standing between you
          and your dream job. Our courses and community will provide you with
          the guidance, support, and motivation you need to unleash your full
          potential and become a skilled student.
          <br />
          <br />
          So what are you waiting for? Join the 'START NOW' family today and let&apos;s
          conquer the programming industry together! With our affordable
          courses, informative videos, and supportive community, the sky&apos;s
          the limit.
        </p>
        <br />
        <span className="text-[22px]">Hadeel habib , Nourman assad</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of START NOW
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
