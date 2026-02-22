import { HeroSection } from '@/components/sections/hero'
import { ProfileCard } from '@/components/sections/profile-card'
import { AboutSection } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience'
import { TechStackSection } from '@/components/sections/tech-stack'
import { CertificationsSection } from '@/components/sections/certifications'
import { ProjectsSection } from '@/components/sections/projects'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { GallerySection } from '@/components/sections/gallery'
import { SocialLinksSection } from '@/components/sections/social-links'
import { QuickInfoSection } from '@/components/sections/quick-info'
import { CurrentlySection } from '@/components/sections/currently'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1: Hero + Profile Card */}
        <HeroSection />
        <ProfileCard />

        {/* Row 2-3: About & Tech Stack (left) + Experience (right, tall) */}
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />

        {/* Row 4: Projects */}
        <ProjectsSection />

        {/* Row 5: Testimonials + Certifications */}
        <TestimonialsSection />
        <CertificationsSection />

        {/* Row 6: Social Links + Quick Info + Currently */}
        <SocialLinksSection />
        <QuickInfoSection />
        <CurrentlySection />

        {/* Row 7: Gallery */}
        <GallerySection />
      </div>
    </div>
  )
}
