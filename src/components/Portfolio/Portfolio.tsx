import type React from "react";
import Frame from "../Frame/Frame";
import { MorphingText } from "../magicui/morphing-text";
import { SparklesText } from "../magicui/sparkles-text";
import MarqueeDemo from "../marquee-demo-box3";
import MarqueeDemoBox8 from "../marquee-demo-box8";
import MarqueeDemoBox10 from "../marquee-demo-box10";
import BentoDemoBox2 from "../bento-demo-box2"; // Import custom Bento for Box2
import BentoDemoBox3 from "../bento-demo-box3"; // Import custom Bento for Box3
import BentoDemoBox4 from "../bento-demo-box4"; // Import custom Bento for Box4
import BentoDemoBox7 from "../bento-demo-box7"; // Import custom Bento for Box7
import BentoDemoBox8 from "../bento-demo-box8"; // Import custom Bento for Box8
import BentoDemoBox9 from "../bento-demo-box9"; // Import custom Bento for Box9
import BentoDemoBox10 from "../bento-demo-box10"; // Import custom Bento for Box10
import styles from "./Portfolio.module.css";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <Frame
        boxes={[
          {
            className: "Box1",
            color: "#E2711D",
            width: "397px",
            height: "160px",
            children: (
              <MorphingText
                texts={["Hello", "Welcome", "to", "My Portfolio"]}
                className="text-white text-[24pt] lg:text-[28pt] h-full flex items-center justify-center"
              />
            ),
          },
          {
            className: "Box2",
            color: "#C9184A",
            width: "662px",
            height: "160px",
            children: (
              <div className="relative h-full w-full">
                {/* Bento Effect (Overlay) */}
                <div className="absolute inset-0 z-10">
                  <BentoDemoBox2 />
                </div>
              </div>
            ),
          },
          {
            className: "Box3",
            color: "#09A7A7",
            width: "733px",
            height: "160px",
            children: (
              <div className="relative h-full w-full">
                {/* Marquee (Background) */}
                <div className="flex items-center justify-center h-full">
                  <MarqueeDemo /> {/* Existing Marquee for Box3 */}
                </div>
                {/* Bento Effect (Overlay) */}
                <div className="absolute inset-0 z-10">
                  <BentoDemoBox3 />
                </div>
              </div>
            ),
          },
        ]}
      />
      <Frame
        boxes={[
          {
            className: "Box4",
            color: "#C9184A",
            width: "474px",
            height: "159px",
            children: (
              <div className="flex items-center justify-center h-full">
                <BentoDemoBox4 />
              </div>
            ),
          },
          {
            className: "Box5",
            color: "#09A7A7",
            width: "317.33px",
            height: "159px",
            image: "image1.png",
          },
          {
            className: "Box6",
            color: "#09A7A7",
            width: "539px",
            height: "159px",
            children: (
              <div className="flex flex-col items-center justify-center h-full w-full p-4">
                <SparklesText
                  text="Nikhil Rakhasiya"
                  colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                  className="text-2xl md:text-3xl font-bold text-white dark:text-white tracking-wide"
                />
                <span className="text-lg md:text-xl font-mono text-white dark:text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">
                  Computer Engineer
                </span>
              </div>
            ),
          },       
          {
            className: "Box7",
            color: "#E2711D",
            width: "429.67px",
            height: "159px",
            children: (
              <div className="flex items-center justify-center h-full">
                <BentoDemoBox7 />
              </div>
            ),
          },
        ]}
      />
      <Frame
        boxes={[
          {
            className: "Box8",
            color: "#09A7A7",
            width: "750px",
            height: "160px",
            children: (
              <div className="relative h-full w-full">
                {/* Marquee (Background) */}
                <div className="flex items-center justify-center h-full">
                  <MarqueeDemoBox8 /> {/* New Marquee for Box8 */}
                </div>
                {/* Bento Effect (Overlay) */}
                <div className="absolute inset-0 z-10">
                  <BentoDemoBox8 />
                </div>
              </div>
            ),
          },
          {
            className: "Box9",
            color: "#E2711D",
            width: "505px",
            height: "160px",
            children: (
              <div className="flex items-center justify-center h-full">
                <BentoDemoBox9 />
              </div>
            ),
          },
          {
            className: "Box10",
            color: "#C9184A",
            width: "537px",
            height: "160px",
            children: (
              <div className="relative h-full w-full">
                {/* Marquee (Background) */}
                {/* <div className="flex items-center justify-center h-full">
                  <MarqueeDemoBox10 /> 
                </div> */}
                {/* Bento Effect (Overlay) */}
                <div className="absolute inset-0 z-10">
                  <BentoDemoBox10 />
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Portfolio;