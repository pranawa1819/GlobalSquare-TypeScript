import { BrowserRouter, Routes, Route } from "react-router-dom";
import Person from './Components/person';
import { Country } from './Components/person';
import Header from "./Components/header";
import RQComp from "./Components/ReactQueryComp";
import CustomHooks from "./Components/customHooks";
import WeatherQuery from "./Components/weatherQuery";
import CustomCounter from "./Components/customCounter";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/registrationPage";
import YoutubeForm from "./Components/youTubeForm";
import UnRegister from "./Components/UnRegister";
import FormStateExample from "./Components/FormState";
import PostApi from "./Components/PostApi";
import PostQuery from "./Components/PostQuery";
import RegistrationQuery from "./Components/RegistrationMutationQuery";



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

        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>

        <Routes>
          <Route path="/registrationPage" element={<RegistrationPage />} />
        </Routes>
        
        <Routes>
          <Route path="/youTubeForm" element={<YoutubeForm/>} />
        </Routes>

        <Routes>
          <Route path="/UnRegister" element={<UnRegister/>} />
        </Routes>

        <Routes>
          <Route path="/FormState" element={<FormStateExample/>} />
        </Routes>

        <Routes>
          <Route path="/PostApi" element={<PostApi/>} />
        </Routes>

         <Routes>
          <Route path="/PostQuery" element={<PostQuery/>} />
        </Routes>
        
        <Routes>
          <Route path="/RegistrationMutationQuery" element={<RegistrationQuery/>} />
        </Routes>

      </BrowserRouter>
      

      
    </>
  )
}

export default App
