import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-medium text-slate-800 mb-4">
              <span className="mr-1">✨</span> Анна Петрова
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Профессиональный психолог, помогающий людям преодолевать жизненные трудности и
              обретать внутреннюю гармонию.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-800 mb-4">Разделы</h3>
            <nav className="flex flex-col space-y-3">
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
          </div>
          
          <div>
            <h3 className="font-medium text-slate-800 mb-4">Контакты</h3>
            <div className="space-y-3">
              <p className="text-slate-600">+7 (999) 123-45-67</p>
              <p className="text-slate-600">anna.petrova@example.com</p>
              <p className="text-slate-600">г. Москва, ул. Психологов, д. 10</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">
            © {currentYear} Анна Петрова. Все права защищены.
          </p>
          <p className="text-slate-600 text-sm flex items-center mt-4 md:mt-0">
            Сделано с <Heart className="h-3 w-3 mx-1 text-red-400" /> для ваших клиентов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;