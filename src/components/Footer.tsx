const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-semibold text-primary mb-4">ПсихологияДляВас</div>
            <p className="text-gray-600">
              Профессиональная психологическая помощь и поддержка для гармонии вашей жизни
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Обо мне</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Режим работы</h3>
            <p className="text-gray-600 mb-2">Пн-Пт: 9:00 - 20:00</p>
            <p className="text-gray-600">Сб: 10:00 - 16:00</p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} ПсихологияДляВас. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;