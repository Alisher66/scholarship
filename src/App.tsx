import React from 'react';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Scholarships from "./components/scholarships/Scholarships";
import Media from "./components/media/Media";
import ScholarshipInfo from "./components/infoContent/ScholarshipInfo";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <About/>
            {/*<Scholarships />*/}
            {/*<Media />*/}
            <ScholarshipInfo />
            <Footer />
        </>
    );
}

export default App;
