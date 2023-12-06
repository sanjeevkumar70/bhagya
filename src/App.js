import './App.css';
import AboutPage from './page/about';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/footer';
import Header from './components/header';
import PrivacyPage from './page/privacy';
import ContactPage from './page/contact';
import 'bootstrap/dist/css/bootstrap.css';
import IndustryPage from './page/industry';
import LandingPage from './screen/landing-page';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { privacyPattern, indexPattern, aboutPattern, industryPattern, contactPattern } from './routes';

function App() {
  return (
    <>
      <div className="">
        <Router >
          
          <Header />
          <Routes>
            <Route
              exact
              path={indexPattern}
              element={
                <LandingPage />
              }
            />
          </Routes>


          <Routes>
            <Route
              exact
              path={aboutPattern}
              element={
                <AboutPage />
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path={industryPattern}
              element={
                <IndustryPage />
              }
            />
          </Routes>

          <Routes>
            <Route
              exact
              path={contactPattern}
              element={
                <ContactPage />
              }
            />
          </Routes>


          <Routes>
            <Route
              exact
              path={privacyPattern}
              element={
                <PrivacyPage />
              }
            />
          </Routes>

          <Footer />
        </Router>
      </div>

    </>
  );
}

export default App;
