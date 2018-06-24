export default {
    about: `
    <p>Hello, I’m cornelius,</p>
<p>an interdisciplinary student of visual communication with backgrounds in fashion photography, web development, interactive installations and piano music.</p>
<p>While studying I ran the web design agency Awesome Boys for two years with a fellow student and am currently employed by Apple.</p>
<p>I like learning new things, feedback, getting hired, reading, bread with butter and Apfelschorle.</p>
<p>I am looking forward to <a href="mailto:cornelius.carstens@me.com">hearing from you</a>.</p>
Best,
`,
    projects: [
        {
            title: 'Stethoscope',
            year: 2018,
            description: 'interactive installation connecting a user with her own hearbeat using a stethoscope and a holographic projection',
            globalAudio: {
                src: 'assets/wolves.mp3'
            },
            media: [

                {
                    src: 'assets/Stethoskop.gif',
                    description: 'View of the holographic installation'
                },
                {
                    sketchName: 'DotCloud',
                    description: 'Interaction demo of a wip state of the particle visualisation'
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
                    description: 'Application of the verses'
                },
            ]
        },
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
                    src: 'assets/scrollcast_1.mp4',
                    description: 'Fadings applied'
                },
                {
                    src: 'assets/01_MARIUS_CORNELIUS_CARSTENS.jpg',
                    description: 'Front Page of Marius Hirschel'
                }
            ]
        }
    ]
}
