import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-marina-lavender rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 -left-12 w-40 h-40 bg-marina-pink rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/3 w-48 h-48 bg-marina-mint rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight leading-tight">
              <span className="text-marina-rose">Психолог</span> для вашего внутреннего благополучия
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
              Дипломированный и практикующий психолог с опытом более 4-х лет.
              Член Общероссийской профессиональной психотерапевтической лиги (ОППЛ).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-6 py-6 text-base bg-marina-rose hover:bg-marina-rose/90 flex items-center gap-2">
                <CalendarCheck size={20} />
                <span>Записаться на консультацию</span>
              </Button>
              <Button variant="outline" className="rounded-full px-6 py-6 text-base border-marina-rose text-marina-rose hover:bg-marina-rose/10">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551848189-53119185a1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                  alt="Психолог Марина Сафиуллина" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-marina-pink/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;