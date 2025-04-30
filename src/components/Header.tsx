import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-primary">ПсихологияДлвВас</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
            Обо мне
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">
            Преимущества
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="hidden md:flex">
          <Button>Записаться</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Обо мне
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Преимущества
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button className="w-full">Записаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;