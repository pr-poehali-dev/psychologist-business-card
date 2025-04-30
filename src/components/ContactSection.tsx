import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-lg text-gray-600">
            Оставьте заявку, и я свяжусь с вами для консультации
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Записаться на консультацию</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="email" placeholder="Электронная почта" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button type="submit" className="w-full">Отправить</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <p className="text-gray-600 mb-6">
                Для получения дополнительной информации или записи на консультацию вы можете связаться со мной любым удобным способом
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Ленинградская, д. 15, офис 203</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@psychologist.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;