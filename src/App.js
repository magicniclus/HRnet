import "./style/style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeColor } from "./MUI/customColor";
import HomePage from "./pages/HomePage";
import CurrentEmployes from "./pages/CurrentEmployes";
import NotFound from "./pages/NotFound";

//Materiel Ui

function App() {

  return (

    <ThemeProvider theme={themeColor}>
      <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/create-employee" element={<HomePage />}/>
          <Route path="/employee-list" element={<CurrentEmployes />}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        {/* <Footer />   */}
      </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
