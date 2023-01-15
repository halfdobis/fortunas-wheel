import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }){
    return (
        <>
            <Navbar />
            <main className="app__layout-main">
                { children }
            </main>
            <Footer />
        </>
    )
}