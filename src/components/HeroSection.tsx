import { Button } from "@/components/ui/button";
import { CalendarCheck, Heart, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-pastel-lavender/30 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-pastel-mint/40 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-5/12 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Марина Сафиуллина - психолог"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-md">
                <Heart size={32} className="text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-primary-foreground">
              <span className="block font-medium mb-2">Марина Сафиуллина</span>
              <span className="text-muted-foreground">практикующий психолог</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Помогаю справиться с тревогой, стрессом, неуверенностью и решить проблемы в отношениях. 
              Более 4 лет опыта и индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="rounded-full h-12 px-8 gap-2">
                <CalendarCheck size={20} />
                <span>Записаться на консультацию</span>
              </Button>
              <Button variant="outline" className="rounded-full h-12 px-8 gap-2 border-pastel-pink">
                <MessageCircle size={20} />
                <span>Связаться со мной</span>
              </Button>
            </div>
            <div className="mt-10 text-muted-foreground flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-medium text-primary-foreground">4+</span>
                <span className="text-sm">лет опыта</span>
              </div>
              <div className="h-10 border-r border-pastel-pink/30 hidden sm:block"></div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-medium text-primary-foreground">100+</span>
                <span className="text-sm">клиентов</span>
              </div>
              <div className="h-10 border-r border-pastel-pink/30 hidden sm:block"></div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-medium text-primary-foreground">ОППЛ</span>
                <span className="text-sm">член лиги</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;