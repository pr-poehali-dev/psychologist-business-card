import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm py-4 border-b border-pastel-pink/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-medium text-primary-foreground">
          <span className="mr-1">👩‍⚕️</span> Марина Сафиуллина
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-primary-foreground transition-colors">
            Обо мне
          </a>
          <a href="#specialization" className="text-muted-foreground hover:text-primary-foreground transition-colors">
            Специализация
          </a>
          <a href="#education" className="text-muted-foreground hover:text-primary-foreground transition-colors">
            Образование
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary-foreground transition-colors">
            Услуги
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary-foreground transition-colors">
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
          className="md:hidden text-primary-foreground"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-pastel-pink/30 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={toggleMenu}
            >
              Обо мне
            </a>
            <a 
              href="#specialization" 
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={toggleMenu}
            >
              Специализация
            </a>
            <a 
              href="#education" 
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={toggleMenu}
            >
              Образование
            </a>
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary-foreground transition-colors"
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