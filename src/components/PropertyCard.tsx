
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  details: string;
  isSold?: boolean;
  isExclusive?: boolean;
}

export const PropertyCard = ({ image, title, price, location, details, isSold = false, isExclusive = false }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg animate-fade-up relative">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ${isSold ? 'opacity-70' : ''}`}
          />
        </AspectRatio>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-primary font-medium">{price}</span>
        </div>
        {isExclusive && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
              בלעדיות
            </Badge>
          </div>
        )}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#ea384c]/60 text-white px-6 py-2 rounded-full text-xl font-bold transform -rotate-12">
              הושכר
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-sm text-gray-500">{details}</p>
      </div>
    </Card>
  );
};
