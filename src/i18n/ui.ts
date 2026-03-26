export const languages = {
    es: 'Espanol',
    en: 'English'
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

export const ui = {
    es: {
        'meta.siteTitle': 'Portfolio',
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mi',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'header.role': 'Estudiante de Ingeniería Informática',
        'header.theme': 'Tema',
        'header.lang': 'EN',
        'hero.kicker': '',
        'hero.title': 'Hola, soy Jose!',
        'hero.copy': 'Estudiante de Ingeniería Informática especializado en Computación. Enfocado en construir software eficiente y en profundizar en los fundamentos de la Inteligencia Artificial.',
        'hero.cta': 'Ver proyectos',
        'hero.secondary': 'Contactar',
        'about.title': 'Sobre mi',
        'about.copy': 'Mi camino en la programación empezó con el Grado Superior (DAM). Tras realizar mis prácticas en Hiberus y trabajar como desarrollador Full Stack, decidí dar un paso más: cursar Ingeniería Informática en la Universidad de Zaragoza para dominar las bases teóricas y la computación.\n\nDurante mi etapa en Hiberus, trabajé en proyectos reales usando Angular y Spring Boot bajo metodologías ágiles. Esta experiencia me dio una visión práctica y resolutiva del desarrollo que ahora combino con los conocimientos algorítmicos y de IA de la carrera.\n\nActualmente, busco prácticas universitarias o proyectos para el verano de 2026, ya sea en España o en el extranjero. Mi objetivo es unirme a un equipo donde pueda seguir creciendo, aportando valor y resolviendo problemas complejos con código limpio.',
        'about.page.title': 'Sobre mi',
        'about.page.p1': 'Mi camino en la programación empezó con el Grado Superior (DAM). Tras realizar mis prácticas en Hiberus y trabajar como desarrollador Full Stack, decidí dar un paso más: cursar Ingeniería Informática en la Universidad de Zaragoza para dominar las bases teóricas y la computación.',
        'about.page.p2': 'Durante mi etapa en Hiberus, trabajé en proyectos reales usando Angular y Spring Boot bajo metodologías ágiles. Esta experiencia me dio una visión práctica y resolutiva del desarrollo que ahora combino con los conocimientos algorítmicos y de IA de la carrera.',
        'education.title': 'Estudios',
        'education.item1.degree': 'Ingenieria Informatica con mencion en computacion',
        'education.item1.school': 'Universidad de Zaragoza - 2023 a Actualmente',
        'education.item2.degree': 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
        'education.item2.school': 'Septiembre 2021 - Junio 2023 | CPIFP Los Enlaces',
        'experience.title': 'Experiencia laboral relevante',
        'experience.item1.year': 'Julio 2023 - Agosto 2023 | Hiberus',
        'experience.item1.role': 'Full-stack developer',
        'experience.item1.copy': 'Estuve trabajando en el desarrollo de una pagina web mediante Java y Angular, trabajando siguiendo metodologias agiles.',
        'experience.item2.year': 'Marzo 2023 - Julio 2023 | Hiberus',
        'experience.item2.role': 'Estudiante en practicas',
        'experience.item2.copy': 'Estuve adquiriendo experiencia en desarrollo web con Java, viendo como se desarrollaban las API REST y realizando un curso interno.',
        'projects.title': 'Proyectos destacados',
        'projects.copy': 'SeCloud es mi proyecto final de DAM: una app nativa Android en Java para gestionar y sincronizar archivos en la nube con Firebase y arquitectura basada en ViewModels.',
        'projects.github.more': 'Tengo más proyectos de la universidad y el grado superior en mi GitHub aparte del repo completo de SeCloud y el portfolio.',
        'projects.page.title': 'Proyectos',
        'projects.card1.title': 'SeCloud',
        'projects.card1.copy': 'Aplicacion nativa Android en Java para gestionar y sincronizar archivos en la nube. Integra Firebase Auth, Storage y Firestore con arquitectura basada en Fragments y ViewModels.',
        'projects.card1.link': 'https://github.com/josesecadura/SeCloud',
        'social.github': 'https://github.com/josesecadura',
        'social.linkedin': 'https://www.linkedin.com/in/jose-secadura/',
        'contact.title': 'Hablemos',
        'contact.copy': 'Si estás te interesa mi perfil para practicas o una primera entrevista, estare encantado de conectar. Te dejo también mi gmail: jsecadura1@gmail.com',
        'contact.page.title': 'Contacto',
        'contact.page.copy': 'Si te interesa mi perfil para prácticas, colaboraciones o una primera entrevista, estaré encantado de conectar contigo. Escríbeme y podemos programar una llamada.',
        'contact.linkedin.cta': 'Conectemos por LinkedIn',
        'contact.form.name': 'Nombre',
        'contact.form.message': 'Mensaje',
        'contact.form.send': 'Enviar',
        'tech.title': 'Tecnologías con las que he trabajado',
        'tech.copy': 'Herramientas y lenguajes con los que he trabajado profesional y académicamente.',
        'tech.level.high': 'Alto',
        'tech.level.medium': 'Medio',
        'tech.name.java': 'Java',
        'tech.name.cpp': 'C++',
        'tech.name.python': 'Python',
        'tech.name.haskell': 'Haskell',
        'tech.name.angular': 'Angular',
        'tech.name.sql': 'SQL',
    },
    en: {
        'meta.siteTitle': 'Portfolio',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'header.role': 'Software Engineering Student',
        'header.theme': 'Theme',
        'header.lang': 'ES',
        'hero.kicker': '',
        'hero.title': 'Hi, I am Jose!',
        'hero.copy': 'Software Engineering student specializing in Computing. Focused on building efficient software and deepening my expertise in the foundations of Artificial Intelligence.',
        'hero.cta': 'See projects',
        'hero.secondary': 'Contact me',
        'about.title': 'About me',
        'about.copy': 'My programming journey started with a Higher Vocational Degree (DAM). After my internship at Hiberus and working as a Full Stack developer, I decided to take a step further: studying Computer Engineering at the University of Zaragoza to master the theoretical foundations and computing.\n\nDuring my time at Hiberus, I worked on real-world projects using Angular and Spring Boot under agile methodologies. This experience gave me a practical, problem-solving view of development that I now combine with the algorithmic and AI knowledge from my degree.\n\nCurrently, I am looking for a university internship or projects for summer 2026, either in Spain or abroad. My goal is to join a team where I can continue to grow, add value, and solve complex problems with clean code.',
        'about.page.title': 'About me',
        'about.page.p1': 'My programming journey started with a Higher Vocational Degree (DAM). After my internship at Hiberus and working as a Full Stack developer, I decided to take a step further: studying Computer Engineering at the University of Zaragoza to master the theoretical foundations and computing.',
        'about.page.p2': 'During my time at Hiberus, I worked on real-world projects using Angular and Spring Boot under agile methodologies. This experience gave me a practical, problem-solving view of development that I now combine with the algorithmic and AI knowledge from my degree.',
        'education.title': 'Education',
        'education.item1.degree': 'Computer Engineering with specialization in Computing',
        'education.item1.school': 'University of Zaragoza - 2023 to Present',
        'education.item2.degree': 'Higher Vocational Degree in Multiplatform Application Development',
        'education.item2.school': 'September 2021 - June 2023 | CPIFP Los Enlaces',
        'experience.title': 'Relevant work experience',
        'experience.item1.year': 'July 2023 - August 2023 | Hiberus',
        'experience.item1.role': 'Full-stack developer',
        'experience.item1.copy': 'I worked on developing a web application using Java and Angular, following agile methodologies.',
        'experience.item2.year': 'March 2023 - July 2023 | Hiberus',
        'experience.item2.role': 'Intern Developer',
        'experience.item2.copy': 'I gained experience in web development with Java, learning how REST APIs were built and completing an internal course.',
        'projects.title': 'Featured projects',
        'projects.copy': 'SeCloud is my final DAM project: a native Android app in Java to manage and sync cloud files using Firebase and a ViewModel-based architecture.',
        'projects.github.more': 'I have more university and vocational degree projects on my GitHub, apart from the complete SeCloud repo and this portfolio.',
        'projects.page.title': 'Projects',
        'projects.card1.title': 'SeCloud',
        'projects.card1.copy': 'Native Android app in Java for cloud file management and synchronization. Built with Firebase Auth, Storage and Firestore using a Fragments and ViewModels architecture.',
        'projects.card1.link': 'https://github.com/josesecadura/SeCloud',
        'social.github': 'https://github.com/josesecadura',
        'social.linkedin': 'https://www.linkedin.com/in/jose-secadura/',
        'contact.title': 'Let us talk',
        'contact.copy': 'If you are interested in my profile for an internship or a first interview, I would be glad to connect. You can also reach me at my email: jsecadura1@gmail.com',
        'contact.page.title': 'Contact',
        'contact.page.copy': 'If you are interested in my profile for internships, collaborations, or a first interview, I would be glad to connect. Write me and we can schedule a call.',
        'contact.linkedin.cta': 'Let us connect on LinkedIn',
        'contact.form.name': 'Name',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send',
        'tech.title': 'Tech Stack',
        'tech.copy': 'Tools and languages I have worked with professionally and academically.',
        'tech.level.high': 'High',
        'tech.level.medium': 'Medium',
        'tech.name.java': 'Java',
        'tech.name.cpp': 'C++',
        'tech.name.python': 'Python',
        'tech.name.haskell': 'Haskell',
        'tech.name.angular': 'Angular',
        'tech.name.sql': 'SQL',
    }
} as const;

export type TranslationKey = keyof typeof ui.es;

export function useTranslations(lang: Language) {
    return function t(key: TranslationKey) {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

export function withLangPath(lang: Language, path: string) {
    const normalizedPath = path === '' ? '/' : path;
    return normalizedPath === '/' ? `/${lang}` : `/${lang}${normalizedPath}`;
}

export function switchLanguagePath(lang: Language, currentPath: string) {
    const targetLang: Language = lang === 'es' ? 'en' : 'es';
    const normalizedPath = currentPath.replace(/^\/(es|en)(?=\/|$)/, '') || '/';
    return withLangPath(targetLang, normalizedPath);
}