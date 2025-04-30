import { Check, Clock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Индивидуальный подход",
    description: "Каждая терапевтическая программа разрабатывается индивидуально, учитывая ваши личные цели, потребности и особенности"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Гибкий график",
    description: "Онлайн и офлайн консультации в удобное для вас время, включая вечерние часы и выходные дни"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Научно-обоснованный подход",
    description: "Я использую только проверенные методики и техники, подтвержденные современными исследованиями в области психологии"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают меня</h2>
          <p className="text-lg text-gray-600">
            Мой подход к психологической помощи основан на профессионализме, эмпатии и эффективности
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;