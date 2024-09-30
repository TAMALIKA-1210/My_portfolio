import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <>
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Herosection/>
         </main>
    </>
    
  );
}
