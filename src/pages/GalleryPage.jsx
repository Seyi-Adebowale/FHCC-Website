import PageHeader from '../components/layout/PageHeader';
import CTABanner from '../components/ui/CTABanner';
import SectionHeading from '../components/ui/SectionHeading';
import GalleryGrid from '../components/ui/GalleryGrid';
import { galleryImages, galleryCategories } from '../data/gallery';

export default function GalleryPage() {
  return (
    <div className="bg-warm-white">
      <PageHeader
        title="Photo Gallery"
        subtitle="A visual journey through the moments of joy, learning, and discovery at FHCC."
        backgroundImage="/images/ArtGallery.webp"
      />

      <section className="py-16 md:py-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Event Highlights" kicker="Our Events" align="center" />
          <div className="mt-12">
            <GalleryGrid images={galleryImages} categories={galleryCategories} />
          </div>
        </div>
      </section>

      <CTABanner heading="Interested in enrolling your child?" buttonText="Enrol Now" buttonLink="/enrol" variant="primary" />
    </div>
  );
}
