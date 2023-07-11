import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import useThemeContext from '../../context/ThemeContext';
import ThemeProvider from '../../context/ThemeContext';
import { ThemeContext } from '@emotion/react';
import { useTheme } from '@emotion/react';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const {themeName, setThemeName} = useTheme();

  return (
    <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;