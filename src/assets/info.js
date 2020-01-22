export default {
    name: 'Haixiang Yan',
    tel: '+1(949)346-7358',
    email: 'haixiang.job@gmail.com',
	github: 'https://github.com/Haixiang6123',
    website: 'https://haixiang6123.github.io/blog/#/',
    medium: 'https://medium.com/@haixiang6123',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System, GPA: 3.49',
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
        frontend: ['Vue.js', 'React.js', 'TypeScript', 'ES6', 'Sass', 'HTML5', 'CSS3', 'Webpack'],
        backend: ['Java', 'Servlet', 'JSP', 'Python', 'MySQL'],
        test: ['Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'Puppeteer'],
    },
    projects: [
        {
            left: 'Search Engine',
            link: 'https://github.com/Haixiang6123/mini-search-engine',
            right: '09/2019 - 12/2020',
            children: [
                {left: 'Developed a Search Engine based on Log-structured merge method and *Java*'},
                {left: 'Used *Page Rank* and *TF-IDF ranking to score search results'},
                {left: 'Applied *Dynamic Programming algorithm* for Text processing and Tokenization'},
                {left: 'Implemented a compressor based on delta encoding and variable-length encoding to improve performance'},
            ]
        },
        {
            left: 'Overwatch UI (Stars: 340+, NPM Downloads: 12k+)',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: '03/2019 - 07/2019',
            children: [
                {left: 'Developed a UI library with *Vue.js* and *Webpack* based on Overwatch UI style'},
                {left: 'Implemented components with Vue.js features, such as *slot*, *transition*, *watch properties*'},
                {left: 'Applied Vue.js features, such as *slot*, *transition*, *watch properties* to design and implement component'},
                {left: 'Used CSS preprocessor *Sass* to customize component styles and define Mixins and sass functions to reuse 30% styles'},
                {left: 'Wrote unit tests with *Chai, Sinon, Mocha* and set up CI environment with *Travis CI, Karma*. 80% test coverage.'},
            ]
        },
        {
            left: 'Code Block Beautifier (Stars: 100+, Users: 600+)',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: '01/2019 - 03/2019',
            children: [
                {left: 'Built a *Chrome Extension* for highlighting code blocks of Medium articles'},
                {left: 'Applied *DFS algorithm* to combine continuous code blocks to one code block'},
                {left: 'Used Observer Pattern to dispatch and trigger events with *JavaScript (ES6)*, like updating theme and language preference'},
                {left: 'Support 80+ coding theme, 20+ languages, also compatible with StackOverflow, MDN and FreeCodeCamp'}
            ]
        },
        {
            left: 'Movie Gallery System',
            link: '',
            right: '05/2018 - 08/2018',
            children: [
                {left: 'Developed a movie gallery system by using *React.js*, *Redux* and *React Router*'},
                {left: 'Designed 90% components with *styled-component* and *Sass*'},
                {left: 'Implemented *RESTful* API and micro service with *Java Servlet* and *JDBC*'},
                {left: 'Deployed system on *AWS* and *Google Cloud Service* and set up *Load Balance* to lower 50% server pressure'}
            ]
        },
    ],
    interns: [
        {
            left: 'DJI (Frontend Developer)',
            right: '06/2019 - 09/2019',
            children: [
                {left: 'Lead front-end web development for the LAANC project using *Vue.js (Vuex, Vue Router)* and *Mapbox*'},
                {left: 'Designed and implemented 40% *RESTful* and *GraphQL* endpoints based on FAA test documents'},
                {left: 'Designed UI components and web page layouts, and used *Sass* to migrate UI library from Buefy UI to Element UI'},
                {left: 'Wrote *unit tests* and *integration tests* with *Jest* and *Puppeteer*. 73% test coverage of UI components'},
            ]
        },
        {
            left: 'Brix (Research Project)',
            right: '03/2019 - 06/2019',
            children: [
                {left: 'Developed an Online-Coding system with *React.js (Redux, React Router)* and *ACE Editor*'},
                {left: 'Followed web standard and used *HTML5*, *CSS3* and *JavaScript* to develop Admin database system'},
                {left: 'Used *Ant Design* and *Sass* to design website layout and component styles'},
            ]
        }
    ]
}
