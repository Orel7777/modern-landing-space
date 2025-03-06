
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Card3DProps {
  imageSrc: string;
  alt: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  imageSrc,
  alt
}) => {
  return (
    <CardContainer className="w-full max-w-md mx-auto">
      <CardBody className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative group/card border-2 border-[#1a56a7]/30 dark:border-white/[0.2] w-[320px] h-[440px] rounded-xl p-6 shadow-xl">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-[#1a56a7] dark:text-white text-center mb-2"
        >
          RE/MAX Unique
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#221F26] text-sm font-medium text-center mb-6"
        >
          ליחן ביטון - המומחית הנדל״ן שלך במודיעין
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={5}
          rotateZ={-3}
          className="w-full mt-2"
        >
          <img
            src={imageSrc}
            className="h-[260px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="div"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            <div className="flex flex-col items-center">
              <span className="text-[#1a56a7] font-semibold">050-5150002</span>
              <span className="text-[#403E43] text-xs mt-1">התקשרו עכשיו</span>
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#1a56a7] text-white text-xs font-bold hover:bg-[#15478c] transition-colors"
            onClick={() => window.open("https://wa.me/972505150002", "_blank")}
          >
            WhatsApp →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
