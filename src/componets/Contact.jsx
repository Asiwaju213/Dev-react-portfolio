import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";


export const Contact = () =>{
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">
                    Touch
                </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                    <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Email
                                </h4>
                                <a href="mailto:kalejaiyekunle4@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    Kalejaiyekunle4@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                    <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Phone
                                </h4>
                                <a href="tel:+2349019832190"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    +234 (901) 983 2190
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                    <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">
                                    Location
                                </h4>
                                <a href="mailto:kalejaiyekunle4@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    Lagos state, Nigeria
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">
                            Connect With Me
                        </h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/kalejaiye-marvellous">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/asiwaju_emprone?utm_source=qr&igsh=bHRuaTkxYm5oMXUy">
                                <Instagram />
                            </a>
                            <a href="https://x.com/Marvellous24397?s=08">
                                <Twitter />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61578390135119&mibextid=rS40aB7S9Ucbxw6v">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">
                        Send a Message
                    </h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:rind-2 focus:ring-primary"
                            placeholder="DevCode...." />
                        </div>

                         <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Your Email
                            </label>
                            <input type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:rind-2 focus:ring-primary"
                            placeholder="Email@gmail.com" />
                        </div>

                         <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:rind-2 focus:ring-primary resize-none"
                            placeholder="Your Message...." />
                        </div>

                        <button type="submit" 
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            Send Message
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}