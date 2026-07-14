import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const Herosection = () => {
  
  const heroScreenDivRef = useRef(null);
  const aboutScreenDivRef = useRef(null);

  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutScreenDivRef.current,
        start: "top 0%",
        end: "+=1000",
        scrub: 1,
        pin: true,
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroScreenDivRef.current,
        start: "top 0%",
        end: "+=1000",
        scrub: 1,
        pin: true,
      }
    });
    tl.to(".f", {
      x: "-110vw",
      opacity: 0,
      duration: 1
    }, 0);

    tl.to(".r", {
      y: "-25vh",
      opacity: 0,
      duration: 0.8
    }, 0);

    tl.to(".o", {
      y: "-70vh",
      opacity: 0,
      duration: 1.4
    }, 0);

    tl.to(".n", {
      y: "-90vh",
      opacity: 0,
      duration: 0.6
    }, 0);

    tl.to(".t", {
      y: "-70vh",
      opacity: 0,
      duration: 1.3
    }, 0);

    tl.to(".e", {
      y: "-25vh",
      opacity: 0,
      duration: 0.9
    }, 0);

    tl.to(".n2", {
      y: "-45vh",
      opacity: 0,
      duration: 1.6
    }, 0);

    tl.to(".d", {
      x: "110vw",
      opacity: 0,
      duration: 1
    }, 0);

    // DEVELOPER

    tl.to(".l1", {
      x: "-110vw",
      opacity: 0,
      duration: 1.6
    }, 0);

    tl.to(".l2", {
      y: "45vh",
      opacity: 0,
      duration: 1.3
    }, 0);

    tl.to(".l3", {
      y: "80vh",
      opacity: 0,
      duration: 1.8
    }, 0);

    tl.to(".l4", {
      y: "100vh",
      opacity: 0,
      duration: 1.4
    }, 0);

    tl.to(".l5", {
      y: "85vh",
      opacity: 0,
      duration: 1.5
    }, 0);

    tl.to(".l6", {
      y: "80vh",
      opacity: 0,
      duration: 1.7
    }, 0);

    tl.to(".l7", {
      y: "110vh",
      opacity: 0,
      duration: 1.3
    }, 0);

    tl.to(".l8", {
      y: "65vh",
      opacity: 0,
      duration: 1.6
    }, 0);

    tl.to(".l9", {
      x: "110vw",
      opacity: 0,
      duration: 1.8
    }, 0);

    tl.to(".subheading", {
      opacity: 0,
      duration: 0.8
    }, 0);
  })

  return (
    <div className="overflow-x-hidden relative">
      <div ref={aboutScreenDivRef} className="absolute z-1" >
          <div className="font-[rf] text-4xl">
            about me
          </div>
      </div>
      <div ref={heroScreenDivRef} className="hero-screen-div absolute w-screen h-screen flex items-center justify-center bg-[#F5F4EB]">
        
        <div className="h-[80vh] w-[80vw] flex flex-col leading-[0.9] mt-30">
          <div className="front text-[12vw] font-[rf] text-left text-[#eea813] flex">
            <div className="f">F</div>
            <div className="r">R</div>
            <div className="o">O</div>
            <div className="n">N</div>
            <div className="t">T</div>
            <div className="e">E</div>
            <div className="n2">N</div>
            <div className="d">D</div>
          </div>
          <div className="text-[12vw] font-[rf] text-right text-[#eea813] flex justify-end">
            <div className="l1">D</div>
            <div className="l2">E</div>
            <div className="l3">V</div>
            <div className="l4">E</div>
            <div className="l5">L</div>
            <div className="l6">O</div>
            <div className="l7">P</div>
            <div className="l8">E</div>
            <div className="l9">R</div>
          </div>
          <div className="subheading text-[4vw] font-[md] text-left mt-5">
            Design and Create
          </div>
        </div>
      </div>
      <div className="h-500 w-full bg-black">

        </div>
    </div>
  )
}

export default Herosection