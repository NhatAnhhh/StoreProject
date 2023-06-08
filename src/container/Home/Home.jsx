import { Navbar } from "components/Navbar";
import { ContentTop } from "components/ContentTop";
import React from "react";
import { IndexContent } from "components/IndexContet";
import { Footer } from "components/Footer";

const Home = () => {
    return <>
        <Navbar />
        <ContentTop />
        <IndexContent />
        <Footer />
    </>
}
export default Home