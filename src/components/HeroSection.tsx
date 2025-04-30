import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Обретите гармонию и баланс в своей жизни
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Профессиональная психологическая помощь для решения личных проблем, 
              преодоления трудностей и достижения внутреннего благополучия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 text-base font-medium flex items-center gap-2">
                <CalendarCheck size={20} />
                <span>Записаться на консультацию</span>
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Психолог слушает клиента" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-teal-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-200 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;