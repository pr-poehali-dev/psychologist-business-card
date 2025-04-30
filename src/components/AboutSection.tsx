import { ShieldCheck, Heart, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-marina-light opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Обо мне
          </h2>
          <div className="w-20 h-1 bg-marina-rose mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Помогаю людям преодолевать трудности и находить путь к гармоничной жизни
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80" 
                  alt="Психолог Марина Сафиуллина" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-marina-lavender/50"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Психолог Марина Сафиуллина
            </h3>
            <p className="text-slate-600 mb-6">
              Я дипломированный и практикующий психолог со стажем работы более 4-х лет. 
              Являюсь членом общероссийской профессиональной психотерапевтической лиги (ОППЛ).
            </p>
            <p className="text-slate-600 mb-8">
              Обратившись ко мне как к психологу, вы получите индивидуальный и профессиональный подход, 
              поддержку и понимание в решении ваших проблем, а также новые инсайты и инструменты для работы над собой.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/20">
                <ShieldCheck className="text-marina-rose mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Профессионализм</h4>
                <p className="text-sm text-slate-600">Образование и постоянное повышение квалификации</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/20">
                <Heart className="text-marina-rose mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Эмпатия</h4>
                <p className="text-sm text-slate-600">Внимательное и чуткое отношение к каждому клиенту</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-marina-pink/20">
                <Target className="text-marina-rose mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Результативность</h4>
                <p className="text-sm text-slate-600">Ориентация на достижение позитивных изменений</p>
              </div>
            </div>

            <p className="mt-8 text-slate-600">
              Моя цель - помочь вам справиться с проблемами, обрести внутреннюю гармонию, 
              уверенность и понять себя лучше. Мы вместе найдем пути к решению ваших проблем, 
              разберемся с внутренними конфликтами и вы сможете стать более счастливыми и успешными.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;