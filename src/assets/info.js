export default {
    name: 'Haixiang Yan',
    tel: '+1(949)346-7358',
    email: 'haixiany@uci.edu',
	github: 'https://github.com/Haixiang6123',
    website: 'https://haixiang6123.github.io/blog/#/',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System, GPA: 3.3',
                    right: '09/2018 - 03/2020'
                },
                {
                    left: 'Courses: Information Retrieval, Machine Learning, Graph Algorithm, Network Security, Networking Lab',
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering, GPA: 3.6',
                    right: '10/2014 - 06/2018'
                },
                {
                    left: 'Courses: Algorithm, Data Structure, Computer Architecture, Computer Network, Software Engineering'
                }
            ]
        },
    ],
    skills: {
        frontend: ['Vue.js', 'React.js', 'TypeScript', 'ES6', 'Sass', 'Webpack', 'Express.js'],
        test: ['Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'Puppeteer'],
    },
    projects: [
        {
            left: 'Mini Search Engine',
            right: '04/2019',
            children: [
                {left: 'Developed a Search Engine with *Java* based on *Page Ranking* and *TF-IDF Ranking*'},
                {left: 'Optimized process of tokenizing keywords by using *Dynamic Programming* algorithm'},
                {left: 'Implemented *LSM-based* file storage to improve performance of reading bytes from segments'},
                {left: 'Developed a *Delta Variable-length* Compressor to compress files'},
            ]
        },
        {
            left: 'Overwatch UI (Stars: 330+, NPM Downloads: 11k+)',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: '03/2019',
            children: [
                {left: 'Developed a UI widgets library with *Vue.js* based on Overwatch UI style'},
                {left: 'Polished each component by using Vue.js features, such as slot, transition, watch properties'},
                {left: 'Used CSS preprocessor *Sass* to customize component styles and define *Mixins* to reuse styles'},
                {left: 'Wrote unit tests with *Chai, Sinon, Mocha* and set up CI environment with *Travis CI, Karma*'},
            ]
        },
        {
            left: 'Code Block Beautifier (Stars: 95+, Users: 500+)',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: '01/2019',
            children: [
                {left: 'Built a *Chrome Extension* for highlighting code blocks of Medium articles to improve readability'},
                {left: 'Auto detected programming language for each code blocks'},
                {left: 'Applied DFS algorithm to combine continuous "pre" elements as one "pre" element'},
                {left: 'Used Observer Pattern to dispatch and trigger events, like updating theme and language preference'}
            ]
        },
        {
            left: 'Guitar Tabs Editor (Stars: 29)',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: '03/2018',
            children: [
                {left: 'Designed a guitar tabs editor with *React.js* for users to compose guitar tabs by writing formatted texts'},
                {left: "Rendered Markdown/LaTex texts to a guitar tab to reduce user's learning costs"},
                {left: 'Formatted guitar tabs size by using *SVG* to display guitar chords'},
                {left: 'Implemented 2 chord displaying modes so that user can choose to show chords above lyrics in text or SVG'},
            ]
        },
    ],
    interns: [
        {
            left: 'DJI (Frontend Developer)',
            right: '06/2019 - 09/2019',
            children: [
                {left: 'Lead front-end web development for the LAANC project using *Vue.js* and *Mapbox*.'},
                {left: 'Worked with Product Designers to implement the new design of LAANC and migrated UI library from *Buefy* to *Element* and redesign components based on new design draft'},
                {left: '*Optimized web performance* by using *ETag* based HTTP caching to fetch map features and using *Lazy load* to generate new page'},
                {left: 'Collaborated on a technical timeline for the project, detailing tasks to front-end engineers in both Palo Alto and Shenzhen'}
            ]
        },
        {
            left: 'Brix (Research Project)',
            right: '03/2019 - 06/2019',
            children: [
                {left: 'Developed an Online-Coding system with *React.js*'},
                {left: 'Developed a manage system with *HTML*, *CSS* and *JavaScript* to show tables of backend database'},
                {left: 'Used *Ant Design* and *Sass* to design website layout and component styles'},
                {left: 'Implemented online editor by using *ACE editor* and record coding states with Session'},
            ]
        }
    ]
}
