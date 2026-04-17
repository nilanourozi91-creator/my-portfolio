import Image from "next/image";
import Banner from "./component/other/banner";
import About from "./component/other/about";
import Skill from "./component/other/skill";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner/>
        <About/>
        <Skill/>
        
        <Image
          className="dark:invert"
          src="/"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

      </main>
    </div>
  );
}
