import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  return (
    <div>
      <></>
      <header id="header-cont" className="header-container">
        <nav id="navbar-cont" className="navbar-container nav-menu">
          <ul>
            <li>
              <a
                onMouseEnter={() => {
                  setShowHome(true);
                }}
                onMouseLeave={() => {
                  setShowHome(false);
                }}
                href="#hero"
                className="nav-link"
              >
                <IoHomeOutline />
                {showHome && <span>Home</span>}
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowAbout(true);
                }}
                onMouseLeave={() => {
                  setShowAbout(false);
                }}
                href="#about"
                className="nav-link"
              >
                <LuUser2 />
                {showAbout && <span>About</span>}
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowExperience(true);
                }}
                onMouseLeave={() => {
                  setShowExperience(false);
                }}
                href="#experience"
                className="nav-link"
              >
                <BsBriefcase />
                {showExperience && <span>Experience</span>}
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowProjects(true);
                }}
                onMouseLeave={() => {
                  setShowProjects(false);
                }}
                href="#projects"
                className="nav-link"
              >
                <GrProjects />
                {showProjects && <span>Projects</span>}
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowAchievement(true);
                }}
                onMouseLeave={() => {
                  setShowAchievement(false);
                }}
                href="#achievements"
                className="nav-link"
              >
                <FaTrophy />
                {showAchievement && <span>Achievements</span>}
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => {
                  setShowEducation(true);
                }}
                onMouseLeave={() => {
                  setShowEducation(false);
                }}
                href="#education"
                className="nav-link"
              >
                <IoSchool />
                {showEducation && <span>Education</span>}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
