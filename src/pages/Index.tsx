import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const projects = [
    {
      id: 1,
      title: 'Современный жилой комплекс',
      category: 'Жилая архитектура',
      image: '/img/ffc9f983-1768-42d2-85b5-04fbb42b7266.jpg',
      description: 'Инновационный подход к городскому жилью с акцентом на экологичность и комфорт.'
    },
    {
      id: 2,
      title: 'Интерьер премиум-класса',
      category: 'Дизайн интерьера',
      image: '/img/76edd2c1-cad5-458d-b562-4cf28b5755a9.jpg',
      description: 'Элегантное пространство с минималистичным подходом и натуральными материалами.'
    },
    {
      id: 3,
      title: 'Бизнес-центр',
      category: 'Коммерческая архитектура',
      image: '/img/48c10b4f-ebf3-41ca-9598-deeb3d5764fb.jpg',
      description: 'Современное офисное здание с инновационными архитектурными решениями.'
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
                  <Button variant="ghost" className="p-0 h-auto font-medium">
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
    </div>
  );
}