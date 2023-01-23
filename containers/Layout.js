import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }){
    return (
        <div className="app__layout">
            <Navbar />
            <main className="app__layout-main">
                { children }
            </main>
            <Footer />
        </div>
    )
}