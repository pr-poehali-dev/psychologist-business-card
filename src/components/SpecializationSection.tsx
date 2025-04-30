import { AlertCircle, Users, BrainCircuit, Clock4, BriefcaseBusiness } from "lucide-react";

const SpecializationSection = () => {
  return (
    <section id="specialization" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Моя специализация
          </h2>
          <div className="w-20 h-1 bg-marina-rose mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Направления психологической помощи, в которых я работаю
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "0ms"}}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <AlertCircle className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Тревога и стресс</h3>
            </div>
            <p className="text-slate-600">
              Помощь при панических атаках, повышенной тревожности, фобиях и состояниях стресса. 
              Работа с тревожными мыслями и страхами.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "100ms"}}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <Users className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Отношения и одиночество</h3>
            </div>
            <p className="text-slate-600">
              Работа с проблемами в отношениях, разрывами, конфликтами с партнером. 
              Помощь при одиночестве, неуверенности в себе и низкой самооценке.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "200ms"}}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <BrainCircuit className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Прокрастинация</h3>
            </div>
            <p className="text-slate-600">
              Борьба с откладыванием дел, проблемами целеполагания, упадком сил и 
              потерей смысла жизни. Поиск внутренней мотивации.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "300ms"}}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <BriefcaseBusiness className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Проблемы на работе</h3>
            </div>
            <p className="text-slate-600">
              Помощь при профессиональном выгорании, конфликтах в коллективе, 
              стрессе на рабочем месте и адаптации к новым условиям.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-marina-pink/20 hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "400ms"}}>
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-marina-pink/20 rounded-full flex items-center justify-center mr-4">
                <Clock4 className="text-marina-rose h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Жизненные кризисы</h3>
            </div>
            <p className="text-slate-600">
              Поддержка в трудные периоды жизни, при изменениях, потерях и 
              переживаниях экзистенциальных кризисов различных возрастов.
            </p>
          </div>
          
          <div className="p-6 rounded-xl border-2 border-dashed border-marina-pink/30 flex flex-col items-center justify-center text-center animate-fade-in" style={{animationDelay: "500ms"}}>
            <p className="text-slate-600 mb-2">
              Не нашли свою проблему в списке?
            </p>
            <p className="font-medium text-slate-800">
              Свяжитесь со мной, и мы обсудим вашу ситуацию индивидуально
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;