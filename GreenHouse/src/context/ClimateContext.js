// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

export const ClimateContext = createContext();  //? creating context




export const useClimate = () => useContext(ClimateContext);  //? using context

export default function ClimateProvider( props) {  // can use props without curlies or {children} with curly
  const [climate, setClimate] = useState(50);
  const [humidity, setHumidity] = useState(40);
  return (

    <ClimateContext.Provider value={{ climate, setClimate }}>

      {props.children}
    </ClimateContext.Provider>

  );
}
