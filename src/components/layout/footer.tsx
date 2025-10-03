import { BookHeart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookHeart className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg">
              Tribute to AAG
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AAG Foundation. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed with respect and admiration.
          </p>
        </div>
      </div>
    </footer>
  );
}
