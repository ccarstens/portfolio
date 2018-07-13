export const labels = {
    click: {
        en: 'click',
        de: 'klick',
        ru: 'щелчок',
        ja: 'クリック'
    },
    projects: {
        en: 'projects',
        de: 'projekte',
        ja: 'プロジェクト',
        ru: 'проектов'
    },
    visit: {
        en: 'visit online version',
        de: 'Online Version ansehen'
    }
}

export default {
    about: {
        en: `
            <p>Hello, I’m Cornelius,</p>
            <p>an interdisciplinary student of visual communication with interest in web development, interaction design, fashion photography and physical computing.</p>
            <p>While studying I ran the web design agency <a href="http://awesome-boys.com">Awesome Boys</a> and am currently employed by Apple.</p>
            <p>I like learning new things, feedback, getting hired, reading, bread with butter piano improv and Apfelschorle.</p>
            <p>I am looking forward to <a href="mailto:cornelius.carstens@me.com">hearing from you</a>.</p>
            Best,
        `,
        de: `
            <p>Hallo, ich bin Cornelius,</p>
<p>ich studiere Kommunikationsdesign in Berlin und beschäftige mich mit Web Development, Interaktionsgestaltung, Modefotografie und Physical Computing.</p>
<p>Neben dem Studium habe ich die Web Design Agentur <a href="http://awesome-boys.com">Awesome Boys</a> geführt und arbeite momentan für Apple.</p>
<p>Ich mag es neue Dinge zu lernen, Feedback, Jobs bekommen, Lesen, Brot mit Butter, Klavierimprovisation und Apfelschorle.</p>
<p>Ich freue mich darauf von Euch zu <a href="mailto:cornelius.carstens@me.com">hören</a>.</p>
        `,
        ru: `
        <p>Привет, я Cornelius,</p>

<p>междисциплинарный студент визуальной коммуникации с фоном в модной фотографии, веб-разработкой, интерактивными установками и фортепианной музыкой.</p>

<p>Во время учебы я управлял агентством веб-дизайна Awesome Boys в течение двух лет с одним студентом и в настоящее время занимаюсь Apple.</p>

<p>Мне нравится изучать новые вещи, обратную связь, нанимать, читать, хлеб с маслом и Apfelschorle.</p>

<p>Я с нетерпением жду услышать от вас.</p>

<p>Лучший</p>
        `,
        ja: `
        <p>こんにちは、私はコーネリアスです、</p>

<p>ファッション写真、ウェブ開発、インタラクティブインスタレーション、ピアノ音楽の背景を持つ学際的なコミュニケーションの学生です。</p>

<p>勉強している間、私はWebデザインエージェンシーのAwesome Boysを2年間仲間と走り、現在Appleに雇われています。</p>

<p>私は新しいこと、フィードバック、雇用、読書、バターとApfelschorleのパンを学ぶのが好きです。</p>

<p>お返事を待っています。</p>

<p>ベスト</p>
        `


    },
    projects: [
        {
            title: 'Conversation with LEA',
            year: 2017,
            description: {
                de: `
                <p>Interaktive Installation bei der die Betrachtenden einzeln in einem Kinderzelt aus Tüchern sitzen. In dieser intimen Atmosphäre entwickelt sich ein Gespräch zwischen einer kindlich klingenden Computerstimme und der Betrachterin. Die Stimme stellt Fragen mit denen sie die menschliche Welt zu verstehen versucht. Bedingt durch die Antworten der Teilnehmer ist der Gesprächsverlauf in jedem Gespräch unterschiedlich.</p>
                <p>Ausgestellt auf dem World Usability Day Berlin 2017</p>
                `,
                en: `
                <p>For this installation the audience sits one by one in a children's tent. In this intimate atmosphere a conversation between a childish sounding synthetic voice and the interacting visitor develops.
The voice mimics the curiosity of a child by asking questions that aim at getting an understanding how the world of the humans works.
Based on the Answers of the participant the conversation takes different directions.</p>
                <p>Shown at World Usability Day Berlin 2017</p>
                `
            },
            url: '',
            globalAudio: {
                src: 'assets/projects/lea/lea_cornelius_carstens.mp3'
            },
            media: [

                {
                    src: 'assets/projects/lea/04_lea_cornelius_carstens.jpg',
                    description: {
                        en: '',
                        de: ''
                    }
                },
                {
                    src: 'assets/projects/lea/01_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        <p>After kicking off their shoes the visitors enter the tent through a narrow opening.</p>
                        <p>The atmosphere aims to bring the visitors in a calm and trusting mood.</p>
                        `,
                        de: 'Nachdem die Besucher ihre Schuhe ausgezogen haben betreten sie durch eine schmale Öffnung das Zelt.\n' +
                        'Die Atmosphäre zielt darauf ab die Teilnehmer in eine entspannte und vertrauende Haltung zu bringen.'
                    },
                    alt: {
                        en: 'interior of the tent',
                        de: 'Innenraum des Zeltes'
                    }
                },
                {
                    src: 'assets/projects/lea/02_lea_cornelius_carstens.jpg',
                    description: {
                        en: 'Construction of the tent; left is the tent, right is the access tunnel with space for the rooms door',
                        de: 'Zeltkonstruktion; links Zelt, rechts Zugangstunnel mit Platz für die Türe des Raumes',
                    },
                    alt: {
                        en: 'exterior view of the tent\'s construction',
                        de: 'Zeltkonstruktion von Außen'
                    }
                },
                {
                    src: 'assets/projects/lea/03_lea_cornelius_carstens.jpg',
                    description: {
                        en: 'hand written draft of the conversation sequences',
                        de: 'Handschriftlicher Entwurf der Gesprächssequenzen'
                    },
                    alt: {
                        en: 'Original draft of the conversation sequences',
                        de: 'Grundentwurf der Gesprächssequenzen'
                    }
                },
                {
                    src: 'assets/projects/lea/07_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        The conversation has a structure of single sequences which have their own topic each. The sequences contain Leas reactions to the responses of the participant.
                        `,
                        de: `
                        Das Gespräch ist anhand einzelner Themen in Sequenzen unterteilt. Sequenzen beinhalten Leas Reaktionen auf die Antworten der Teilnehmer.
                        `
                    }
                },
                {
                    src: 'assets/projects/lea/09_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        Lea understands affirmative, negative and undetermined responses. Moreover for some questions she expects free answers and acknowledges the response.
                        `,
                        de: `
                        Lea versteht bejahende, verneinende und unentschlossene Antworten. Zudem erwartet sie auf manche Fragen eine freie Antwort, die sie zur Kenntnis nimmt.
                        `
                    }
                },
                {
                    src: 'assets/projects/lea/05_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        Leas voice uses vocal smileys to enrich her expressions with meaning and accentuation. In conjunction with precisely controlled delays an impression of human comprehension comes up.
                        `,
                        de: `
                        Leas Stimme verfügt über Vocal Smileys, die den Aussagen Betonung und Ausdruck hinzufügen. In Verbindung mit präzise austarierten Verzögerungen wird der Eindruck von menschlichem Verständnis erzeugt.
                        `
                    }
                },
                {
                    src: 'assets/projects/lea/06_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        The conversation can be clustered in three phases. In the beginning Lea asks questions on secular and natural science matters. The second phase deals with social norms that regulate the daily human interaction. In the last phase she inquires about ethical questions.
                        `,
                        de: `
                        Das Gespräch gliedert sich in drei Phasen. Zu Beginn stellt Lea weltliche, naturwissenschaftliche Fragen. Die zweite Phase bezieht sich auf psychosoziale Normen, die den tagtäglichen Umgang mit anderen Menschen betreffen. Die letzte Phase befasst sich mit moralischen Fragestellungen.
                        `
                    }
                },
                {
                    src: 'assets/projects/lea/08_lea_cornelius_carstens.jpg',
                    description: {
                        en: `
                        'Is it ok to kill people whom I don't like?' is one of the core questions of the project. Participants gave the feedback that it nearly impossible, even just as a joke, to respond with 'Yes' since after some time you feel responsible for her.
                        `,
                        de: `
                        Die Frage ob man Menschen, die man nicht mag töten darf ist eine der Kernfragen. Teilnehmer haben die Rückmeldung gegeben, dass es aufgrund des Verantwortungsbewusstseins für Lea schwer fällt auch nur zum Scherz mit 'Ja' zu antworten.
                        `
                    }
                },
            ]
        },
        {
            title: 'Marius Hirschel',
            year: 2017,
            description: {
                en: 'Design and development of custom portfolio for berlin based hair stylist',
                de: 'Design und Entwicklung von Custom Portfolio für Hair Stylist aus Berlin'
            },
            url: 'http://mariushirschel.de',
            media: [
                {
                    src: 'assets/projects/mh/01_marius_hirschel_cornelius_carstens.mp4',
                    description: {
                        en: 'In order to guide the viewers attention to every single image, the photos do not scroll vertically but fade in an out governed scrolling on the page.',
                        de: 'Um die Aufmerksamkeit der Benutzer auf jedes einzelne Bild zu lenken werden die Inhalte nicht vertikal bewegt sondern durch scrollen auf der Seite ein und aus gefaded.'
                    }
                },
                {
                    src: 'assets/projects/mh/02_marius_hirschel_cornelius_carstens.jpg',
                    description: {
                        en: 'In order to work without a hint to scroll the contents the first image is positioned in a way that forces the user to scroll in order to see it fully.',
                        de: 'Um auf einen Hinweis zum Scrollen verzichten zu können ist das erste Bild so platziert, dass auf jeden Fall gescrollt werden muss.'
                    }
                }
            ]
        },
        {
            title: 'Fear',
            year: 2016,
            description: {
                en: 'Rapid prototype of an assault rifle that automatically aims at the head of the viewer. This installation is a critical examination of autonomous combat systems and automated warfare.',
                de: 'Rapid Prototype einer Installation bei der sich ein Sturmgewehr automatisch auf den Kopf der Betrachter ausrichtet und sie verfolgt. Kritische Auseinandersetzung mit autonomen Waffensystemen und automatisierter Kriegsführung.'
            },
            darkMode: true,
            // globalAudio: {
            //     src: ''
            // },
            media: [
                {
                    src: 'assets/projects/fear/01_fear_cornelius_carstens.jpg',
                    description: {
                        en: 'Mockup of a possible exhibition of the prototype',
                        de: 'Mockup in möglichem Ausstellungskontext',
                        ru: '',
                        ja: ''
                    }
                },
                {
                    src: 'assets/projects/fear/02_fear_cornelius_carstens.mp4',
                    description: {
                        en: 'By using video imaging in conjunction with face recognition the position of the viewer is calculated. The servo motors receive that information via serial communication and adjust their angles respectively.',
                        de: 'Über ein Videobild und Gesichtserkennung wird die Position des Betrachters ermittelt. Auf dieser Grundlage werden Servomotoren seriell angesteuert und bewegen das Gewehr an die entsprechende Position.'
                    }
                },
                {
                    src: 'assets/projects/fear/03_fear_cornelius_carstens.jpg',
                    description: ''
                },
                {
                    src: 'assets/projects/fear/04_fear_cornelius_carstens.mp4',
                    description: {
                        en: 'first tests combining facial recognition and serial communication',
                        de: 'Grundlegende Tests zu Gesichtserkennung und serieller Kommunikation'
                    }
                },
            ]
        },
        {
            title: 'Goetze',
            year: 2016,
            description: {
                en: 'Website and online shop for a berlin based menswear label',
                de: 'Website und Online Shop für Menswear Label aus Berlin'
            },
            darkMode: false,
            url: 'http://goetze.xyz',
            media: [
                {
                    src: 'assets/projects/goetze/01_goetze_cornelius_carstens.mp4',
                    description: ''
                },
                {
                    src: 'assets/projects/goetze/05_goetze_cornelius_carstens.mp4',
                    description: {
                        en: 'Inspired by images of <a href="http://www.tvfilmprops.co.uk/userdata/prodpics/PRODPIC-2426-6.jpg" target="_blank">stacks of tube TVs</a> we developed a video wall feature that displays accordingly produced videos synchronously',
                        de: 'Inspiriert durch <a @click.stop="" href="http://www.tvfilmprops.co.uk/userdata/prodpics/PRODPIC-2426-6.jpg" target="_blank">Röhrenfernseher-Wände</a> haben wir ein video wall feature entwickelt, das entsprechend produzierte Videos synchron wiedergibt'
                    }
                },
                {
                    src: 'assets/projects/goetze/02_goetze_cornelius_carstens.jpg',
                    description: ''
                },
                {
                    src: 'assets/projects/goetze/03_goetze_cornelius_carstens.jpg',
                    description: ''
                },
                {
                    src: 'assets/projects/goetze/04_goetze_cornelius_carstens.jpg',
                    description: ''
                },
            ]
        },
        {
            title: {
                en: 'Stethoscope',
                de: 'Stethoskop',
                ja: '聴診器',
                ru: 'стетоскоп'
            },
            year: 2018,
            darkMode: true,
            description: {
                en: `
                <p>embodied interfaces</p>
                <p>Core to this installation is the confrontation of the participant with her own bodily signals. The participants listens to their own heartbeat using a stethoscope while standing in a dark room. In the center of the room particles move upwards in the pace of the heart beat in a holographic projection.</p>
                <p>The auditive and visual perception of the participant is governed almost fully by signals of her own body while other sensory impressions are avoided.</p>
                `,
                de: `
                <p>embodied interfaces</p>
                <p>Im Zentrum dieser Installation steht die Auseinandersetzung der Betrachter mit ihren körpereigenen Signalen. In einem dunklen Raum wird mithilfe eines Stethoskops der eigene Herzschlag abgehört. In der Raummitte bewegen sich Partikel im Takt des Herzschlags in einer holographischen Projektion.</p>
                <p>Die auditive und visuelle Wahrnehmung der Teilnehmer wird nahezu vollständig von Signalen des eigenen Körpers bestimmt während die meisten anderen Sinneseindrücke in diesem Aufbau vermieden werden.</p>`,
                ru: 'интерактивная установка, соединяющая пользователя с ее собственным слухом, используя стетоскоп и голографическую проекцию',
                ja: '聴診器とホログラフィックプロジェクションを使用して、自分のヒアビートとユーザーを接続するインタラクティブインストール',
            },
            media: [
                {
                    src: 'assets/projects/stethoscope/01_stethoscope_cornelius_carstens.gif',
                    description: {
                        en: 'Due to the unrestricted viewing angle the participant can roam freely while interacting with the installation.',
                        de: 'Durch den uneingeschränkten Betrachtungswinkel kann sich die Betrachterin frei im Raum bewegen.'
                    }
                },
                {
                    src: 'assets/projects/stethoscope/02_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'Please listen with headphones',
                        de: 'Bitte mit Kopfhörern hören'
                    }
                },
                {
                    src: 'assets/projects/stethoscope/03_stethoscope_cornelius_carstens.jpg',
                    description: {
                        en: 'Customized stethoscope with built in microphone and headphones',
                        de: 'Manipuliertes Stethoskop mit eingebautem Tonabnehmer und Kopfhörern'
                    }
                },
                {
                    sketchName: 'DotCloud',
                    description: {
                        en: 'Work in progress state of the particle simulation based on \'nature of code\', Shiffmann',
                        de: 'Vorstufe der Partikel-Simulation auf Basis von \'Nature of Code\', Shiffmann'
                    }
                },
                {
                    src: 'assets/projects/stethoscope/04_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'In order to guarantee that there is only a single reflection visible in the holograph, the thickness of the acrylic sheets for the pyramid is 1.5 mm.',
                        de: 'Damit es im Hologramm nur eine einzelne sichtbare Spiegelung gibt, ist die Pyramide aus 1,5 mm dünnem Acrylglas gefertigt.'
                    }
                },
                {
                    src: 'assets/projects/stethoscope/05_stethoscope_cornelius_carstens.jpg',
                    description: {
                        en: 'Prototype of the acrylic pyramid for the holograph',
                        de: 'Prototyp der Acryl-Pyramide für das Hologramm'
                    }
                },
                {
                    src: 'assets/projects/stethoscope/06_stethoscope_cornelius_carstens.mp4',
                    description: {
                        en: 'Test image for adjusting the suspension of the acrylic pyramid',
                        de: 'Testbild zur Justierung der Aufhängung'
                    }
                },
            ]
        },
        {
            title: 'Christian Stemmler',
            year: 2016,
            description: {
                en: 'Design and development of custom portfolio for berlin based fashion stylist',
                de: 'Design und Entwicklung von Custom Portfolio für Mode Stylist aus Berlin'
            },
            url: 'http://christianstemmler.com',
            media: [
                {
                    src: 'assets/projects/stemmi/01_christian_stemmler_cornelius_carstens.jpg',
                    description: {
                        en: `
                        The adjustable layout resembles prints layed out on a table.
                        `,
                        de: `
                        Das justierbare Layout greift den visuellen Eindruck von Prints, die auf einem Tisch ausliegen auf.
                        `
                    }
                },
                {
                    src: 'assets/projects/stemmi/02_christian_stemmler_cornelius_carstens.mp4',
                    description: ''
                },
                {
                    src: 'assets/projects/stemmi/03_christian_stemmler_cornelius_carstens.jpg',
                    description: ''
                },
            ]
        },
        {
            title: 'EEE Magazine',
            year: 2016,
            description: {
                en: `
                <p>experiment excess ethics</p>
                <p>generation of text content and fashion photography for interdisciplinary magazine project</p>
                <p>Verses of a poem that was generated based on a collectively drafted text make up for the whole text content of the magazine.</p>
                ` ,
                de: `
                <p>Experiment Exzess Ethik</p>
                <p>Generierung von Textinhalten und Modefotografie für interdisziplinäres Magazinprojekt</p>
                <p>Der gesamte Text besteht aus Versen eines generativen Gedichts welches auf Basis eines kollektiv verfassten Textes erzeugt wurde.</p>
                `
            },
            // globalAudio: {
            //     src: 'assets/nantes.mp3'
            // },
            media: [
                {
                    src: 'assets/projects/eee/01_eee_cornelius_carstens.jpg',
                    description: {
                        en: `
                        `,
                        de: `
                        `
                    }
                },
                {
                    src: 'assets/projects/eee/02_eee_cornelius_carstens.jpg',
                    description: {
                        en: `
                        With the aid of <em>pattern</em> a natural language processing library for python, the input text gets analysed grammatically.
                        `,
                        de: `
                        Mit Hilfe von pattern einer NLP python Library wird der Ausgangstext grammatikalisch/syntaktisch analysiert.
                        `
                    }
                },
                {
                    src: 'assets/projects/eee/03_eee_cornelius_carstens.jpg',
                    description: {
                        en: `
                        After composing new sentences the sentence members are conjugated based on the number of the object member of the newly constructed sentence.
                        `,
                        de: `
                        Nachdem neue Sätze zusammengefügt wurden werden die Satzglieder zu Versen zusammengeführt und entsprechend konjugiert.
                        `
                    }
                },
                {
                    src: 'assets/projects/eee/04_eee_cornelius_carstens.jpg',
                    description: {
                        en: `
                        `,
                        de: `
                        `
                    }
                },
                {
                    src: 'assets/projects/eee/05_eee_cornelius_carstens.jpg',
                    description: {
                        en: `
                        `,
                        de: `
                        `
                    }
                },
            ]
        },
    ]
}
