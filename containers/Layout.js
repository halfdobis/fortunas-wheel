import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children }){
    return (
        <>
            <Navbar />
            <main className="app__layout-main">
                { children }
            </main>
        </>
    )
}