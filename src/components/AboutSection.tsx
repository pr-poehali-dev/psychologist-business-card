import { Card, CardContent } from "@/components/ui/card";
import { Heart, Smile, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pastel-peach/30 rounded-bl-full opacity-40"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-foreground">
            Обо <span className="font-medium">мне</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Я дипломированный и практикующий психолог со стажем работы более 4-х лет.
            Являюсь членом общероссийской профессиональной психотерапевтической лиги (ОППЛ).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-pastel-pink/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="text-primary-foreground h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary-foreground">Мой подход</h3>
              <p className="text-muted-foreground">
                Обратившись ко мне как к психологу, вы получите индивидуальный и профессиональный подход, 
                поддержку и понимание в решении ваших проблем, а также новые инсайты и инструменты для работы над собой.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pastel-pink/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <Smile className="text-primary-foreground h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary-foreground">Моя цель</h3>
              <p className="text-muted-foreground">
                Моя цель - помочь вам справиться с проблемами, обрести внутреннюю гармонию, уверенность и понять себя лучше.
                Вместе мы найдем путь к решению ваших проблем и внутренних конфликтов.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-pastel-pink/20 shadow-sm">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                <Star className="text-primary-foreground h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-primary-foreground">Результат</h3>
              <p className="text-muted-foreground">
                Мы вместе найдем пути к решению ваших проблем, разберемся с внутренними конфликтами и 
                вы сможете стать более счастливыми и успешными в разных сферах жизни.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;