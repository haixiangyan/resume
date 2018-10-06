export default {
    name: 'Haixiang Yan',
    tel: '+19492413576',
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
                {left: 'Constructed widgets styles by using *SCSS* to encasulate some Mixins for reusing styles'},
                {left: 'Wrote unit tests with assertion and stubbing frameworks like *Chai*, *Sinon* and *Mocha*'},
                {left: 'Combined *Travis CI* and *Karma* to do integration testing'},
                {left: 'Developed official documentation website with *VuePress* and launched it on Github'},
            ]
        },
        {
            left: 'Guitar Tabs Editor',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: 'Mar 2018',
            children: [
                {left: 'Developed a guitar tabs editor with *React.js* to render fomatted plain text to React components to display a guitar tab'},
                {left: "Drew guitar chords by rendering data to *SVG*s to make sure each tab is well-formed like Markdown article"},
                {left: 'Implemented text mode and chord mode to show chords with plain texts or svgs above each lyrics'},
                {left: 'Published react component Chord and Lyrics on npm'}
            ]
        },
        {
            left: 'Movie Gallery System',
            right: 'Jan 2018',
            children: [
                {left: 'Built the movie gallery system with *React.js* for users to view, search and purchase moives'},
                {left: 'Controlled movie data, search results and shopping carts with *Redux* and shared them to common components'},
                {left: 'Set up a router system with user authentication and route guards using *React Router* and strengthened user authentication by using Google *reCAPTCHA*'},
                {left: 'Tested system performance with *Tomcat apache JMeter*'},
                {left: 'Deployed the system on AWS and configurated load balancing by writing shell scripts on *Linux*'},
                {left: 'Built an *Android* app as mobile client which access same APIs developed with *Java Servlet*'}
            ]
        },
        {
            left: 'Pikachu',
            link: 'https://haixiang6123.github.io/pikachu/',
            right: 'Feb 2018',
            children: [
                {left: 'Used *jQuery*, *HTML5* and *CSS3* to draw a Pikachu on a web page'},
                {left: 'Drew a Pikachu dynamically while writing CSS codes'}
            ]
        },
    ],
    interns: [
        {
            left: 'Neusoft (Frontend Developer)',
            right: 'May 2017 - Sept 2017',
            children: [
                {left: 'Cooperated teams to Developed UI components for an online shopping web app (Mobile) with *Vue.js* and evaluated the designs of each component with UI designer'},
                {left: 'Implemented login module by building router guard by using *Vue Router* to redirect urls when users logged out'},
                {left: 'Managed goods data received when components mounted with *Vuex* to keep one-way data flow'},
                {left: 'Finished shopping cart module which includes modifying cart items and developing address Cascader widget to add addresses'},
                {left: 'Developed scripts with *Mock.js* to test backend APIs automatically'},
            ]
        }
    ]
}
