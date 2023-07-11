
import { useTheme } from "../../context/ThemeContext";
import "./LightSwitch.css" 

function LightSwitch() {

  // const { themeName, setThemeName } = useTheme();

  // const switchOn = (e) => {
  //   setThemeName("day");
  // };

  // const switchOff = (e) => {
  //   setThemeName("night");
  // }; 

  return (
    <div className="light-switch day">
      <div className="on" >DAY</div>
      <div className="off"  >NIGHT</div>
    </div>
  );
}

export default LightSwitch;
