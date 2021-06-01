export const labels = {
    click: {
        en: 'click for sound',
        de: 'klick für Ton',
        ja: 'JAPANESE GOES HERE',
        ru: 'щелчок',
    },
    projects: {
        en: 'projects',
        de: 'projekte',
        ja: 'JAPANESE GOES HERE',
        ru: 'проекты',
    },
    visit: {
        en: 'visit online version',
        de: 'Online Version ansehen',
        ja: 'JAPANESE GOES HERE',
        ru: 'посетить онлайн версию',
    },
    playAudioSample: {
        en: 'play audio sample',
        de: 'Hörprobe abspielen',
    },
    audioOutput: {
        en: 'audio output',
        de: 'Tonausgabe',
    },
    nextButton: {
        en: 'next image or video',
        de: 'nächstes Bild oder Video',
    },
    prevButton: {
        en: 'previous image or video',
        de: 'letztes Bild oder Video',
    },
    item: {
        en: 'item',
        de: 'Element',
    },
    ofLabel: {
        en: 'of',
        de: 'von',
    },
    projectContent: {
        en: 'images and videos of the project',
        de: 'Bilder und Videos des Projektes',
    },
}

export const content = {
    about: {
        en: `
        <p>Hello, I’m Cornelius!</p>
        <p>I’m interested in voice interfaces, affective computing, UX research, generative art, software engineering, physical computing, psychology, photography and project management.</p>
        <p>While in university I ran the web design agency Awesome Boys and I worked as an event producer at Apple Retail.</p>
        <p>I like learning new things, feedback, mentoring, clear communication, bread with butter and Apfelschorle.</p>
        <p>Drop me a <a href="mailto:cornelius.carstens@me.com">line or two</a> to get in touch!</p>
        `,
        de: `
        <p>Hallo, ich bin Cornelius!</p>
        <p>Ich beschäftige mich mit Sprachinterfaces, Affective Computing, generativer Kunst, Design Research, Software Engineering, Physical Computing, Psychologie, Fotografie und Projektmanagement.</p>
        <p>Neben meinem Studium habe ich die Web Design Agentur Awesome Boys geführt und als Event Producer bei Apple Retail gearbeitet.</p>
        <p>Ich mag es, neue Dinge zu lernen, Feedback zu bekommen, Mentoring, klare Kommunikation, Brot mit Butter und Apfelschorle.</p>
        <p><a href="mailto:cornelius.carstens@me.com">Schreib mir</a> gerne!</p>
        `,
        ja: 'JAPANESE GOES HERE',
        ru: `<p>Привет, я Корнелиус</p>
        <p>междисциплинарный студент визуальной коммуникации с интересом к веб-разработке, дизайну, модной фотографии и физическим вычислениям.</p>
    <p>во время учебы я руководил агентством веб-дизайна Удивительные ребята которое в настоящее время работает на Apple.</p>
<p>Мне нравится узнавать новое, общаться, работать, читать, импровизировать на фортепиано, есть хлеб с маслом и пить яблочный напиток.</p>
<p>Я с нетерпением жду <a href="mailto:cornelius.carstens@me.com">ваше мнение, отзыв</a>.</p>`,
    },
    projects: [{
            title: 'Prototyping an Autonomous Virtual Assistant',
            year: 2019,
            description: {
                en: `<p>“Ava” is an autonomous virtual assistant that solves complex tasks in the user’s private and business life.</p><p>The concept was created after multiple stages of experimental UX research. An interactive voice prototype of “Ava” was implemented in Python using wit.ai for intent detection and named entity extraction.</p>`,
            },
            url: {
                uri: 'https://ava.how',
                label: {
                    en: 'Concept Overview',
                },
            },
            media: [{
                    src: 'assets/projects/ava/01_ava_name_cornelius_carstens.png',
                    description: {},
                    alt: {
                        en: 'Logo of Ava',
                    },
                },
                {
                    src: 'assets/projects/ava/02_ava_network_cornelius_carstens.png',
                    description: {
                        en: "Ava is communicating with their user as well as other user's virtual assistants in order to solve a task",
                    },
                    alt: {
                        en: 'three robots connecting each other and their users',
                    },
                },
                {
                    src: 'assets/projects/ava/04_ava_scripted_conversation_cornelius_carstens.png',
                    description: {
                        en: 'In the process of creating the concept multiple fictional dialogues were written based on formalized planning strategies',
                    },
                    noShadow: true,
                    alt: {
                        en: 'screenplay script with ava and a user in the leading roles',
                    },
                },
                {
                    src: 'assets/projects/ava/05_ava_training_cornelius_carstens.png',
                    description: {
                        en: "Trust between user and assistant is vital - the more mutual trust there is, the less specific the user's queries have to be",
                    },
                    alt: {
                        en: 'coordinate system showing trust growing over time while required detail is decreasing over time',
                    },
                },
                {
                    src: 'assets/projects/ava/03_ava_recipe_cornelius_carstens.png',
                    description: {
                        en: 'Ava has multiple recipies in order to make meaningful suggestions',
                    },
                    alt: {
                        en: 'nested flowchart of logical processing of a user query',
                    },
                },
            ],
        },
        {
            title: 'Conversation with LEA',
            year: 2017,
            description: {
                de: `
                <p>Interaktive Installation bei der die Betrachtenden einzeln in einem Kinderzelt aus Tüchern sitzen. In dieser intimen Atmosphäre entwickelt sich ein Gespräch zwischen einer kindlich klingenden Computerstimme und der Betrachterin. Die Stimme stellt Fragen mit denen sie die menschliche Welt zu verstehen versucht. Bedingt durch die Antworten der Teilnehmer ist der Gesprächsverlauf in jedem Gespräch unterschiedlich.</p>
                <p>Ausgestellt auf dem World Usability Day Berlin 2017</p>
                `,

                en: `
                	<p>Interactive Installation with a voice interface that has the personality of a robot child, curious about the human world. The participants sit one by one in a children’s tent in dim, warm light. In this intimate atmosphere, a conversation between the child-like synthetic voice and the interacting visitor develops.
The conversation addresses every day life topics along with ethical questions and ends when LEA asks whether or not the participator wants to become friends with her.</p>
                          <p>Exhibited at World Usability Day Berlin 2017</p>
                `,
                ja: 'JAPANESE GOES HERE',
                ru: `<p>Для этой инсталляции зрители сидят один за другим в детской палатке.
            В этой интимной атмосфере развивается разговор между детским звучащим синтетическим голосом и самим посетителем.
                Голос имитирует любопытство ребенка, задает вопросы, направленные на понимание того, как работает мир людей.
                Исходя из ответов участника, разговор идет в разных направлениях.</p>
        Это я показал на Всемирный день юзабилити в Берлине в 2017 году.`,
            },
            url: ``,
            globalAudio: {
                src: 'assets/projects/lea/lea_cornelius_carstens.mp3',
            },
            media: [
                // {
                //     src: 'assets/projects/lea/04_lea_cornelius_carstens.jpg',
                //     description: {
                //         en: ``,
                //         de: ``
                //     }
                // },
                {
                    src: 'assets/projects/lea/01_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        After kicking off their shoes, the visitors enter the tent through a narrow opening.
                        The atmosphere creates a calm and trusting mood.
                        `,
                        de: 'Nachdem die Besucher ihre Schuhe ausgezogen haben betreten sie durch eine schmale Öffnung das Zelt.\n' +
                            'Die Atmosphäre zielt darauf ab die Teilnehmer in eine entspannte und vertrauende Haltung zu bringen.',
                        ja: 'JAPANESE GOES HERE',
                        ru: `Сняв обувь, посетители входят в палатку через узкое отверстие
            Атмосфера направлена ​​на то, чтобы принести посетителям спокойное и доверительное настроение`,
                    },
                    alt: {
                        en: 'interior of the tent',
                        de: 'Innenraum des Zeltes',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Интерьер шатра',
                    },
                },
                {
                    src: 'assets/projects/lea/02_lea_cornelius_carstens.jpg',
                    description: {
                        en: 'Construction of the tent: left is the tent, right is the access tunnel',
                        de: 'Zeltkonstruktion; links Zelt, rechts Zugangstunnel mit Platz für die Türe des Raumes',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Конструкция шатра: левый шатер, правый туннель с пространством для двери комнаты',
                    },
                    alt: {
                        en: "exterior view of the tent's construction",
                        de: 'Zeltkonstruktion von Außen',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'внешний вид конструкции палатки',
                    },
                },
                {
                    src: 'assets/projects/lea/03_lea_cornelius_carstens.jpg',
                    description: {
                        en: 'hand written draft of the conversation sequences',
                        de: 'Handschriftlicher Entwurf der Gesprächssequenzen',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'рукописный черновик последовательности разговоров',
                    },
                    alt: {
                        en: 'Original draft of the conversation sequences',
                        de: 'Grundentwurf der Gesprächssequenzen',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Первоначальный черновик последовательности бесед',
                    },
                },
                {
                    src: 'assets/projects/lea/07_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                       The conversation consists of individual sequences containing Lea's reaction to the participants responses.
                        `,
                        de: `
                        Das Gespräch ist anhand einzelner Themen in Sequenzen unterteilt. Sequenzen beinhalten Leas Reaktionen auf die Antworten der Teilnehmer.
                        `,
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Разговор имеет структуру отдельных последовательностей, каждая из которых имеет свою тему.Последовательности содержат реакции Леа на ответы участника. ',
                    },
                    alt: {
                        en: `written conversation flow with multiple levels of nesting`,
                    },
                },
                {
                    src: 'assets/projects/lea/09_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        Lea understands affirmative, negative, and undetermined responses. For some questions, she expects "wildcard" answers and acknowledges the response.
                        `,
                        de: `
                        Lea versteht bejahende, verneinende und unentschlossene Antworten. Zudem erwartet sie auf manche Fragen eine freie Antwort, die sie zur Kenntnis nimmt.
                        `,
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Леа понимает позитивные, негативные и неопределенные ответы. Более того, на некоторые вопросы она ожидает свободных ответов и подтверждает ответ',
                    },
                    alt: {
                        en: `written conversation flow with multiple levels of nesting`,
                    },
                },
                //             {
                //                 src: 'assets/projects/lea/05_lea_cornelius_carstens.jpg',
                //                 description: {
                //                     en: `
                //                     Leas voice uses vocal smilies to enrich her expressions with meaning and accentuation.
                // 				In conjunction with precisely controlled delays, an impression of lifelike comprehension is given.
                //                     `,
                //                     de: `
                //                     Leas Stimme verfügt über Vocal Smileys, die den Aussagen Betonung und Ausdruck hinzufügen.
                // 				In Verbindung mit präzise austarierten Verzögerungen wird der Eindruck von menschlichem Verständnis erzeugt.
                //                     `,
                //                     ja: 'JAPANESE GOES HERE',
                //                     ru: 'Голос Леа использует голосовые смайлики, чтобы обогатить свои выражения смыслом и интонацией.В сочетании с точно контролируемыми паузами между словами возникает впечатление человеческого понимания'
                //                 }
                //             },
                //             {
                //                 src: 'assets/projects/lea/06_lea_cornelius_carstens.jpg',
                //                 description: {
                //                     en: `
                //                     The conversation can be clustered in three phases. In the beginning Lea asks questions on natural science matters.
                // 				The second phase deals with social norms that regulate the daily human interaction. In the last phase she inquires about ethical questions.
                //                     `,
                //                     de: `
                //                     Das Gespräch gliedert sich in drei Phasen. Zu Beginn stellt Lea weltliche, naturwissenschaftliche Fragen.
                // 				Die zweite Phase bezieht sich auf psychosoziale Normen, die den tagtäglichen Umgang mit anderen Menschen betreffen.
                // 				Die letzte Phase befasst sich mit moralischen Fragestellungen.
                //                     `,
                //                     ja: 'JAPANESE GOES HERE',
                //                     ru: `Диалог можно сгруппировать в три этапа. Сначала Леа задает вопросы по естественным наукам.
                // Второй этап касается социальных норм, регулирующих повседневное взаимодействие человека. На последнем этапе она интересуется этическими вопросами`
                //                 }
                //             },
                //             {
                //                 src: 'assets/projects/lea/08_lea_cornelius_carstens.jpg',
                //                 description: {
                //                     en: `
                //                     'Is it ok to kill people I don't like?' is one of the core questions of the project.
                // 				Participants reported that it nearly impossible to respond affirmatively, even as a joke, because they felt somewhat responsible for Lea.
                //                     `,
                //                     de: `
                //                     Die Frage ob man Menschen, die man nicht mag töten darf ist eine der Kernfragen.
                // 				Teilnehmer haben die Rückmeldung gegeben, dass es aufgrund des Verantwortungsbewusstseins für Lea schwer fällt auch nur zum Scherz mit 'Ja' zu antworten.
                //                     `,
                //                     ja: 'JAPANESE GOES HERE',
                //                     ru: `Нормально ли убивать людей, которые мне не нравятся?"это один из ключевых вопросов проекта.
                // Участники ответили, что это почти невозможно. Даже если в шутку ответить "да", то через некоторое время вы чувствуете ответственность за нее`
                //                 }
                //             },
            ],
        },
        {
            title: 'Poem Generator',
            year: 2016,
            description: {
                en: `
                <p>experimental approach to text production</p>
                <p>The python based algorithm analyses a text grammatically and rearranges it by forming correct sentences that follow a poetic scheme.
                The text output was used to create content for an experimental magazine project.</p>
                `,
                de: `
                <p>Poem Generator</p>
                <p>Der in Python geschriebene Algorithmus analysiert einen Text grammatikalisch und formt Sätze, die einem poetischen Schema folgen. Der Generator wurde u.A. zur Textproduktion für ein experimentelles Magazinprojekt verwendet.</p>
             
                `,
                ja: 'JAPANESE GOES HERE',
                ru: `экспериментируйте с излишней этикой
    создание текстового контента и фэшн-фотографии для междисциплинарного журнального проекта
    Стихи, которые были созданы на основе коллективных мыслей, составляют весь текстовый контент журнала`,
            },
            // globalAudio: {
            //     src: 'assets/nantes.mp3'
            // },
            media: [{
                    src: 'assets/projects/eee/00_eee_cornelius_carstens.mp4',
                    description: {
                        en: `
                        Using <em>pattern</em>, a natural language processing library for python, the input text is grammatically analyzed.
                        `,
                        de: `
                        Mit Hilfe von pattern einer NLP python Library wird der Ausgangstext grammatikalisch/syntaktisch analysiert.
                        `,
                        ja: 'JAPANESE GOES HERE',
                        ru: 'С помощью <em>pattern < / em> библиотека обработки естественного языка,которая была передана для языка програмирования pyton,входной текст граммматически анализируется',
                    },
                    alt: {
                        en: `words are shuffled and are slowly sorted into poem verses`,
                    },
                },
                {
                    src: 'assets/projects/eee/01_eee_cornelius_carstens.jpg',
                    noShadow: true,
                    description: {
                        en: `
                        `,
                        de: `
                        `,
                    },
                    alt: {
                        en: `magazine cover showing a long poem and a detail of a portrait`,
                    },
                },
                {
                    src: 'assets/projects/eee/02_eee_cornelius_carstens.jpg',
                    description: {
                        en: `Part of the generated manifesto for the text cover
                        `,
                        de: `Teil des generierten Manifests auf dem Text-Cover
                        `,
                    },
                    alt: {
                        en: `detail of a magazine cover showing a long poem`,
                    },
                },
                {
                    src: 'assets/projects/eee/03_eee_cornelius_carstens.jpg',
                    noShadow: true,
                    description: {
                        en: `
                        In order to compose a new verse, sentence parts are grouped together randomly and conjugated accordingly.
                        `,
                        de: `
                        Nachdem neue Sätze zusammengefügt wurden werden die Satzglieder zu Versen zusammengeführt und entsprechend konjugiert.
                        `,
                        ja: 'JAPANESE GOES HERE',
                        ru: 'После того, как новые предложения были собраны вместе, фразы объединяются в стих и комбинируются соответственно',
                    },
                    alt: {
                        en: `open magazine with poem verses running over the pages`,
                    },
                },
                {
                    src: 'assets/projects/eee/04_eee_cornelius_carstens.jpg',
                    noShadow: true,
                    description: {
                        en: `
                        `,
                        de: `
                        `,
                    },
                    alt: {
                        en: `open magazine with a dimly lit portrait and a poem verse`,
                    },
                },
                {
                    src: 'assets/projects/eee/05_eee_cornelius_carstens.jpg',
                    noShadow: true,
                    description: {
                        en: `
                        `,
                        de: `
                        `,
                    },
                    alt: {
                        en: `open magazine with the words I wear you running over both pages`,
                    },
                },
            ],
        },
        {
            title: 'Marius Hirschel',
            year: 2017,
            description: {
                en: 'Design and development of custom portfolio for the Berlin based hair stylist Marius Hirschel',
                de: 'Design und Entwicklung von Custom Portfolio für Hair Stylist aus Berlin',
                ja: 'JAPANESE GOES HERE',
                ru: 'Дизайн и разработка индивидуального портфолио для берлинского парикмахера',
            },
            media: [{
                    src: 'assets/projects/mh/01_marius_hirschel_cornelius_carstens.mp4',
                    description: {
                        en: "In order to guide the viewer's attention to each image, the photos do not scroll vertically but fade in-and-out as the user is scrolling.",
                        de: 'Um die Aufmerksamkeit der Benutzer auf jedes einzelne Bild zu lenken werden die Inhalte nicht vertikal bewegt sondern durch scrollen auf der Seite ein und aus gefaded.',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Чтобы привлечь внимание зрителя к каждому изображению, фотографии не прокручиваются вертикально, а исчезают при прокрутке страницы',
                    },
                    alt: {
                        en: `images on a website are fading in and out while the user scrolls`,
                    },
                },
                {
                    src: 'assets/projects/mh/02_marius_hirschel_cornelius_carstens.jpg',
                    description: {
                        en: 'In order to work without a hint to scroll, the contents the first image is positioned in a way that forces the user to scroll in order to see it fully.',
                        de: 'Um auf einen Hinweis zum Scrollen verzichten zu können ist das erste Bild so platziert, dass auf jeden Fall gescrollt werden muss.',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Для того, чтобы работать без подсказки, первое изображение расположено таким образом, что заставляет пользователя прокручивать, чтобы увидеть его полностью',
                    },
                    alt: {
                        en: `detail of an image being placed slightly towards the bottom of the page`,
                    },
                },
            ],
        },
        {
            title: 'Fear',
            year: 2016,
            description: {
                en: 'Rapid prototype of an assault rifle that automatically aims at the head of the viewer. This installation is a critical examination of autonomous combat systems and automated warfare.',
                de: 'Rapid Prototype einer Installation bei der sich ein Sturmgewehr automatisch auf den Kopf der Betrachter ausrichtet und sie verfolgt. Kritische Auseinandersetzung mit autonomen Waffensystemen und automatisierter Kriegsführung.',
                ja: 'JAPANESE GOES HERE',
                ru: 'Быстрый прототип штурмовой винтовки, которая автоматически целится в голову зрителя. Данная установка представляет собой критическое экспертизу автономных боевых систем и средств автоматизированной борьбы',
            },
            darkMode: true,
            // globalAudio: {
            //     src: ``
            // },
            media: [{
                    src: 'assets/projects/fear/01_fear_cornelius_carstens.jpg',
                    description: {
                        en: 'Mockup of a possible exhibition of the prototype',
                        de: 'Mockup in möglichem Ausstellungskontext',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Макет возможной выставки прототипа',
                    },
                    alt: {
                        en: `assault rifle hanging from the ceiling in a gallery space`,
                    },
                },
                {
                    src: 'assets/projects/fear/02_fear_cornelius_carstens.mp4',
                    description: {
                        en: 'By using video imaging in conjunction with face recognition, the position of the viewer is calculated. The servo motors receive that information via serial communication and adjust their angles respectively.',
                        de: 'Über ein Videobild und Gesichtserkennung wird die Position des Betrachters ermittelt. Auf dieser Grundlage werden Servomotoren seriell angesteuert und bewegen das Gewehr an die entsprechende Position.',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'При использовании видео в сочетании с распознаванием лиц рассчитывается позиция зрителя. Моторы сервопривода получают эту информацию через серийное сообщение и регулируют их углы соответственно',
                    },
                    alt: {
                        en: `interaction between a person moving infront of a suspended plastic assault rifle that is pointing towards the person as they move`,
                    },
                },
                {
                    src: 'assets/projects/fear/03_fear_cornelius_carstens.jpg',
                    description: ``,
                    alt: {
                        en: `plastic assault rifle taped to its suspension`,
                    },
                },
                {
                    src: 'assets/projects/fear/04_fear_cornelius_carstens.mp4',
                    description: {
                        en: 'first tests combining facial recognition and serial communication',
                        de: 'Grundlegende Tests zu Gesichtserkennung und serieller Kommunikation',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'первые тесты, сочетающие распознавание лиц и последовательную связь',
                    },
                    alt: {
                        en: `person moving their head over a line triggering a motor to move`,
                    },
                },
            ],
        },
        {
            title: 'Goetze',
            year: 2016,
            description: {
                en: 'Website and online shop for a Berlin based clothing label',
                de: 'Website und Online Shop für ein Mode-Label aus Berlin',
                ja: 'JAPANESE GOES HERE',
                ru: 'Сайт и интернет-магазин берлинской марки мужской одежды',
            },
            darkMode: false,
            url: 'http://goetze.xyz',
            media: [{
                    src: 'assets/projects/goetze/01_goetze_cornelius_carstens.mp4',
                    description: ``,
                    alt: {
                        en: `website with fashion photos and a branded video playing`,
                    },
                },
                {
                    src: 'assets/projects/goetze/05_goetze_cornelius_carstens.mp4',
                    description: {
                        en: 'Inspired by images of <a href="http://www.tvfilmprops.co.uk/userdata/prodpics/PRODPIC-2426-6.jpg" target="_blank">stacks of tube TVs</a>, we developed a video wall that displays accordingly produced videos.',
                        de: 'Inspiriert durch <a @click.stop="" href="http://www.tvfilmprops.co.uk/userdata/prodpics/PRODPIC-2426-6.jpg" target="_blank">Röhrenfernseher-Wände</a> haben wir ein video wall feature entwickelt, das entsprechend produzierte Videos synchron wiedergibt',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Вдохновленный образами <a href="http://www.tvfilmprops.co.uk/userdata/prodpics/PRODPIC-2426-6.jpg" target="_blank">старые телевизоры,стоящие друг на друге и образующие стену</a> мы разработали видео-характеристики стены,которые показывают все видео одновременно',
                    },
                    alt: {
                        en: `website showing product photos and six videos playing in sync`,
                    },
                },
                {
                    src: 'assets/projects/goetze/02_goetze_cornelius_carstens.jpg',
                    description: ``,
                    alt: {
                        en: `online store with a grid of product photos`,
                    },
                },
                {
                    src: 'assets/projects/goetze/03_goetze_cornelius_carstens.jpg',
                    description: ``,
                    alt: {
                        en: `product detail page with the product added to the cart`,
                    },
                },
                {
                    src: 'assets/projects/goetze/04_goetze_cornelius_carstens.jpg',
                    description: ``,
                    alt: {
                        en: `text and images combined on a webpage`,
                    },
                },
            ],
        },
        {
            title: {
                en: 'Stethoscope',
                de: 'Stethoskop',
                ja: 'JAPANESE GOES HERE',
                ru: 'Стетоскоп',
            },
            year: 2018,
            darkMode: true,
            description: {
                en: `
                <p>embodied interfaces</p>
                <p>The confrontation between a participant and her body's signals is central to this installation. The participants listens to his or her own heartbeat using a stethoscope while standing in a dark room. In the center of the room, particles move upwards in a holographic projection in time with the heartbeat.</p>
                <p>Through eliminating external sensory input, I created an atmosphere where the participant's experience is unique to their internal feedback.</p>
                `,
                de: `
                <p>embodied interfaces</p>
                <p>Im Zentrum dieser Installation steht die Auseinandersetzung der Betrachter mit ihren körpereigenen Signalen. In einem dunklen Raum wird mithilfe eines Stethoskops der eigene Herzschlag abgehört. In der Raummitte bewegen sich Partikel im Takt des Herzschlags in einer holographischen Projektion.</p>
                <p>Die auditive und visuelle Wahrnehmung der Teilnehmer wird nahezu vollständig von Signalen des eigenen Körpers bestimmt während die meisten anderen Sinneseindrücke in diesem Aufbau vermieden werden.</p>`,
                ja: 'JAPANESE GOES HERE',
                ru: `<p>реализованные интерфейсы</p>
    <p>Ядром этой инсталляции является противостояние участника со своими телесными сигналами. Участники слушают свое собственное сердцебиение с помощью стетоскопа, стоя в темной комнате. В центре помещения частицы движутся вверх в темпе сердцебиения в голографической проекции.</p>
        <p>Слуховое и зрительное восприятие участника почти полностью управляется сигналами собственного тела, в то время как другие сенсорные впечатления избегаются</p>`,
            },
            media: [{
                    src: 'assets/projects/stethoscope/02_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'Please listen with headphones',
                        de: 'Bitte mit Kopfhörern hören',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Пожалуйста, слушайте в наушниках',
                    },
                    alt: {
                        en: `blood particles rising upwards following the heartbeat`,
                    },
                },
                {
                    src: 'assets/projects/stethoscope/01_stethoscope_cornelius_carstens.gif',
                    description: {
                        en: 'The unrestricted viewing angle allows participants to roam freely while interacting with the installation.',
                        de: 'Durch den uneingeschränkten Betrachtungswinkel kann sich die Betrachterin frei im Raum bewegen.',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Благодаря неограниченному углу обзора участник может свободно перемещаться во время взаимодействия с установкой',
                    },
                    alt: {
                        en: `blood particles in a hologram shown from multiple angles`,
                    },
                },
                {
                    src: 'assets/projects/stethoscope/03_stethoscope_cornelius_carstens.jpg',
                    description: {
                        en: 'Customized stethoscope with built in microphone and headphones',
                        de: 'Manipuliertes Stethoskop mit eingebautem Tonabnehmer und Kopfhörern',
                        ja: 'JAPANESE GOES HERE',
                        ru: `Настроенный
                стетоскоп со встроенным микрофоном и наушниками`,
                    },
                    alt: {
                        en: `stethoscope with electric cables running in and out of it`,
                    },
                },
                // {
                //     sketchName: 'DotCloud',
                //     description: {
                //         en: 'Draft of the particle simulation based on <a href="https://natureofcode.com" target="_blank">\'The Nature of Code\', Shiffmann</a>',
                //         de: 'Vorstufe der Partikel-Simulation auf Basis von <a href="https://natureofcode.com" target="_blank">\'The Nature of Code\', Shiffmann</a>',
                //         ja: 'JAPANESE GOES HERE',
                //         ru: 'Незавершенное состояние моделирования частиц на основе <a href="https://natureofcode.com" target="_blank">\'The Nature of Code\', Шиффман</a>'
                //     }
                // },
                {
                    src: 'assets/projects/stethoscope/04_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'In order to guarantee only a singular reflection in the holograph, I used 1.5 mm acrylic sheets.',
                        de: 'Damit es im Hologramm nur eine einzelne sichtbare Spiegelung gibt, ist die Pyramide aus 1,5 mm dünnem Acrylglas gefertigt.',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Чтобы гарантировать одиночное отражение, видимое в голограмме,толщина акриловых листов для пирамиды должна составлять 1,5 мм.',
                    },
                    alt: {
                        en: `glue being applied to acrylic glas with a hypothermic needle`,
                    },
                },
                {
                    src: 'assets/projects/stethoscope/05_stethoscope_cornelius_carstens.jpg',
                    description: {
                        en: 'Prototype of the acrylic pyramid for the holograph',
                        de: 'Prototyp der Acryl-Pyramide für das Hologramm',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Прототип акриловой пирамиды для голографа',
                    },
                    alt: {
                        en: `acrylic pyramid fully assempled`,
                    },
                },
                {
                    src: 'assets/projects/stethoscope/06_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'Adjusting the suspension of the acrylic pyramid',
                        de: 'Testbild zur Justierung der Aufhängung',
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Тестовое изображение для регулировки подвески акриловой пирамиды',
                    },
                    alt: {
                        en: `suspended acrylic pyramid showing a test image`,
                    },
                },
            ],
        },
        {
            title: 'Christian Stemmler',
            year: 2016,
            description: {
                en: 'Design and development of custom portfolio for the Berlin based fashion stylist',
                de: 'Design und Entwicklung von Custom Portfolio für Mode Stylist aus Berlin',
                ja: 'JAPANESE GOES HERE',
                ru: 'Дизайн и разработка индивидуального портфолио для берлинского модного стилиста',
            },
            url: 'http://christianstemmler.com',
            media: [{
                    src: 'assets/projects/stemmi/02_christian_stemmler_cornelius_carstens.mp4',
                    description: ``,
                    alt: {
                        en: `website showing fashion photos arranged in an imperfect grid`,
                    },
                },
                {
                    src: 'assets/projects/stemmi/01_christian_stemmler_cornelius_carstens.jpg',
                    description: {
                        en: `
                        The layout resembles prints layed out on a table.
                        `,
                        de: `
                        Das Layout greift den visuellen Eindruck von Prints, die auf einem Tisch ausliegen auf.
                        `,
                        ja: 'JAPANESE GOES HERE',
                        ru: 'Регулируемый макет обеспечивает визуальное впечатление от печати, лежащей на столе.',
                    },
                    alt: {
                        en: `website showing fashion photos arranged in an imperfect grid`,
                    },
                },
                {
                    src: 'assets/projects/stemmi/03_christian_stemmler_cornelius_carstens.jpg',
                    description: ``,
                    alt: {
                        en: `website showing large fashion photos`,
                    },
                },
            ],
        },
    ],
}