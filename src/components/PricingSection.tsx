import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const services = [
    {
      title: "Разовая консультация",
      price: "3000₽",
      description: "Единичная встреча для решения конкретного вопроса",
      features: [
        "Длительность 50 минут",
        "Предварительная диагностика",
        "Индивидуальный подход",
        "Рекомендации после сессии"
      ]
    },
    {
      title: "Регулярная терапия",
      price: "2500₽",
      description: "Еженедельные встречи для глубинной проработки",
      features: [
        "Длительность 50 минут",
        "Системный подход",
        "Регулярные еженедельные встречи",
        "Поддержка между сессиями"
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-16 relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pastel-mint/20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-foreground">
            Мои <span className="font-medium">услуги</span>
          </h2>
          <p className="text-muted-foreground">
            Выберите формат работы, который подходит именно вам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden ${service.highlighted ? 'border-primary shadow-lg' : 'border-border shadow-sm'}`}>
              <CardHeader className={`pb-4 ${service.highlighted ? 'bg-primary/10' : ''}`}>
                <CardTitle className="text-xl font-medium text-primary-foreground">{service.title}</CardTitle>
                <div className="text-3xl font-semibold mt-2 text-primary-foreground">{service.price}</div>
                <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                        <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-2 pb-6">
                <Button className={`w-full rounded-full ${service.highlighted ? '' : 'bg-muted/80 hover:bg-muted text-primary-foreground'}`}>
                  Записаться
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 space-x-8">
          <div className="flex items-center gap-2">
            <Clock className="text-primary-foreground h-5 w-5" />
            <span className="text-muted-foreground">Продолжительность консультации: 50 минут</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-primary-foreground h-5 w-5" />
            <span className="text-muted-foreground">Онлайн или очный формат по договоренности</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;