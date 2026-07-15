import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import myattendtracker_img from "../assets/myattend_light.png"
import img1 from "../assets/iqsphotography-butterfly-10291275.jpg"
import img2 from "../assets/olliwittmann-europe-9753774.jpg"
import img3 from "../assets/terex12-camera-6906078.jpg"

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
      <div ref={projectsTextRef} className='bg-black border-t-2 w-screen h-[40vh] z-60 absolute flex items-center justify-center text-white'>
        <h1 className='projects-text font-[rf] text-[10vw]'>PROJECTS</h1>
      </div>
      <div ref={animDivRef} className='w-screen h-[140vh] relative flex flex-col overflow-hidden'>
        <div className="flex">
          <div className={`left-box bg-[#eea813] w-1/2 aspect-square z-50`}></div>
          <div className={`right-box bg-[#eea813] w-1/2 aspect-square z-50`}></div>
        </div>
        <div className='bottom-box bg-[#eea813] w-screen h-125 z-50'></div>

        <div className="project-card absolute hover:translate-y-[80px] group hover:cursor-pointer transition duration-500 hover:rounded-4xl bg-[#ECEBE7] w-[50vw] h-[50vh] left-1/2 top-[calc(50%+30px)] -translate-x-1/2 translate-y-1/3 z-30">
          <div className="relative w-full h-full">
            <div className="text-4xl w-full text-white py-5 px-4 absolute z-1 bg-white/20  group-hover:rounded-2xl transition duration-500">
              PROJECT-1
            </div>
             <div className="absolute group-hover:rounded-2xl transition duration-500"><img className="overflow-hidden transition duration-500 group-hover:rounded-2xl group-hover:scale-105" src={img1}></img></div>
          </div>
        </div>

        <div className="project-card top-[calc(50%-40px)] absolute hover:translate-y-[80px] group hover:cursor-pointer transition duration-500 hover:rounded-4xl bg-[#ECEBE7] w-[50vw] h-[50vh] left-1/2 -translate-x-1/2 translate-y-1/3 z-20">
          <div className="relative w-full h-full">
            <div className="text-4xl w-full text-white py-5 px-4 absolute z-1 bg-white/20  group-hover:rounded-2xl transition duration-500">
              PROJECT-2
            </div>
             <div className="absolute group-hover:rounded-2xl transition duration-500"><img className="overflow-hidden transition duration-500 group-hover:rounded-2xl group-hover:scale-105" src={img2}></img></div>
          </div>
        </div>

        <div className="project-card top-[calc(50%-110px)] absolute hover:translate-y-[80px] group hover:cursor-pointer transition duration-500 hover:rounded-4xl bg-[#ECEBE7] w-[50vw] h-[50vh] left-1/2 -translate-x-1/2 translate-y-1/3 z-10">
          <div className="relative w-full h-full">
            <div className="text-4xl w-full text-white py-5 px-4 absolute z-1 bg-white/20  group-hover:rounded-2xl transition duration-500">
              PROJECT-3
            </div>
             <div className="absolute group-hover:rounded-2xl transition duration-500"><img className="overflow-hidden transition duration-500 group-hover:rounded-2xl group-hover:scale-105" src={img3}></img></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects

