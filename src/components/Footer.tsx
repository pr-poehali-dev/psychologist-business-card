import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-pastel-pink/20 py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-medium text-primary-foreground mb-4">
              <span className="mr-1">👩‍⚕️</span> Марина Сафиуллина
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Дипломированный психолог. Помогаю людям обрести внутреннюю гармонию, уверенность 
              и решить психологические проблемы.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-primary-foreground mb-4">Разделы</h3>
            <nav className="flex flex-col space-y-3">
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
          </div>
          
          <div>
            <h3 className="font-medium text-primary-foreground mb-4">Контакты</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
              <p className="text-muted-foreground">marina@example.com</p>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-pastel-pink/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Марина Сафиуллина. Все права защищены.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Сделано с <Heart className="h-3 w-3 mx-1 text-primary-foreground" /> для ваших клиентов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;