import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      title: "РИНО Пермский государственный научный исследовательский университет",
      degree: "Психолог",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "ММА Московская международная академия",
      degree: "Клинический психолог",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const qualifications = [
    "Гуманистическое направление в психотерапии. Клиент-центрированная терапия К. Роджерса - «Институт дополнительного профессионального образования»",
    "Когнитивно поведенческая терапия - «Институт дополнительного профессионального образования»",
    "Методы ведения индивидуального психологического консультирования - «РИНО ПГНИУ»",
    "Коуч практик по программе ICTA",
    "НЛП коуч мастер по программе ICTA",
    "Самооценка и личные границы - «Онлайн школа практической психологии»",
    "Терапевтическая медитация - «Онлайн школа практической психологии»",
    "Ведущий психологических тренингов - «Онлайн школа практической психологии»",
    "Работа психолога с депрессивными состояниями - «Онлайн школа практической психологии»",
    "Работа с материнской травмой в формате индивидуального и группового консультирования - «Академия Психологии и Психотерапии»"
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary-foreground">
            Образование и <span className="font-medium">квалификация</span>
          </h2>
          <p className="text-muted-foreground">
            Я постоянно повышаю свою квалификацию, изучаю новые методики и подходы в психологии, 
            чтобы предоставлять вам наиболее эффективную помощь
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-pastel-pink/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-primary/20 p-3">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.degree}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-pastel-pink/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-primary/20 p-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-primary-foreground">Повышение квалификации</h3>
          </div>

          <div className="space-y-4">
            {qualifications.map((item, index) => (
              <div key={index} className="pl-4 border-l-2 border-pastel-pink">
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;