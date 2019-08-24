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
                    left: 'M.S. Networked System',
                    right: 'Dec 2019'
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering',
                    right: 'Jun 2018'
                },
                {
                    left: 'Honors: Third-class Scholarship (Top 15%)',
                },
            ]
        },
    ],
    skills: {
        frameworks: ['Vue.js', 'React.js', 'TypeScript', 'Angular', 'Express.js', 'Flask'],
        libraries: ['Element UI', 'Ant Design', 'GraphQL', 'Vue-Apollo', 'Mapbox'],
        tools: ['Sass', 'Webpack', 'Parcel', 'Faker.js', 'Mock.js'],
        test: ['Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'Puppeteer', 'Gitlab CICD'],
    },
    projects: [
        {
            left: 'Overwatch UI Library (Stars: 300+, NPM Downloads: 11k+)',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: 'Mar 2019',
            children: [
                {left: 'Developed a UI widgets library with *Vue.js* based on Overwatch UI style'},
                {left: 'Polished each component by using Vue.js features, such as slot, transition, watch properties'},
                {left: 'Used CSS preprocessor *Sass* to customize component styles and define *Mixins* to reuse styles'},
                {left: 'Wrote unit tests with *Chai, Sinon, Mocha* and set up CI environment with *Travis CI, Karma*'},
            ]
        },
        {
            left: 'Code Block Beautifier (Stars: 90+, Users: 500+)',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: 'Jan 2019',
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
            right: 'Mar 2018',
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
            right: 'Jun. 2019 - Sept 2019',
            children: [
                {left: 'Developed LAANC system (Low-Altitude Authorization and Notification) by using Vue.js'},
                {left: 'Migrated UI library from *Buefy* to *Element* and redesign components based on new design draft'},
                {left: "Used *Mapbox* to implement map-related functions: Circle selected area, draw layers with *geojson*, filter map features"},
                {left: 'Replaced *RESTful API* with *GraphQL* and used vue-apollo to manage multiple apollo clients'},
                {left: 'Wrote unit test and integration test with *Jest* and *Puppeteer*. Used *MockServer* to generate dummy data for testing requests'},
                {left: 'Combined *Vuex* and vuex-pathify to store selected area features globally'}
            ]
        },
        {
            left: 'Brix (Frontend Developer)',
            right: 'Mar. 2019 - Jun 2019',
            children: [
                {left: 'Developed an Online-Coding system with *React.js*'},
                {left: 'Developed a manage system with *HTML*, *CSS* and *JavaScript* to show tables of backend database'},
                {left: 'Used *Ant Design* and *Sass* to design website layout and component styles'},
                {left: 'Implemented online editor by using *ACE editor* and record coding states with Session'},
            ]
        }
    ]
}
