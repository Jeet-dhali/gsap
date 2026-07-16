import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projectsData"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const animDivRef = useRef(null)
  const projectsTextRef = useRef(null)
  const projectsCardDivRef = useRef(null)
  const [openCard, setOpenCard] = useState<number | null>(null)
  

  useGSAP(() => {

    const split = new SplitType(".projects-text", {
        types: "chars"
      });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animDivRef.current,
        start: "35% 80%",
        end: "25% 0%",
        scrub: .5,
      }
    })

    tl.to(".left-box", {
      rotation: -65,
      skewX: 20,
      translateX: -250,
      transformOrigin: "bottom right"
    }, 0)
    tl.to(".right-box", {
      rotation: 65,
      skewX: -20,
      translateX: 250,
      transformOrigin: "bottom left"
    }, 0)

    tl.from(".project-card", {
      top: 40,
      stagger: .1,
    }, .1)

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
      <div ref={projectsTextRef} className='bg-black border-t-2 w-screen h-[40vh] z-60 absolute flex items-center justify-center text-white'>
        <h1 className='projects-text font-[rf] text-[10vw]'>PROJECTS</h1>
      </div>
      <div ref={animDivRef} className='w-screen h-[140vh] relative flex flex-col overflow-hidden'>
        <div className="flex">
          <div className={`left-box bg-[#eea813] w-1/2 aspect-square z-50`}></div>
          <div className={`right-box bg-[#eea813] w-1/2 aspect-square z-50`}></div>
        </div>
        <div className='bottom-box bg-[#eea813] w-screen h-125 z-50'></div>

        <div ref={projectsCardDivRef} className="project-cards absolute w-full h-full">
          {projects.map((project, idx) => (
            <ProjectCard
                key={idx}
                img={project.image}
                title={project.title}
                top={project.top}
                zIndex={project.zIndex}
                className={"project-card"}
                openCard={openCard}
                setOpenCard={setOpenCard}
                index={idx}
                y={project.y}
              />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Projects

