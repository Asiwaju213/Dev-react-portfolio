import { ArrowRight, Github, Link } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Swep Project",
        Description: "This is a swep project built for my department",
        image: "/projects/img-5.png",
        tags: ["VS Code","React", "TailwindCSS"],
    },
    {
        id: 1,
        title: "Game",
        Description: "A Rock, Paper, Scissors game built just for learning and fun",
        image: "/projects/img-4.png",
        tags: ["VS Code","JavaScript", "Tailwind"],
    },
    {
        id: 1,
        Description: "An e-commerce clothing brand built to test my skills in HTML and CSS",
        image: "/projects/img-3.png",
        tags: ["VS Code","HTML","CSS"]
    },
    {
        id: 1,
        title: "Todo-List",
        Description: "A simple Todo-List page built to improve my knowledge in react.js",
        image: "/projects/img-6.png",
        tags: ["VS Code","React", "TailwindCSS"],
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tect-center">
                    Featured <span className="text-primary"> Projects
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects, Each project was carefully crafted
                    with attention to detail.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"> 
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 border text-sm font-meduim bg-primary/10 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.Description}
                            </p>
                            <div className="flex justify-betwen items-center">
                                    <div className="flex space-x-3">
                                        <a href="https://todo-list-sigma-woad.vercel.app/">
                                            <Link size={20} />
                                        </a>

                                    </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                </div>
            </div>
        </section>
    );
}