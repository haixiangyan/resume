export default {
    name: 'HAIXIANG YAN',
    tel: '+19493467358',
    email: 'haixiany@uci.edu',
    linkedin: 'https://www.linkedin.com/in/yan-haixiang-0b9744150/',
	github: 'https://github.com/Haixiang6123',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System',
                    right: 'Expected Graduation: Jun 2020'
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering (GPA: 86/100)',
                    right: 'Graduation: Jun 2018'
                },
                {
                    left: 'Honors: Third-class Scholarship (15%, Northeastern University)',
                }
            ]
        },
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'Computer Science & Engineering (GPA: 3.71/4.0)',
                },
                {
                    left: 'Exchange Student',
                    right: 'Sept 2017 - Jun 2018'
                }
            ]
        }
    ],
    skills: {
        langs: ['JavaScript', 'Java', 'Python', 'C', 'C++'],
        techs: [
            'Vue.js',
            'React.js',
            'Test utils (Karma, Sinon, Chai, Travis CI, Mocha)',
            'Node.js',
            'Android'
        ],
        dbs: ['MySQL', 'MongoDB', 'Oracle (PL/SQL)']
    },
    projects: [
        {
            left: 'Wheel UI',
            link: 'https://haixiang6123.github.io/wheel-ui/',
            right: 'July 2018',
            children: [
                {left: 'Developed a UI widgets library with *Vue.js*, such as Grid system, Toast, Carousel, Cascader, Tabs and etc.'},
                {left: 'Utilized a CSS pre-processor *SCSS* to write widgets styles, and encapsulated some Mixins for reusing styles'},
                {left: 'Wrote unit tests with assertion and stubbing frameworks like *Chai*, *Sinon* and *Mocha*. Combined *Travis CI* and *Karma* to do integrating testing'},
                {left: 'Set up documentation website with *vuepress* and deployed it on github'}
            ]
        },
        {
            left: 'Guitar Tabs Editor',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: 'Mar 2018',
            children: [
                {left: 'Implemented a guitar tabs editor with *React.js* and *svg* technology'},
                {left: 'Inspired by markdown and laTex, it renders formatted plain texts to React components to display a guitar tab'},
                {left: 'Managed edit page and preview page with *React Router*, so that guitar tabs data can be shared to both pages'},
                {left: 'Assigned text mode and chord mode for showing chords with plain texts or chord svgs above each lyrics'},
                {left: 'Published *Chord* component and *Lyrics* Component to npm library'}
            ]
        },
        {
            left: 'Pikachu',
            link: 'https://haixiang6123.github.io/pikachu/',
            right: 'Feb 2018',
            children: [
                {left: 'Used *jQuery*, *HTML5* and *CSS3* to draw a Pikachu on a web page'},
                {left: 'Made it to draw a Pikachu while writing CSS codes dynamically'}
            ]
        },
        {
            left: 'Movie gallery system',
            right: 'Jan 2018',
            children: [
                {left: 'The movie gallery system is built with *React.js*'},
                {left: 'Controlled movie data, search results and user information with *Redux*'},
                {left: 'Set up a router system with user authentication and route guards using *React Router*'},
                {left: 'Utilized Google *reCAPTCHA* to prevent from robot attacks'},
                {left: 'Tested system performance with *Tomcat apache JMeter*'},
                {left: 'Built an *Android* app as mobile client which access same APIs developed with *Java Servlet*'}
            ]
        },
    ],
    interns: [
        {
            left: 'Neusoft',
            link: 'https://haixiang6123.github.io/yan-xuan/#/home/recommend',
            right: 'May 2017 - Sept 2017',
            children: [
                {left: 'Front-end development'},
                {left: 'Developed basic UI widgets and web pages for an online-shopping web app (Mobile) with *Vue.js*'},
                {left: 'Used *Vue Router* to build the router system and organized global data with *Vuex*'},
                {left: 'Wrote test codes with *Mock.js* to test response data of back end APIs'},
                {left: 'Helped to implement shopping cart module which includes adding default address, modifying cart items and developed a Cascader widget'},
            ]
        }
    ]
}
