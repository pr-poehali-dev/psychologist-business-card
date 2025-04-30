import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Поддержка и<br />
            <span className="text-primary">профессиональная помощь</span><br />
            когда она нужна вам
          </h1>
          <p className="text-lg text-gray-600">
            Я помогаю людям справиться с трудностями, обрести гармонию и раскрыть свой потенциал через индивидуальные психологические консультации.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Записаться на консультацию</Button>
            <Button variant="outline" size="lg">Узнать больше</Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Психологическая помощь" 
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;