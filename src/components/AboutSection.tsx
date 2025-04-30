import { Shield, Heart, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Обо мне
          </h2>
          <p className="text-lg text-slate-600">
            Помогаю людям преодолевать трудности и находить путь к счастливой жизни
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Психолог Анна Петрова" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-teal-100"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Анна Петрова
            </h3>
            <p className="text-slate-600 mb-6">
              Дипломированный психолог с опытом работы более 5 лет. Специализируюсь на когнитивно-поведенческой 
              терапии и помощи людям, переживающим стресс, тревогу, депрессию и сложности в отношениях.
            </p>
            <p className="text-slate-600 mb-8">
              Мой подход основан на создании доверительных отношений, где каждый клиент чувствует себя 
              услышанным и понятым. Я верю, что внутри каждого человека есть ресурсы для преодоления 
              трудностей и достижения гармонии.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-teal-50 p-4 rounded-xl">
                <Shield className="text-teal-600 mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Профессионализм</h4>
                <p className="text-sm text-slate-600">Высшее образование и постоянное повышение квалификации</p>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-xl">
                <Heart className="text-teal-600 mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Эмпатия</h4>
                <p className="text-sm text-slate-600">Внимательное и чуткое отношение к каждому клиенту</p>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-xl">
                <Book className="text-teal-600 mb-3 h-6 w-6" />
                <h4 className="font-medium text-slate-800 mb-1">Современные методики</h4>
                <p className="text-sm text-slate-600">Применение эффективных научно обоснованных подходов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;