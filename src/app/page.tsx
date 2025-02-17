import { MouseGradient } from "@/components/atoms/MouseGradient";
import Header from "@/components/features/Header";
import HomeSection from "@/components/features/HomeSection";
import ProjectSection from "@/components/features/ProjectSection";
import SkillSection from "@/components/features/SkillSection";
import ExperienceSection from "@/components/features/ExperienceSection";
// import AwardSection from "@/components/features/AwardSection";
// import TestimonialSection from "@/components/features/TestimonialSection";
// import BlogSection from "@/components/features/BlogSection";
import CareerTimelineSection from "@/components/features/CareerTimelineSection";
import ContactSection from "@/components/features/ContactSection";
import {
//   awards,
//   blogPosts,
//   testimonials,
  experiences,
  projects,
  skills,
  timeLineData,
} from "@/lib/services/data.service";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MouseGradient />
      <Header />
      <HomeSection />
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      {/* <AwardSection awards={awards} />
      <TestimonialSection testimonials={testimonials} />
      <BlogSection blogs={blogPosts} /> */}
      <CareerTimelineSection timeLine={timeLineData} />
      <ContactSection />
    </div>
  );
}
