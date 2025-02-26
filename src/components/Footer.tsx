
import MacbookLoader from './MacbookLoader';

export const Footer = () => {
  return <footer className="py-4 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1" /> {/* Spacer */}
            <div className="text-center flex-1">
              <img src="/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png" alt="Orel Bukris Logo" className="w-12 h-12 object-contain mx-auto" />
            </div>
            <div className="flex-1 flex justify-end">
              <MacbookLoader />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} כל הזכויות שמורות ל
              <a href="https://orel-bukris-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors mx-1">
                אוראל בוקריס
              </a>
              <span className="block text-[10px] mt-0.5">מפתח אתרים בתלת מימד</span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
