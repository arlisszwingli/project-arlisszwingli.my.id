import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import CircularText from "./components/CircularText/CircularText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' 
          borderColor='#444A29'
          hoverFillColor='#19222D'
        />
      </div>
      <div className="container mx-auto min-h-screen px-4 py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-screen">
          <div className="col-span-1 md:col-span-6 relative flex items-center justify-center min-h-[300px]">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="ARLISS*ZWINGLI*SITANGGANG*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute hidden md:block md:top-60 md:right-28"
            />
          </div>
          <div className="col-span-1 md:col-span-6">
            <div className="flex items-center h-full py-8 md:py-0">
              <div className="flex flex-col gap-6 w-full">
                <AnimatedContent 
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex flex-wrap items-center gap-2">
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText 
                    text="I'm Arliss Zwingli"
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-start text-white"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="Editor & Developer"
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
                  text="I'm Arliss Zwingli Sitanggang, an Information Systems student at Universitas Advent, focused on multimedia design. I have experience in graphic design and manage Winfonesia, an online magazine. I'm currently seeking an internship as an Editor to grow professionally."
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl mb-8 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
