import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Leaf, Sparkles } from "lucide-react";

export default function LegacyPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-secondary/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-headline text-primary">
            Legacy &amp; Future Vision
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the enduring impact of his work and his aspirations for the generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Legacy Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-headline text-primary flex items-center gap-4">
              <Leaf className="h-8 w-8 text-accent"/>
              An Enduring Legacy
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Professor Adamu Abubakar Gwarzo's legacy is not merely etched in the brick and mortar of the universities he has built, but in the countless lives transformed through education. His pioneering efforts have democratized access to quality higher education, breaking down geographical and financial barriers for thousands of students across Africa.
              </p>
              <p>
                He has cultivated a culture of academic entrepreneurship, proving that private institutions can drive innovation and excellence while serving the public good. His work has created a ripple effect, fostering economic growth in host communities, creating jobs, and inspiring a new generation of leaders to invest in human capital.
              </p>
              <p>
                The core of his legacy is the unwavering belief in the potential of Africa's youth. By providing them with a platform to learn, grow, and compete globally, he has sown seeds that will blossom for decades, shaping a brighter, more prosperous future for the continent.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-headline text-primary flex items-center gap-4">
              <Eye className="h-8 w-8 text-accent"/>
              Vision for the Future
            </h2>
            <Card className="border-t-4 border-accent shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        Key Aspirations
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div>
                       <h4 className="font-bold text-primary">Digital Transformation</h4>
                       <p className="text-muted-foreground">To integrate cutting-edge technology and e-learning platforms across all institutions, preparing students for the future of work.</p>
                   </div>
                   <div>
                       <h4 className="font-bold text-primary">Strengthening Research &amp; Innovation</h4>
                       <p className="text-muted-foreground">To establish world-class research hubs that address local challenges and contribute to global knowledge.</p>
                   </div>
                   <div>
                       <h4 className="font-bold text-primary">Pan-African Collaboration</h4>
                       <p className="text-muted-foreground">To build a seamless network of African universities that facilitates student exchange, joint research, and shared resources.</p>
                   </div>
                    <div>
                       <h4 className="font-bold text-primary">Sustainable Development</h4>
                       <p className="text-muted-foreground">To champion education for sustainable development, empowering students to become stewards of their environment and communities.</p>
                   </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
