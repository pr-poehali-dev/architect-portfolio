import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'Современный жилой комплекс',
      category: 'Жилая архитектура',
      image: '/img/ffc9f983-1768-42d2-85b5-04fbb42b7266.jpg',
      description: 'Инновационный подход к городскому жилью с акцентом на экологичность и комфорт.',
      fullDescription: 'Этот жилой комплекс представляет собой яркий пример современной архитектуры, где функциональность гармонично сочетается с эстетикой. Проект включает в себя 150 квартир различной планировки, общественные пространства и зеленые зоны.',
      area: '12,000 м²',
      year: '2023',
      location: 'Москва, Россия',
      client: 'ГК «Современный город»',
      features: ['Энергоэффективность класса A+', 'Подземный паркинг на 200 мест', 'Детские и спортивные площадки', 'Система «умный дом»', 'Панорамные окна', 'Экологичные материалы'],
      challenges: 'Основной вызов заключался в создании комфортного жилого пространства в условиях плотной городской застройки при соблюдении всех экологических стандартов.'
    },
    {
      id: 2,
      title: 'Интерьер премиум-класса',
      category: 'Дизайн интерьера',
      image: '/img/76edd2c1-cad5-458d-b562-4cf28b5755a9.jpg',
      description: 'Элегантное пространство с минималистичным подходом и натуральными материалами.',
      fullDescription: 'Проект интерьера премиум-класса в стиле современного минимализма. Каждая деталь тщательно продумана для создания атмосферы роскоши и комфорта, где функциональность не уступает красоте.',
      area: '320 м²',
      year: '2023',
      location: 'Санкт-Петербург, Россия',
      client: 'Частный заказчик',
      features: ['Натуральный камень и дерево', 'Встроенная мебель на заказ', 'Система климат-контроля', 'Скрытое освещение', 'Панорамные окна в пол', 'Винная комната'],
      challenges: 'Создание единого стилистического решения для всех помещений при сохранении индивидуальности каждой зоны и интеграции современных технологий.'
    },
    {
      id: 3,
      title: 'Бизнес-центр',
      category: 'Коммерческая архитектура',
      image: '/img/48c10b4f-ebf3-41ca-9598-deeb3d5764fb.jpg',
      description: 'Современное офисное здание с инновационными архитектурными решениями.',
      fullDescription: 'Многофункциональный бизнес-центр класса A с уникальным фасадом и передовыми технологическими решениями. Здание стало новой архитектурной доминантой района и примером устойчивого развития.',
      area: '45,000 м²',
      year: '2024',
      location: 'Екатеринбург, Россия',
      client: 'Инвестиционная группа «Развитие»',
      features: ['25 этажей офисных помещений', 'Конференц-залы и переговорные', 'Фитнес-центр и SPA', 'Ресторанная зона', 'Подземный паркинг на 500 мест', 'Вертикальное озеленение фасада'],
      challenges: 'Проектирование высотного здания в сейсмически активном регионе с учетом всех требований безопасности и комфорта для пользователей.'
    }
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Архитектурное проектирование',
      description: 'Полный цикл архитектурного проектирования от концепции до рабочих чертежей'
    },
    {
      icon: 'Home',
      title: 'Дизайн интерьера',
      description: 'Создание уникальных интерьеров с учетом функциональности и эстетики'
    },
    {
      icon: 'Compass',
      title: 'Консалтинг',
      description: 'Экспертные консультации по вопросам архитектуры и градостроительства'
    },
    {
      icon: 'Palette',
      title: 'Концептуальный дизайн',
      description: 'Разработка уникальных архитектурных концепций и визуализаций'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-foreground">
              АрхитектурА
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Обо мне
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Проекты
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-montserrat font-light text-foreground mb-6">
                Архитектура
                <span className="block font-bold text-accent">будущего</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Создаю пространства, которые вдохновляют и функционально совершенны. 
                Каждый проект — это симфония формы и функции.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Посмотреть проекты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Связаться со мной
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-center text-foreground mb-16">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Я архитектор с более чем 15-летним опытом создания пространств, 
                  которые меняют жизни людей. Моя философия основана на том, что 
                  архитектура должна быть не просто красивой, но и функциональной.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Специализируюсь на современном минимализме с элементами 
                  экологичной архитектуры. Каждый проект для меня — это возможность 
                  создать что-то уникальное и значимое.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">150+</div>
                    <div className="text-muted-foreground">Реализованных проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-accent mb-2">15</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-muted to-accent/20 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="User" size={80} className="text-accent/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-foreground mb-16">
            Проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow animate-fade-in" 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-foreground mb-16">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-16">
              Контакты
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">architect@example.com</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </Card>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                Готовы обсудить проект?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Свяжитесь со мной для консультации. Вместе мы создадим архитектурное решение, 
                которое превзойдет ваши ожидания.
              </p>
              <Button size="lg" className="px-8 py-3 text-lg">
                Написать сообщение
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold mb-4">
              АрхитектурА
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Создаю пространства будущего
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Mail" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl font-montserrat font-bold text-foreground">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </DialogTitle>
                    <p className="text-accent font-medium mt-2">
                      {projects.find(p => p.id === selectedProject)?.category}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src={projects.find(p => p.id === selectedProject)?.image} 
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Площадь</div>
                    <div className="font-semibold text-foreground">
                      {projects.find(p => p.id === selectedProject)?.area}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Год</div>
                    <div className="font-semibold text-foreground">
                      {projects.find(p => p.id === selectedProject)?.year}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Местоположение</div>
                    <div className="font-semibold text-foreground">
                      {projects.find(p => p.id === selectedProject)?.location}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Заказчик</div>
                    <div className="font-semibold text-foreground">
                      {projects.find(p => p.id === selectedProject)?.client}
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h4 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                    О проекте
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects.find(p => p.id === selectedProject)?.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-montserrat font-semibold text-foreground mb-4">
                    Особенности проекта
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                    Архитектурные решения
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects.find(p => p.id === selectedProject)?.challenges}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button className="flex-1">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать презентацию
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Share" size={16} className="mr-2" />
                    Поделиться проектом
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}