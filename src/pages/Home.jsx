import { About } from "../componets/About";
import { Contact } from "../componets/Contact";
import { Footer } from "../componets/Footer";
import { HeroSection } from "../componets/HeroSection";
import { Navbar } from "../componets/Navbar";
import { ProjectsSection } from "../componets/Projects";
import { Skills } from "../componets/Skills";
import { StarBackground } from "../componets/StarBackground";
import { ThemeToggle } from "../componets/ThemeToggle";


export const Home = () => {

    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* {theme toggle} */}
        <ThemeToggle />
        {/* {background effects} */}
        <StarBackground />

        {/* {navbar} */}
        <Navbar />

        {/* {main content} */}
        <main>  
            <HeroSection />
            <About />
            <Skills />
            <ProjectsSection />
            <Contact />
        </main>

        {/* {footer} */}
        <Footer />
    </div>
    );
};