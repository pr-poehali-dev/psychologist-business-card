import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Heart, Users, Brain, Briefcase, Smile } from "lucide-react";

const services = [
  {
    icon: <Heart className="h-8 w-8 text-teal-600" />,
    title: "Индивидуальная терапия",
    description: "Помощь в решении личных проблем, преодолении тревоги, депрессии и повышении самооценки.",
    price: "3000 ₽",
    duration: "50 минут"
  },
  {
    icon: <Users className="h-8 w-8 text-teal-600" />,
    title: "Семейная терапия",
    description: "Улучшение коммуникации в семье, разрешение конфликтов и восстановление гармоничных отношений.",
    price: "4000 ₽",
    duration: "80 минут"
  },
  {
    icon: <Brain className="h-8 w-8 text-teal-600" />,
    title: "Когнитивно-поведенческая терапия",
    description: "Изменение негативных мыслей и поведенческих паттернов для улучшения качества жизни.",
    price: "3500 ₽",
    duration: "60 минут"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-teal-600" />,
    title: "Коучинг личной эффективности",
    description: "Раскрытие личностного потенциала, постановка целей и разработка стратегий их достижения.",
    price: "3500 ₽",
    duration: "60 минут"
  },
  {
    icon: <Smile className="h-8 w-8 text-teal-600" />,
    title: "Терапия сложных эмоций",
    description: "Помощь в управлении сложными эмоциями, такими как гнев, страх и чувство вины.",
    price: "3000 ₽",
    duration: "50 минут"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Мои услуги
          </h2>
          <p className="text-lg text-slate-600">
            Профессиональная психологическая помощь для различных жизненных ситуаций
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="mb-4 bg-teal-100 p-3 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Стоимость:</span>
                    <span className="font-medium text-slate-800">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Длительность:</span>
                    <span className="font-medium text-slate-800">{service.duration}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 mx-auto">
            <CalendarCheck size={20} />
            <span>Записаться на консультацию</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;