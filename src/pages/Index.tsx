import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Изучите HTML, CSS, JavaScript и создайте свой первый сайт',
      category: 'Программирование',
      duration: '12 недель',
      students: 2847,
      image: 'https://cdn.poehali.dev/projects/5c137915-90de-439e-9b97-d54f1218908b/files/e4cb352e-b859-41ec-81b3-6c8cd3cab028.jpg',
      price: '15 000 ₽',
      progress: 0
    },
    {
      id: 2,
      title: 'Основы управления проектами',
      description: 'Научитесь эффективно управлять командой и проектами',
      category: 'Бизнес',
      duration: '8 недель',
      students: 1523,
      image: 'https://cdn.poehali.dev/projects/5c137915-90de-439e-9b97-d54f1218908b/files/9734d0a1-7ef8-4161-b7fe-80ce2a27b618.jpg',
      price: '12 000 ₽',
      progress: 0
    },
    {
      id: 3,
      title: 'Python для начинающих',
      description: 'Освойте один из самых популярных языков программирования',
      category: 'Программирование',
      duration: '10 недель',
      students: 3421,
      image: 'https://cdn.poehali.dev/projects/5c137915-90de-439e-9b97-d54f1218908b/files/e4cb352e-b859-41ec-81b3-6c8cd3cab028.jpg',
      price: '18 000 ₽',
      progress: 0
    }
  ];

  const [enrolledCourses] = useState([
    {
      id: 4,
      title: 'Веб-разработка с нуля',
      progress: 75,
      completedLessons: 36,
      totalLessons: 48,
      nextLesson: 'React Hooks: useState и useEffect'
    },
    {
      id: 5,
      title: 'Python для начинающих',
      progress: 45,
      completedLessons: 18,
      totalLessons: 40,
      nextLesson: 'Работа с файлами в Python'
    }
  ]);

  const [certificates] = useState([
    {
      id: 1,
      courseName: 'JavaScript Основы',
      issueDate: '15.11.2024',
      certificateNumber: 'OA-2024-001523'
    }
  ]);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <h1 className="text-2xl font-bold text-primary tracking-tight">
                ОНЛАЙН АКАДЕМИЯ
              </h1>
              <div className="absolute -top-1 right-0 w-3 h-3 bg-secondary rounded-full transform rotate-12" 
                   style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-primary' : ''}>
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('courses')} className={activeTab === 'courses' ? 'text-primary' : ''}>
              Курсы
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'text-primary' : ''}>
              Мой кабинет
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('support')}>
              Поддержка
            </Button>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
            Войти
          </Button>
        </div>
      </header>

      {activeTab === 'home' && (
        <main>
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-secondary text-secondary-foreground border-0">
                    Образовательная платформа
                  </Badge>
                  <h2 className="text-5xl font-bold text-foreground leading-tight">
                    Учитесь в удобном темпе
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Получите востребованные навыки с лучшими преподавателями. Более 150 курсов по программированию, бизнесу и дизайну.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white font-medium"
                      onClick={() => setActiveTab('courses')}
                    >
                      Начать обучение
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      Узнать больше
                    </Button>
                  </div>
                  <div className="flex gap-8 pt-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">7,892</div>
                      <div className="text-sm text-muted-foreground">Студентов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">150+</div>
                      <div className="text-sm text-muted-foreground">Курсов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Довольных</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/projects/5c137915-90de-439e-9b97-d54f1218908b/files/39ff620a-28ff-4a60-bb3e-11776566a042.jpg"
                    alt="Онлайн обучение"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">Популярные курсы</h3>
                <p className="text-muted-foreground">Начните свой путь к новым знаниям</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                          {course.category}
                        </Badge>
                        <div className="text-xl font-bold text-primary">{course.price}</div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          <span>{course.students}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Записаться на курс
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5"
                  onClick={() => setActiveTab('courses')}
                >
                  Все курсы
                  <Icon name="ChevronRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-border bg-white">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="GraduationCap" size={32} className="text-primary" />
                    </div>
                    <CardTitle>Качественное образование</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Программы разработаны экспертами индустрии с многолетним опытом
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-border bg-white">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Award" size={32} className="text-secondary-foreground" />
                    </div>
                    <CardTitle>Сертификаты</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Получите официальный сертификат после завершения курса
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center border-border bg-white">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Clock" size={32} className="text-primary" />
                    </div>
                    <CardTitle>Гибкий график</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Учитесь в удобное время, в своём темпе
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'courses' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Каталог курсов</h2>
              <p className="text-muted-foreground mb-6">Найдите идеальный курс для ваших целей</p>
              <div className="flex gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Поиск курсов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-border"
                  />
                </div>
                <Button variant="outline" className="border-border">
                  <Icon name="SlidersHorizontal" size={20} className="mr-2" />
                  Фильтры
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] border-border">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                        {course.category}
                      </Badge>
                      <div className="text-xl font-bold text-primary">{course.price}</div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                      <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                      <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                      <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                      <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                      <span className="text-muted-foreground">(4.9)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'dashboard' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-2">Личный кабинет</h2>
              <p className="text-muted-foreground">Добро пожаловать, Студент!</p>
            </div>

            <Tabs defaultValue="progress" className="space-y-6">
              <TabsList className="bg-muted/50 p-1">
                <TabsTrigger value="progress" className="data-[state=active]:bg-white">
                  <Icon name="TrendingUp" size={18} className="mr-2" />
                  Мои курсы
                </TabsTrigger>
                <TabsTrigger value="certificates" className="data-[state=active]:bg-white">
                  <Icon name="Award" size={18} className="mr-2" />
                  Сертификаты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="progress" className="space-y-6">
                <div className="grid gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="border-border">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">
                              Следующий урок: {course.nextLesson}
                            </CardDescription>
                          </div>
                          <Badge className="bg-primary/10 text-primary border-0">
                            {course.progress}% завершено
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-medium">{course.completedLessons} / {course.totalLessons} уроков</span>
                          </div>
                          <Progress value={course.progress} className="h-3" />
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            <Icon name="PlayCircle" size={18} className="mr-2" />
                            Продолжить обучение
                          </Button>
                          <Button variant="outline" className="border-border">
                            <Icon name="BookOpen" size={18} className="mr-2" />
                            Материалы
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                            <Icon name="Award" size={24} className="text-secondary-foreground" />
                          </div>
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                            Сертификат
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{cert.courseName}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Выдан: {cert.issueDate}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Hash" size={16} />
                            <span>Номер: {cert.certificateNumber}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white flex-1">
                              <Icon name="Download" size={16} className="mr-2" />
                              Скачать
                            </Button>
                            <Button size="sm" variant="outline" className="border-border flex-1">
                              <Icon name="Share2" size={16} className="mr-2" />
                              Поделиться
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border-2 border-dashed border-border bg-muted/20 flex items-center justify-center min-h-[250px]">
                    <div className="text-center p-6">
                      <Icon name="Trophy" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <CardTitle className="text-lg mb-2 text-muted-foreground">
                        Завершите курс
                      </CardTitle>
                      <CardDescription>
                        Сертификат будет автоматически выдан после завершения курса
                      </CardDescription>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {activeTab === 'support' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Поддержка</h2>
              <p className="text-muted-foreground">Мы всегда готовы помочь вам</p>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Заполните форму, и мы ответим в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@email.com" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    className="w-full min-h-[120px] px-3 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Опишите вашу проблему или вопрос..."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardFooter>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="text-center border-border">
                <CardHeader>
                  <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-base">Email</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    support@academy.ru
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border">
                <CardHeader>
                  <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-base">Телефон</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    +7 (495) 123-45-67
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border">
                <CardHeader>
                  <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-base">Чат</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Онлайн поддержка
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-primary">ОНЛАЙН АКАДЕМИЯ</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для развития навыков и карьеры
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Курсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Бизнес</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Онлайн Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;