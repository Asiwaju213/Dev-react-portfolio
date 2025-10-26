import { ArrowRight, Github, GithubIcon, Link } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Profile Card",
        Description: "My personal profile card built with HTML, CSS and JavaScript. It contain more information about myself",
        image: "/projects/img-8.png",
        tags: ["VS Code","HTML", "CSS", "JavaScript"],
        link: "https://dev-profile-card-three.vercel.app/",
        github: "https://github.com/Asiwaju213"
    },
    {
        id: 1,
        title: "Contact us page",
        Description: "A simple contact us page built with HTML, CSS and JavaScript where users can move to the next page to check about us after a sucessful form validation",
        image: "/projects/img-9.png",
        tags: ["VS Code","JavaScript", "HTML", "CSS"],
        link: "https://devcode-contact-page.netlify.app/",
        github: "https://github.com/Asiwaju213"
    },
    {
        id: 1,
        title: "Ticketing System",
        Description: "A simple ticketing system that allow users to create, update and delete tickets",
        image: "/projects/img-10.png",
        tags: ["VS Code","TypeScript","TailwindCSS", "React"],
        link: "https://dev-ticketing-system.netlify.app/",
        github: "https://github.com/Asiwaju213"
    },
    {
        id: 1,
        title: "Todo-List",
        Description: "A simple todo list application that allow users to add, delete and mark tasks as completed",
        image: "/projects/img-6.png",
        tags: ["VS Code","React", "JavaScript", "TailwindCSS"],
        link: "https://todo-list-sigma-woad.vercel.app/",
        github: "https://github.com/Asiwaju213"
    },
    {
        id: 1,
        title: "Weather App",
        Description: "A weather application that provides real-time weather information for any location",
        image: "/projects/project-7.png",
        tags: ["VS Code","HTML","JavaScript", "TailwindCSS"],
        link: "https://dev-weather-app-x2sa.vercel.app/",
        github: "https://github.com/Asiwaju213"
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
                            <hr />
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.Description}
                            </p>
                            <div className="flex justify-betwen items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <Link size={20} />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github size={20} />
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