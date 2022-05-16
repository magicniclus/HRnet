import "./style/style.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider} from '@mui/material/styles';
import { themeColor } from "./MUI/customColor";
import HomePage from "./pages/HomePage";
import CurrentEmployes from "./pages/CurrentEmployes";
import NotFound from "./pages/NotFound";

//Materiel Ui

/**
 * It returns a wrapper for the whole app. It is a component that provides a theme to all of its
 * children
 * @returns A function that returns a wrapper for the whole app. It is a component that provides a
 * theme to all of its children.
 */
function App() {

  /* A function that returns the following: */
  return (

    /* A wrapper for the whole app. It is a component that provides a theme to all of its children. */
    <ThemeProvider theme={themeColor}>
      <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />}/>
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
