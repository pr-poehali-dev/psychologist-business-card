import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-foreground">
            Свяжитесь <span className="font-medium">со мной</span>
          </h2>
          <p className="text-muted-foreground">
            Готовы начать работу над собой? Заполните форму или воспользуйтесь контактной информацией.
            Я отвечу на ваши вопросы и помогу записаться на первую консультацию.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-pink/20">
            <h3 className="text-xl font-medium mb-6 text-primary-foreground">Напишите мне</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="rounded-lg border-pastel-pink/30 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="rounded-lg border-pastel-pink/30 focus-visible:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className="rounded-lg border-pastel-pink/30 focus-visible:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Textarea 
                  placeholder="Ваше сообщение..."
                  className="min-h-[120px] rounded-lg border-pastel-pink/30 focus-visible:ring-primary"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-full flex items-center gap-2">
                <Send className="h-4 w-4" />
                <span>Отправить сообщение</span>
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-6 text-primary-foreground">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-3 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-foreground">Телефон</h4>
                    <p className="text-muted-foreground mt-1">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 10:00 - 19:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-3 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-foreground">Email</h4>
                    <p className="text-muted-foreground mt-1">marina@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Отвечу в течение 24 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-foreground">Адрес</h4>
                    <p className="text-muted-foreground mt-1">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-muted-foreground mt-1">Доступен также онлайн-формат</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pastel-lavender/20 p-6 rounded-xl mt-10">
              <h4 className="font-medium text-primary-foreground mb-2">Важно знать</h4>
              <p className="text-muted-foreground text-sm">
                Все консультации проводятся конфиденциально. Первая встреча обычно посвящена 
                знакомству и определению целей нашей совместной работы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;