import { Instagram, Facebook, Telegram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-marina-pink/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-xl font-medium text-slate-800 flex items-center justify-center md:justify-start mb-2">
              <span className="text-marina-rose text-2xl mr-2">✿</span> 
              <span className="font-serif">Марина Сафиуллина</span>
            </div>
            <p className="text-slate-600 text-sm">
              Психолог, член ОППЛ<br />
              г. Пермь
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-6">
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
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-marina-pink/10 flex items-center justify-center text-slate-600 hover:bg-marina-pink/20 hover:text-marina-rose transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-marina-pink/10 flex items-center justify-center text-slate-600 hover:bg-marina-pink/20 hover:text-marina-rose transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-marina-pink/10 flex items-center justify-center text-slate-600 hover:bg-marina-pink/20 hover:text-marina-rose transition-colors"
              aria-label="Telegram"
            >
              <Telegram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-marina-pink/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Марина Сафиуллина. Все права защищены.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 text-sm hover:text-marina-rose transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-marina-rose transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;