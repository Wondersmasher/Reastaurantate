import React from "react";
import Section from "../generalcomponents/Section";
import story from "../../assets/images/story.png";
import TitleText from "../generalcomponents/TitleText";
import { icons } from "../../assets/datas";
import josephine from "../../assets/images/josefine.png";
const Story = () => {
  return (
    <Section bg="p">
      <div className="flex-1 flex flex-col text-ash max-w-7xl pt-6 gap-4">
        <div className="flex-1 flex flex-col md:flex-row gap-3">
          {icons.map((icon) => (
            <div
              key={icon.title}
              className="flex-1 flex gap-3 text-black border-[1px] border-yellow p-2 items-center"
            >
              {icon.icon}
              <div>
                <p className="text-md font-bold">{icon.title}</p>
                <p className="text-sm">{icon.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-black text-justify mt-8">
          <img
            src={story}
            alt="story_img"
            className="w-[100%] md:w-[45%] object-cover object-center lg:aspect-2/1 aspect-3/2"
          />
          <div className="flex-1 flex flex-col justify-center items-cente md:border-l-[2px] gap-2 md:px-8">
            <TitleText
              title="The Story"
              text={`Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.`}
            />
            <div className="flex flex-1 justify-center items-center gap-4">
              <TitleText
                title="1996"
                text={`Lorem Ipsum is that it has a more-or-less normal distribution`}
              />
              <TitleText
                title="2001"
                text={`Lorem Ipsum is that it has a more-or-less normal distribution`}
              />
            </div>
            <p>JOSEFINE</p>
            <img src={josephine} alt="Josefine Signature" className="w-24" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Story;
