import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute w-full h-screen">
        <Navbar />

        {/* Hero */}
        <div className="flex flex-col items-center justify-center w-full pt-8">
          <h1 className="font-bold text-3xl">Welcome to <span className="bg-linear-to-tr from-[#3D90D7] to-[#B5FCCD] bg-clip-text text-2xl text-transparent">HEALTHLENS</span></h1>
          
        </div>
      </div>
    </>
  );
}
