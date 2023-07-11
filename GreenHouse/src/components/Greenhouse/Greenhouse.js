import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useTheme } from "../../context/ThemeContext";
import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useState } from "react";
// import "./LightSwitch.css";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  const [image, setImage] = useState(dayImage);

  const toggleImage = (e) => {
    e.preventDefault();
    if (e.target.className === "on") {
      setThemeName("day");
      setImage(dayImage);
    } else {
      setThemeName("night");
      setImage(nightImage);
    }
  };

  return (
    <section onClick={toggleImage}>
      <LightSwitch />
      <img className="greenhouse-img" src={image} alt="greenhouse" />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
