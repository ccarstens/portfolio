export default {
    labels: {
        click: {
            en: 'click',
            de: 'klick',
            ru: 'щелчок',
            jp: 'クリック'
        },
        projects: {
            en: 'projects',
            de: 'projekte',
            jp: 'プロジェクト',
            ru: 'проектов'
        }
    },
    about: {
        en: `
            <p>Hello, I’m cornelius,</p>
            <p>an interdisciplinary student of visual communication with backgrounds in fashion photography, web development, interactive installations and piano music.</p>
            <p>While studying I ran the web design agency Awesome Boys for two years with a fellow student and am currently employed by Apple.</p>
            <p>I like learning new things, feedback, getting hired, reading, bread with butter and Apfelschorle.</p>
            <p>I am looking forward to <a href="mailto:cornelius.carstens@me.com">hearing from you</a>.</p>
            Best,
        `,
        de: `
            <p>Hallo, ich bin Cornelius,</p>
<p>ich studiere Kommunikationsdesign in Berlin und beschäftige mich mit web development, Installationsprojekten, Modefotografie und Klavierimprovisation.</p>
<p>Neben dem Studium habe ich die web design Agentur Awesome Boys geführt und arbeite momentan für Apple.</p>
<p>Ich mag es neue Dinge zu lernen, Feedback bekommen und geben, Jobs bekommen, Lesen, Brot mit Butter und Apfelschorle.</p>
<p>Ich freue mich darauf von euch zu hören.</p>
        `,
        ru: `
        Привет, я cornelius,

междисциплинарный студент визуальной коммуникации с фоном в модной фотографии, веб-разработкой, интерактивными установками и фортепианной музыкой.

Во время учебы я управлял агентством веб-дизайна Awesome Boys в течение двух лет с одним студентом и в настоящее время занимаюсь Apple.

Мне нравится изучать новые вещи, обратную связь, нанимать, читать, хлеб с маслом и Apfelschorle.

Я с нетерпением жду услышать от вас.

Лучший
        `,
        jp: `
        こんにちは、私はコーネリアスです、

ファッション写真、ウェブ開発、インタラクティブインスタレーション、ピアノ音楽の背景を持つ学際的なコミュニケーションの学生です。

勉強している間、私はWebデザインエージェンシーのAwesome Boysを2年間仲間と走り、現在Appleに雇われています。

私は新しいこと、フィードバック、雇用、読書、バターとApfelschorleのパンを学ぶのが好きです。

お返事を待っています。

ベスト
        `


    },
    projects: [
        {
            title: 'Marius Hirschel',
            year: 2016,
            description: 'custom portfolio for berlin based hair stylist',
            url: 'http://mariushirschel.com',
            globalAudio: {
                src: 'assets/wolves.mp3'
            },
            media: [

                {
                    src: 'assets/projects/mh/01_marius_hirschel_cornelius_carstens_midhigh.mp4',
                    description: 'Fadings bound to scroll hello'
                },
                {
                    src: 'assets/projects/mh/02_marius_hirschel_cornelius_carstens.jpg',
                    description: 'Front Page of Marius Hirschel'
                }
            ]
        },
        {
            title: 'Goetze',
            year: 2016,
            description: {
                de: 'Website und online shop für menswear label aus Berlin'
            },
            darkMode: false,
            media: [
                {
                    src: 'assets/01_scrollcast_marius.mp4',
                    description: 'Startseite mit Videoeinbindung'
                },
                {
                    src: 'assets/01_main.png',
                    description: 'Startseite mit Videoeinbindung'
                },
                {
                    src: 'assets/02_shop.png',
                    description: 'Shop'
                },
                {
                    src: 'assets/03_product.png',
                    description: 'Detailansicht eines Produktes'
                },
            ]
        },
        {
            title: {
                en: 'Stethoscope',
                de: 'Stethoskop',
                jp: '聴診器',
                ru: 'стетоскоп'
            },
            year: 2018,
            darkMode: true,
            description: {
                en: 'interactive installation connecting a user with her own hearbeat using a stethoscope and a holographic projection',
                de: 'embodied interfaces\n' +
                'Im Zentrum dieser Installation steht die Auseinandersetzung der Betrachter mit ihren körpereigenen Signalen. In einem dunklen Raum wird mithilfe eines Stethoskops der eigene Herzschlag abgehört. In der Raummitte bewegen sich Partikel im Takt des Herzschlags in einer holographischen Projektion.\n' +
                'Die auditive und visuelle Wahrnehmung der Teilnehmer wird nahezu vollständig von Signalen des eigenen Körpers bestimmt während die meisten anderen Sinneseindrücke in diesem Aufbau vermieden werden.',
                ru: 'интерактивная установка, соединяющая пользователя с ее собственным слухом, используя стетоскоп и голографическую проекцию',
                jp: '聴診器とホログラフィックプロジェクションを使用して、自分のヒアビートとユーザーを接続するインタラクティブインストール',
            },
            globalAudio: {
                src: 'assets/wolves.mp3'
            },
            media: [
                {
                    src: 'assets/Stethoskop.gif',
                    description: {
                        en: 'View of the holographic installation',
                        de: 'Anblick der holografischen Installation'
                    }
                },
                {
                    sketchName: 'DotCloud',
                    description: {
                        en: 'Interaction demo of a wip state of the particle visualisation particle visualisation',
                        de: 'Interaktive Demo aus dem Findungsprozess der Partikel-Animationen'
                    }
                },

            ]
        },
        {
            title: 'EEE',
            year: 2016,
            description: 'fashion magazine that uses verses of a poem generated using <i>pattern</i> an NLP library',
            url: 'http://goetze.xyz',
            globalAudio: {
                src: 'assets/nantes.mp3'
            },
            media: [
                {
                    src: 'assets/00_EEE_CORNELIUS_CARSTENS.jpg',
                    description: 'Application of the verses'
                },
                {
                    src: 'assets/01_EEE_CORNELIUS_CARSTENS.jpg',
                    description: 'Application of the verses Application of the verses Application of the verses Application of the verses'
                },
            ]
        },

    ]
}
