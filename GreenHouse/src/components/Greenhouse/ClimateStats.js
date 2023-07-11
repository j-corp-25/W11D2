import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
      const {climate, setClimate, humidity, setHumidity} = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climate}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;