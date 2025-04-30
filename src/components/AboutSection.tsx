import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
              alt="Психолог"
              className="w-full h-auto aspect-[3/4] object-cover object-center"
            />
          </div>
          
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold">Обо мне</h2>
            <p className="text-gray-600">
              Здравствуйте, я Анна Михайлова — дипломированный психолог с 10-летним опытом работы. 
              Я специализируюсь на когнитивно-поведенческой терапии и консультировании взрослых, 
              помогая преодолевать тревожность, депрессию и кризисные ситуации.
            </p>
            <p className="text-gray-600">
              Мой подход основан на создании доверительных отношений с клиентами, где каждый человек 
              чувствует себя услышанным и понятым. Я верю, что каждый обладает внутренними ресурсами 
              для преодоления трудностей, и моя задача — помочь вам их обнаружить и активировать.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge>Высшее психологическое образование</Badge>
              <Badge>10+ лет опыта</Badge>
              <Badge>КПТ-терапевт</Badge>
              <Badge>Сертифицированный специалист</Badge>
            </div>
            
            <Button className="self-start">Мое резюме</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;