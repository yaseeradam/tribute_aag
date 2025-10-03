import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const values = [
  "Integrity and Ethics",
  "Excellence in Education",
  "Innovation and Adaptability",
  "Community Empowerment",
  "Global Collaboration"
];

const PageHeader = () => (
  <div className="text-center mb-12 md:mb-20">
    <h1 className="text-4xl md:text-6xl font-headline text-primary">
      The Man Behind the Vision
    </h1>
    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
      An exploration of the life, principles, and journey of a transformative leader in education.
    </p>
  </div>
);

const BiographySection = () => {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-portrait");

  return (
    <section className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-6">Biography</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Professor Adamu Abubakar Gwarzo, a distinguished academic and astute entrepreneur, is a prominent figure in the African educational landscape. Born with a passion for knowledge and a drive for change, his journey began in Gwarzo, Kano State, Nigeria. From humble beginnings, he cultivated a vision that would eventually reshape higher education across the continent.
            </p>
            <p>
              His academic pursuits took him through various esteemed institutions, where he honed his expertise and developed a unique perspective on the challenges and opportunities within Africa's education sector. Professor Gwarzo's career is marked by a relentless pursuit of excellence and a commitment to creating accessible, high-quality learning environments.
            </p>
             <p>
              As a visionary founder, he has established several universities, each serving as a beacon of hope and a center for intellectual growth. His leadership extends beyond his institutions, as he actively participates in continental bodies to advocate for the advancement of private education.
            </p>
          </div>
        </div>
        {aboutImage && (
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ValuesAndVisionSection = () => (
  <section className="mb-16 md:mb-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <Card className="border-t-4 border-accent">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">The principles that guide every decision and action.</p>
          <ul className="space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="font-medium">{value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="border-t-4 border-primary">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">Our Vision</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
           <p>
            To build a network of world-class educational institutions that are accessible, affordable, and relevant to the needs of the 21st-century economy.
          </p>
          <p>
            We envision a future where every young African has the opportunity to receive a quality education that empowers them to become leaders, innovators, and agents of positive change in their communities and beyond.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const CareerJourneySection = () => (
  <section>
    <h2 className="text-3xl md:text-4xl font-headline text-primary text-center mb-8">Career Journey</h2>
    <div className="relative border-l-2 border-accent/50 pl-8 md:pl-12 space-y-12">
      <div className="absolute -left-3.5 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
      <div>
        <h3 className="text-xl font-headline font-bold text-primary">Early Career &amp; Academic Foundations</h3>
        <p className="text-muted-foreground mt-2">Began his career in academia, quickly gaining recognition for his insightful research and dedication to teaching. Laid the groundwork for his future endeavors by deeply understanding the educational system.</p>
      </div>
      <div>
        <h3 className="text-xl font-headline font-bold text-primary">First Entrepreneurial Ventures in Education</h3>
        <p className="text-muted-foreground mt-2">Transitioned from theory to practice by establishing his first educational projects, focusing on filling critical gaps in the existing framework and providing quality learning opportunities.</p>
      </div>
       <div className="relative">
        <div className="absolute -left-[54px] md:-left-[70px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
        <h3 className="text-xl font-headline font-bold text-primary">Founding of MAAUN, Niger</h3>
        <p className="text-muted-foreground mt-2">A landmark achievement, creating the first English-speaking university in Niger Republic, which quickly became a hub for students across West Africa seeking international-standard education.</p>
      </div>
      <div>
        <h3 className="text-xl font-headline font-bold text-primary">Expansion and Continental Leadership</h3>
        <p className="text-muted-foreground mt-2">Expanded his vision with new universities in Nigeria and beyond, while taking on leadership roles in continental organizations to advocate for private education and foster collaboration.</p>
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <PageHeader />
        <BiographySection />
        <ValuesAndVisionSection />
        <CareerJourneySection />
      </div>
    </div>
  );
}
