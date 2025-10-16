import { BrowserRouter, Routes, Route } from "react-router-dom";
import Person from './Components/person';
import { Country } from './Components/person';
import Header from "./Components/header";
import RQComp from "./Components/ReactQueryComp";
import CustomHooks from "./Components/customHooks";
import WeatherQuery from "./Components/weatherQuery";
import CustomCounter from "./Components/customCounter";



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/person" element={<Person
            name=''
            email="pranawakc@187gmail.com"
            age={20}
            isMarried={false}
            friends={["Sita", "Gita", "Shreya", "Rita"]}
            country={Country.Brazil} />} />
        </Routes>

        <Routes>
          <Route path="/ReactQueryComp" element={<RQComp />} />
        </Routes>

        <Routes>
          <Route path="/customHooks" element={<CustomHooks />} />
        </Routes>

        <Routes>
          <Route path="/weatherQuery" element={<WeatherQuery />} />
        </Routes>

        <Routes>
          <Route path="/customCounter" element={<CustomCounter />} />
        </Routes>
      </BrowserRouter>
      

      
    </>
  )
}

export default App
