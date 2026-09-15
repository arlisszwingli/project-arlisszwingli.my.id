import SplitText from "./components/SplitText/SplitText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#444A29"
          hoverFillColor="#19222D"
        />
      </div>

      <div className="relative container mx-auto min-h-screen px-4 flex items-start justify-center pt-44 sm:pt-32 md:pt-40 lg:pt-48">
        <div className="w-full max-w-4xl flex flex-col items-center text-center gap-6">
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
            <div className="flex flex-wrap items-center justify-center gap-2">
            </div>
          </AnimatedContent>

          <div className="w-full flex flex-col items-center gap-1 sm:gap-2">
            <SplitText
              text="Welcome to my world!"
              className="w-max whitespace-nowrap text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold text-center text-white leading-tight tracking-tight"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <SplitText
              text="Design. Edit. Create."
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-[#C6F10E] leading-tight tracking-tight pb-2 overflow-visible"
              delay={75}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}