import React from "react";
import Section from "./Section";
import Logo from "./Logo";
import SocialMediaIcons from "./SocialMediaIcons";
import Button from "./Button";

const Footer = () => {
  return (
    <Section>
      <footer className="flex-1 flex flex-col justify-center max-w-7xl text-ash gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row justify-between ">
          <Logo />
          <SocialMediaIcons />
        </div>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-2 justify-start">
            <p className="text-md border-y-[1px] border-y-yellow w-fit">
              CONTACT
            </p>
            <p className="text-sm">5 Rue Dalou, 75015 Paris</p>
            <p className="text-sm">
              <span className="text-yellow">Call</span> - +33 156 78 89 56
            </p>
            <p className="text-sm text-yellow">benoit@mail.com</p>
          </div>
          <div className=" flex flex-col gap-2 justify-start items-center flex-1">
            <p className="text-sm text-center">
              Join our mailing list for updates, <br />
              Get news & offers events.
            </p>
            <div className="flex justify-center">
              <input type="text" name="" id="" className="" />
              <Button text="Subscribe" />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <p className="text-md border-y-[1px] border-y-yellow w-fit">
              WORKING HOURS
            </p>
            <p className="text-sm">
              <span className="text-yellow">Mon - Fri</span> 7:00am - 6:00pm
            </p>
            <p className="text-sm">
              <span className="text-yellow">Sat</span> 7:30am - 6:00pm
            </p>
            <p className="text-sm">
              <span className="text-yellow">Sun</span> 8:00am - 6:00pm
            </p>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
