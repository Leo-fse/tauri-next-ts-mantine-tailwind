import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";

function App() {

  return (
    <div>
     <h1 className="text-3xl font-bold underline">Hello</h1>
    </div>
  );
}

export default App;
