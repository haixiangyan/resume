export default {
    name: 'Haixiang Yan',
    tel: '+19493467358',
    email: 'haixiany@uci.edu',
    linkedin: 'https://haixiang6123.github.io/blog/#/',
	github: 'https://github.com/Haixiang6123',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System',
                    right: 'Jun 2020'
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering (GPA: 86/100)',
                    right: 'Jun 2018'
                },
                {
                    left: 'Honors: Third-class Scholarship (15%, Northeastern University)',
                },
                {
                    left: 'Study abroad - UC Irvine (2017 - 2018)'
                }
            ]
        },
    ],
    skills: {
        langs: ['JavaScript', 'Java', 'python'],
        frontend: ['React.js', 'Vue.js', 'jQuery', 'ES6', 'Sass', 'CSS3'],
        test: ['Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'JMeter'],
        mobile: ['React Native', 'Android'],
    },
    projects: [
        {
            left: 'Code Block Beautifier',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: 'Jan 2019',
            children: [
                {left: 'Built a *Chrome Extension* to highlight codes in any website has "pre" element'},
                {left: 'Provides over 20 languages for auto-detection and over 70 different themes'},
                {left: 'Applied DFS algorithm to combine continuous "pre" elements as one "pre" element'},
                {left: 'Strong compatible: Supporting Medium, StackOverflow, MDN, Jianshu and Zhihu'},
                {left: 'Used Observer Pattern to dispatch and trigger events of changing theme and language preference'}
            ]
        },
        {
            left: 'Overwatch UI Library',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: 'July 2018',
            children: [
                {left: 'Developed a UI widgets library with *Vue.js* and published on npm to let developers beatify their website'},
                {left: 'Upgraded component styles codes by using *Sass* to encapsulate some Mixins for reusing styles'},
                {left: 'Wrote unit tests with assertion and stubbing frameworks like Chai, Sinon and Mocha'},
                {left: 'Improved robustness by combining Travis CI and Karma to do integration testing'},
                {left: 'Deployed official documentation website with VuePress to demonstrate details of APIs for developers'},
            ]
        },
        {
            left: 'Guitar Tabs Editor',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: 'Mar 2018',
            children: [
                {left: 'Designed a guitar tabs editor with *React.js* for users to develop guitar tabs by writing formatted texts'},
                {left: "Rendered Markdown/LaTex texts to a guitar tab to reduce user's learning costs"},
                {left: 'Formatted guitar tabs size by using *SVG* to display guitar chords'},
                {left: 'Implemented 2 chord displaying modes so that user can choose to show chords above lyrics in text or SVG'},
                {left: 'Published component Chord to let developers customize their own chords and use standard chords with React.js'}
            ]
        },
        {
            left: 'Movie Gallery System',
            right: 'Jan 2018',
            children: [
                {left: 'Built the movie gallery system with React.js for users to view, search and purchase movies'},
                {left: 'Improved website security by setting route guards with React Router and detecting robot with Google reCAPTCHA'},
                {left: 'Controlled movie data, search results and shopping carts with *Redux* and shared them to common components'},
                {left: 'Accessing same APIs developed with Servlet, a Android app was built to make it more flexible and scalable'},
            ]
        },
    ],
    interns: [
        {
            left: 'Neusoft (Title: Frontend Developer)',
            right: 'May 2017 - Sept 2017',
            children: [
                {left: 'Collaborated teams to develop UI components for an online shopping web app (Mobile) with Vue.js and evaluated the designs of components with UI designers'},
                {left: 'Reduced 48% component codes by introducing Vuex to manage data flow between components'},
                {left: "Developed a privilege management system by using Vue Router to authorize different level privileges to users"},
                {left: 'Beautified and rebuilt Vue components with Animate.css and Element UI'},
                {left: 'Automated backend APIs and HTTP requests testing by writing scripts with Mock.js'},
            ]
        }
    ]
}
