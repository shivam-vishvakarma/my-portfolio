import { MousePointer2 } from "lucide-react";
import Button from "../atoms/Button";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-purple-400 mb-4">
                Frontend Developer
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Creating
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Digital Experiences
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Specializing in building exceptional digital experiences through
              modern web technologies and creative interactions.
            </p>

            <div className="flex space-x-6">
              <Button component="a" href="#projects" arrow="right">
                View Work
              </Button>
              <Button component="a" href="#contact" variant="outlined">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse" />
            <Image
              height={800}
              width={800}
              src="/profile_pic.jpg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-full p-4"
            />
          </div>
        </div>
      </div>

      <MousePointer2 className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 text-gray-400 animate-bounce" />
    </section>
  );
}
