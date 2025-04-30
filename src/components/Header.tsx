import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm py-4 border-b border-marina-pink/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-medium text-slate-800 flex items-center">
          <span className="text-marina-rose text-2xl mr-2">✿</span> 
          <span className="font-serif">Марина Сафиуллина</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-600 hover:text-marina-rose transition-colors">
            Обо мне
          </a>
          <a href="#specialization" className="text-slate-600 hover:text-marina-rose transition-colors">
            Специализация
          </a>
          <a href="#education" className="text-slate-600 hover:text-marina-rose transition-colors">
            Образование
          </a>
          <a href="#pricing" className="text-slate-600 hover:text-marina-rose transition-colors">
            Услуги
          </a>
          <a href="#contact" className="text-slate-600 hover:text-marina-rose transition-colors">
            Контакты
          </a>
        </nav>
        
        <div className="hidden md:flex">
          <Button className="rounded-full px-6 flex items-center gap-2 bg-marina-rose hover:bg-marina-rose/90">
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
        <div className="md:hidden bg-white py-4 px-4 border-t border-marina-pink/20 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-slate-600 hover:text-marina-rose transition-colors"
              onClick={toggleMenu}
            >
              Обо мне
            </a>
            <a 
              href="#specialization" 
              className="text-slate-600 hover:text-marina-rose transition-colors"
              onClick={toggleMenu}
            >
              Специализация
            </a>
            <a 
              href="#education" 
              className="text-slate-600 hover:text-marina-rose transition-colors"
              onClick={toggleMenu}
            >
              Образование
            </a>
            <a 
              href="#pricing" 
              className="text-slate-600 hover:text-marina-rose transition-colors"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 hover:text-marina-rose transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button className="w-full rounded-full flex items-center justify-center gap-2 bg-marina-rose hover:bg-marina-rose/90">
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