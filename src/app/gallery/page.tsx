import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("gallery-")
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-headline text-primary">
            Moments in Time
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of photographs and memories capturing key moments from a remarkable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2">
                 <DialogTitle asChild>
                    <VisuallyHidden>
                      <h2>{image.description}</h2>
                    </VisuallyHidden>
                  </DialogTitle>
                 <div className="relative aspect-video w-full">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-contain rounded-md"
                        data-ai-hint={image.imageHint}
                    />
                 </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
