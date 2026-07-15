import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const animDivRef = useRef(null)
  const projectsTextRef = useRef(null)

  useGSAP(() => {
    const split = new SplitType(".projects-text", {
        types: "chars"
      });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animDivRef.current,
        start: "35% 80%",
        end: "25% 0%",
        scrub: 1,
      }
    })

    tl.to(".left-box", {
      rotation: -65,
      skewX: 15,
      translateX: -200,
      transformOrigin: "bottom right"
    }, 0)
    tl.to(".right-box", {
      rotation: 65,
      skewX: -15,
      translateX: 200,
      transformOrigin: "bottom left"
    }, 0)

    gsap.from(split.chars, {
      opacity: 0,
      y: -100,
      stagger: .1,
      scrollTrigger: {
        trigger: projectsTextRef.current,
        start: "top 80%", 
        toggleActions: "play none none none"
      }
    })

  })

  return (
    <div>
      <div ref={projectsTextRef} className='bg-black border-t-2 w-screen h-[40vh] z-2 absolute flex items-center justify-center text-white'>
        <h1 className='projects-text font-[rf] text-[10vw]'>PROJECTS</h1>
      </div>
      <div ref={animDivRef} className='w-screen h-[140vh] relative flex flex-col overflow-hidden'>
        <div className="flex">
          <div className={`left-box bg-[#eea813] w-1/2 aspect-square z-1`}></div>
          <div className={`right-box bg-[#eea813] w-1/2 aspect-square z-1`}></div>
        </div>
        <div className='bottom-box bg-[#eea813] w-screen h-125 z-1'></div>
        <div className="project-card absolute bg-[#ECEBE7] w-[50vw] h-[50vh] left-1/2 top-1/2 -translate-x-1/2 translate-y-1/3">
          <div className="text-4xl text-center">PROJECT 1</div>
        </div>
      </div>
    </div>
  )
}

export default Projects

