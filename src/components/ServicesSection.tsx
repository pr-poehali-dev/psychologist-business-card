import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, Heart, Brain, Users } from "lucide-react";

const services = [
  {
    title: "Индивидуальные консультации",
    description: "Персонализированная поддержка в решении личных проблем и преодолении жизненных трудностей",
    icon: <UserRound className="h-10 w-10 text-primary" />
  },
  {
    title: "Терапия отношений",
    description: "Помощь парам в преодолении конфликтов, улучшении коммуникации и восстановлении близости",
    icon: <Heart className="h-10 w-10 text-primary" />
  },
  {
    title: "Когнитивно-поведенческая терапия",
    description: "Эффективный подход к преодолению негативных мыслей и установок, трансформация поведенческих паттернов",
    icon: <Brain className="h-10 w-10 text-primary" />
  },
  {
    title: "Групповые сессии",
    description: "Терапевтические группы для проработки специфических проблем в безопасной и поддерживающей среде",
    icon: <Users className="h-10 w-10 text-primary" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Мои услуги</h2>
          <p className="text-lg text-gray-600">
            Я предлагаю разнообразные психологические услуги, адаптированные под ваши индивидуальные потребности
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                {service.icon}
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;