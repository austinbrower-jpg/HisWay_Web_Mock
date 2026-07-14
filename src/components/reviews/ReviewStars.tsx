import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewStarsProps {
  rating: number;
  className?: string;
  starClassName?: string;
}

export function ReviewStars({ rating, className, starClassName }: ReviewStarsProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating ? "fill-accent text-accent" : "fill-transparent text-line",
            starClassName,
          )}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
