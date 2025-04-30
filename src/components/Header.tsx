import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-medium text-slate-800">
          <span className="mr-1">✨</span> Анна Петрова
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
            Обо мне
          </a>
          <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
            Услуги
          </a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">
            Отзывы
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="hidden md:flex">
          <Button className="rounded-full px-6 flex items-center gap-2">
            <CalendarCheck size={18} />
            <span>Записаться</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
              onClick={toggleMenu}
            >
              Обо мне
            </a>
            <a 
              href="#services" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#testimonials" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
              onClick={toggleMenu}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button className="w-full rounded-full flex items-center justify-center gap-2">
              <CalendarCheck size={18} />
              <span>Записаться</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;