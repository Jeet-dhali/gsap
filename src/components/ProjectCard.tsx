import { useRef, useEffect } from "react"
import gsap from "gsap"

const ProjectCard = ({img, className, title, top, zIndex, openCard, setOpenCard, index, y}) => {
    const projectsCardRef = useRef<HTMLDivElement | null>(null)
    const tl2 = useRef<GSAPTimeline | null>(null)
    const isOpen = openCard === index;

    useEffect(() => {
        const card = projectsCardRef.current!;
        const rect = card.getBoundingClientRect();

        const targetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
        const targetY = window.innerHeight / 2 - (rect.top + rect.height / 2);tl2.current = gsap.timeline();

        
        if (isOpen) {
            tl2.current.to(projectsCardRef.current, {
            y: -500,
            scale: .99,
            transformOrigin: "center center"
            }, 0)
            tl2.current.to(projectsCardRef.current!.parentElement, {
                zIndex: 100
            }, .1)
            tl2.current.to(projectsCardRef.current, {
                y: -10,
            }, .2)
            tl2.current.to(card, {
            x: `+=${targetX}`,
            y: `+=${targetY}`,
            scale: 1.5,
            }, .8)
        } else {
        tl2.current.to(projectsCardRef.current, {
        y: y,
        scale: .99,
        transformOrigin: "center center"
        }, 0)
        tl2.current.to(card, {
            scale: 1
        }, 0);
        tl2.current.to(projectsCardRef.current!.parentElement, {
            zIndex: zIndex
        }, 0)
        tl2.current.to(projectsCardRef.current, {
            y: 0,
        }, .2)
        }
    }, [isOpen])

        const handleClick = () => {
    
            setOpenCard(isOpen ? null : index);
            
        }
  return (
    <div style={{top, zIndex}} className={`${className} absolute hover:translate-y-[80px] group hover:cursor-pointer transition duration-500 hover:rounded-4xl  w-[50vw] h-[50vh] left-1/2 -translate-x-1/2 translate-y-1/3`}>
        <div ref={projectsCardRef} onClick={handleClick} className="relative w-full h-full">
            <div className="text-4xl w-full text-white py-5 px-4 absolute z-1 bg-white/20  group-hover:rounded-2xl transition duration-500">
                {title}
            </div>
            <div className="w-full h-full absolute group-hover:rounded-2xl transition duration-500">
                <img className="w-full h-full object-cover overflow-hidden transition duration-500 group-hover:rounded-2xl group-hover:scale-105" src={img}></img>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard