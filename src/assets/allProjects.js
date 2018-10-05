export default {
    name: 'Haixiang Yan',
    tel: '15602564425',
    email: 'xxx@uci.edu',
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
            'Test tools (Mocha, Sinon, Chai, Karma, Travis CI)',
            'Node.js',
            'Android'
        ],
        dbs: ['MySQL', 'MongoDB', 'Oracle (PL/SQL)']
    },
    projects: [
        {
            left: 'Wheel UI Widgets Library',
            link: 'https://haixiang6123.github.io/wheel-ui/',
            right: 'July 2018',
            children: [
                {left: 'Developed a UI widgets library with *Vue.js*, such as Grid system, Toast, Carousel, Cascader, Tabs and etc.'},
                {left: 'Utilized a CSS pre-processor *SCSS* to write widgets styles and encapsulated some Mixins for reusing styles'},
                {left: 'Wrote unit tests with assertion and stubbing frameworks like *Chai*, *Sinon* and *Mocha*'},
                {left: 'Combined *Travis CI* and *Karma* to do integration testing'},
                {left: 'Set up documentation website with *VuePress* and deployed it on github'}
            ]
        },
        {
            left: 'Guitar Tabs Editor',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: 'Mar 2018',
            children: [
                {left: 'Implemented a guitar tabs editor with *React.js* and *SVG* technology'},
                {left: 'Inspired by markdown and LaTex, it renders formatted plain texts to React components to display a guitar tab'},
                {left: 'Managed edit page and preview page with *React Router*, so that guitar tabs data can be shared to both pages'},
                {left: 'Assigned text mode and chord mode for showing chords with plain texts or chord svgs above each lyrics'},
            ]
        },
        {
            left: 'Pikachu',
            link: 'https://haixiang6123.github.io/pikachu/',
            right: 'Feb 2018',
            children: [
                {left: 'Used *jQuery*, *HTML5* and *CSS3* to draw a Pikachu on a web page'},
                {left: 'Made it to draw a Pikachu dynamically while writing CSS codes'}
            ]
        },
        {
            left: 'Movie Gallery System',
            right: 'Jan 2018',
            children: [
                {left: 'Built the movie gallery system with *React.js* for users to view, search and purchase moives'},
                {left: 'Controlled movie data, search results and shopping carts with *Redux*'},
                {left: 'Set up a router system with user authentication and route guards using *React Router*'},
                {left: 'Utilized Google *reCAPTCHA* to prevent from robot attacks'},
                {left: 'Tested system performance with *Tomcat apache JMeter*'},
                {left: 'Built an *Android* app as mobile client which access same APIs developed with *Java Servlet*'}
            ]
        },
        {
            left: 'Yan Xuan Online Shopping Web APP',
            link: 'https://haixiang6123.github.io/yan-xuan/#/home/recommend',
            right: 'May 2017',
            children: [
                {left: 'Developed basic UI widgets and web pages for an online-shopping web app (Mobile) with *Vue.js*'},
                {left: 'Used *Vue Router* to build the router system and organized global data with *Vuex*'},
                {left: 'Wrote test codes with *Mock.js* to test response data of backend APIs'},
                {left: 'Implemented shopping cart module which includes adding default address, modifying cart items and developing an address Cascader widget'},
            ]
        }
    ],
}
