import MacbookLoader from "./MacbookLoader";
import PlanetLoader from "./PlanetLoader";
export const Footer = () => {
  return <footer className="py-4 bg-[#F1F0FB] text-[#403E43]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 bg-fuchsia-100">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1 flex justify-start" /> {/* Spacer */}
            <div className="text-center flex-1 flex items-center justify-center gap-2">
              <MacbookLoader />
              <img src="/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png" alt="Orel Bukris Logo" className="w-12 h-12 object-contain" />
              <PlanetLoader />
            </div>
            <div className="flex-1 flex justify-end" />
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} כל הזכויות שמורות ל
              <a href="https://orel-bukris-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#403E43] hover:text-purple-400 transition-colors mx-1">
                אוראל בוקריס
              </a>
              <span className="block text-[10px] mt-0.5">
                מפתח אתרים בתלת מימד
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};