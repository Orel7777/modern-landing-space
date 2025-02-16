
import MacbookLoader from './MacbookLoader';
export const Footer = () => {
  return <footer className="py-4 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-8 justify-center ">
            <img src="/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png" alt="Orel Bukris Logo" className="w-12 h-12 object-contain" />
            <MacbookLoader />
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
              <a href="https://orel-bukris-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                אוראל בוקריס
              </a>
              <span className="mr-1">©</span>
              <span>2025</span>
              <span className="block text-[10px] mt-0.5">מפתח אתרים בתלת מימד</span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
