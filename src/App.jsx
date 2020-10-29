import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContenxt";

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}
