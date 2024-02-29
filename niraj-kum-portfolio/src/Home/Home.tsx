import Typewriter from "typewriter-effect";
import style from "../Home/Home.module.css";
import profilepic from "../images/profile/Niraj_Kumar.jpeg";
import { BsTwitterX } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar';
import resume from '../resume/resume.pdf'

export const Home = () => {
  const [isFileDownloading, setIsFileDownloading] = useState(false);
  const [progress, setProgress] = useState(0)

  return (
    <div>
    <LoadingBar progress={progress} onLoaderFinished={() => {
      setProgress(0);
    }}  color='red' />
    <div className={`${style.desccontainer}`}>
      <div id="hero" className={`${style.description}`}>
        <div className="top-0 left-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl py-2 montserrat-100 text-white">
            Hi👋,
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-4xl py-2 montserrat-100 text-white">
            My Name is
          </h1>
          <h1
            className={`text-4xl md:text-5xl lg:text-5xl py-2 font-semibold montserrat-100 text-white`}
          >
            Niraj Kumar
          </h1>
          <div className={`${style.typewritercontainer}`}>
            <h1 className="text-4xl md:text-5xl montserrat-100 lg:text-5xl py-2 text-white mr-4">
              I&apos;m a
            </h1>
            <h1
              className={`text-4xl md:text-5xl lg:text-5xl py-2 font-semibold montserrat-400 ${style.textGardient}`}
            >
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer", "Backend Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 0.3,
                  delay: 60,
                  cursor: "_",
                }}
              />
            </h1>
          </div>
          <div className={`${style.sociallinks}`}>
            <a
              href="https://twitter.com/NirajKumar0727"
              className={`${style.twittericon}`}
            >
              <BsTwitterX size={"24px"} />
            </a>
            <a
              href="https://www.linkedin.com/in/niraj-kumar-a7502b141/"
              className={`${style.linkedinicon}`}
            >
              <FaLinkedin size={"24px"} />
            </a>
            <a
              href="https://github.com/Niraj-Kum"
              className={`${style.githubicon}`}
            >
              <SiGithub size={"24px"} />
            </a>
          </div>
          {/* <button className={`btn btn-outline ${style.downloadbtncolor}`}>
            <AiOutlineCloudDownload size="24px" />
            Download Button
          </button> */}
          <a href={resume} className={`${style.downloadresumebtn}`} onClick={()=>{
            setIsFileDownloading(true);
            setProgress(100);
          }} onLoadStart={()=>{setProgress(0)}} download={true}>
            <AiOutlineCloudDownload size="24px" />
            Download Button
          </a>
          {/* {isFileDownloading && (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          )} */}
          {/* <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing"
              style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
              Download Resume
          </Button> */}
        </div>
      </div>
      <img src={profilepic} alt="Loading.." className={`${style.propic}`} />
    </div>
    </div>
  );
};
