import { BadgeCheck, Activity, Heart, User, Briefcase, BatteryLow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SpecializationSection = () => {
  const specializations = [
    {
      title: "Тревога, стресс, страх",
      description: "Помощь в преодолении тревожных состояний, стресса и различных страхов",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "Одиночество, неуверенность в себе",
      description: "Работа с низкой самооценкой и чувством неуверенности",
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Проблемы с партнером",
      description: "Недопонимание, измена, разрыв отношений, развод",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Прокрастинация, упадок сил",
      description: "Помощь в поиске смысла жизни и преодолении апатии",
      icon: <BatteryLow className="w-5 h-5" />
    },
    {
      title: "Проблемы на работе",
      description: "Выгорание, конфликты в коллективе, профессиональная реализация",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="specialization" className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-pastel-lavender/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-pastel-sky/20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-foreground">
            Моя <span className="font-medium">специализация</span>
          </h2>
          <p className="text-muted-foreground">
            Я специализируюсь на решении различных психологических проблем, которые мешают вам жить полноценной жизнью 
            и достигать поставленных целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-pastel-pink/10 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/20 p-3 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-primary-foreground flex gap-2 items-center">
                    {item.title}
                    <BadgeCheck className="w-4 h-4 text-primary-foreground" />
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <Badge className="bg-pastel-pink/30 hover:bg-pastel-pink/40 text-primary-foreground border-none px-4 py-2 rounded-full">Депрессия</Badge>
          <Badge className="bg-pastel-mint/30 hover:bg-pastel-mint/40 text-secondary-foreground border-none px-4 py-2 rounded-full">Панические атаки</Badge>
          <Badge className="bg-pastel-lavender/30 hover:bg-pastel-lavender/40 text-primary-foreground border-none px-4 py-2 rounded-full">Личностный рост</Badge>
          <Badge className="bg-pastel-peach/30 hover:bg-pastel-peach/40 text-primary-foreground border-none px-4 py-2 rounded-full">Детско-родительские отношения</Badge>
          <Badge className="bg-pastel-sky/30 hover:bg-pastel-sky/40 text-secondary-foreground border-none px-4 py-2 rounded-full">Саморазвитие</Badge>
          <Badge className="bg-pastel-pink/30 hover:bg-pastel-pink/40 text-primary-foreground border-none px-4 py-2 rounded-full">Эмоциональный интеллект</Badge>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;