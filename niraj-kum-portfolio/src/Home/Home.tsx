import Typewriter from "typewriter-effect";
import style from "../Home/Home.module.css";

export const Home = () => {
  return (
    <div className={`${style.desccontainer}`}>
      <div
        id="hero"
        className="w-full flex pl-48 py-5 pr-5 md:p-28 justify-content-start flex-col-reverse lg:flex-row mb-20 top-0 left-0"
      >
        <div className="lg:w-full top-0 left-0" data-aos="fade-right">
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
                  deleteSpeed: 0.1,
                  delay: 75,
                  cursor: "_"
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
