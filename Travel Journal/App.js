import React from "react";
import data from "./data";
import Place from "./components/Places";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    
    const places = data.map(item => {
        return (
            <Place
                key={item.id}
                item={item}
            />
        );
    });

    // Navigation Bar and Places
    return (
        <div>
            <Navbar />
            {places}
            <Footer/>
        </div>
    );
}
