import Image from "next/image";
import { quotes, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Quote as QuoteIcon } from "lucide-react";

export default function QuotesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-headline text-primary">
            Words of Wisdom &amp; Praise
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Inspirational quotes from Professor Gwarzo and heartfelt testimonials from those he has inspired.
          </p>
        </div>

        {/* Quotes Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-headline text-primary text-center mb-10">From the Professor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <Card key={index} className="flex flex-col justify-center items-center text-center p-8 bg-secondary/30 shadow-lg">
                <QuoteIcon className="h-10 w-10 text-accent mb-4" />
                <blockquote className="text-lg font-medium text-foreground italic">
                  "{quote.text}"
                </blockquote>
                <cite className="mt-4 not-italic font-headline text-primary font-semibold">— {quote.author}</cite>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-headline text-primary text-center mb-10">From the Community</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
              return (
                <Card key={testimonial.id} className="p-6 md:p-8 shadow-sm border-l-4 border-accent">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={80}
                          height={80}
                          className="rounded-full object-cover flex-shrink-0"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="flex-grow">
                        <blockquote className="text-muted-foreground leading-relaxed italic mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="text-right">
                          <p className="font-bold text-primary">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
