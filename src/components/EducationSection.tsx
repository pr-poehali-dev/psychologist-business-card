import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-marina-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Образование и квалификация
          </h2>
          <div className="w-20 h-1 bg-marina-rose mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Профессиональная подготовка и постоянное развитие
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Образование</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-marina-pink/20">
                <h4 className="font-bold text-slate-800 mb-2">РИНО Пермский государственный научный исследовательский университет</h4>
                <p className="text-slate-600">Психолог</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-marina-pink/20">
                <h4 className="font-bold text-slate-800 mb-2">ММА Московская международная академия</h4>
                <p className="text-slate-600">Клинический психолог</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <Award className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Повышение квалификации</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/10">
                <p className="text-slate-700">Гуманистическое направление в психотерапии. Клиент-центрированная терапия К. Роджерса</p>
                <p className="text-sm text-slate-500 mt-1">«Институт дополнительного профессионального образования»</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/10">
                <p className="text-slate-700">Когнитивно-поведенческая терапия</p>
                <p className="text-sm text-slate-500 mt-1">«Институт дополнительного профессионального образования»</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/10">
                <p className="text-slate-700">Методы ведения индивидуального психологического консультирования</p>
                <p className="text-sm text-slate-500 mt-1">«РИНО Пермский государственный научный исследовательский университет»</p>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-slate-600">И другие курсы повышения квалификации</p>
                <button className="text-marina-rose font-medium hover:underline">Показать все</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 text-center">
          <p className="text-slate-600 mb-4">
            Я постоянно совершенствую свои навыки и осваиваю новые техники работы, 
            чтобы предоставлять своим клиентам наиболее эффективную помощь.
          </p>
          <p className="font-medium text-slate-800">
            Являюсь членом общероссийской профессиональной психотерапевтической лиги (ОППЛ)
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;