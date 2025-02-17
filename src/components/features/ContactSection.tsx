import { Github, Linkedin, Mail } from "lucide-react";
import MainHeading from "../molecules/MainHeading";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <MainHeading primary="Let's Work Together" secondary="Get in Touch" />
        <Typography
          variant="card-title2"
          className="text-gray-400 mb-12 font-normal"
        >
          Have a project in mind? Let&apos;s discuss how we can work together to
          bring your ideas to life.
        </Typography>

        <div className="flex justify-center space-x-6">
          <Button component="a" href="mailto:shivamvishva552@gmail.com" variant="filled" arrow="right">
            Start a Conversation
          </Button>
        </div>

        <div className="mt-12 flex justify-center space-x-8">
          {[
            { icon: <Github className="w-6 h-6" />, href: "https://github.com/shivam-vishvakarma/" },
            { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/shivamvishva552/" },
            { icon: <Mail className="w-6 h-6" />, href: "mailto:shivamvishva552@gmail.com" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
