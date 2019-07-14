export default {
    name: 'Haixiang Yan',
    tel: '+1(949)346-7358',
    email: 'haixiany@uci.edu',
    website: 'https://haixiang6123.github.io/blog/#/',
	github: 'https://github.com/Haixiang6123',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System (GPA: 3.3/4)',
                    right: 'Jun 2019'
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering (GPA: 3.67/5)',
                    right: 'Jun 2018'
                },
                {
                    left: 'Honors: Third-class Scholarship (Top 15%)',
                },
            ]
        },
    ],
    skills: {
        langs: ['JavaScript', 'Java', 'Python'],
        frontend: ['React.js', 'Vue.js', 'Angular', 'TypeScript', 'ES6', 'Sass', 'GraphQL', 'Restful API'],
        test: ['Mocha', 'Sinon', 'Chai', 'Karma', 'Jest', 'Puppteer', 'Travis CI'],
        others: ['React Native', 'Android'],
    },
    projects: [
        {
            left: 'Overwatch UI Library',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: 'Mar 2019',
            children: [
                {left: 'A mobile-first, Overwatch-themed UI library built with *Vue.js* (10K downloads, 160+ stars)'},
                {left: 'Modularized components styles with *Sass*, and used it to encapsulate Mixins and Functions'},
                {left: 'Used *Chai*, *Sinon* and *Mocha* to write unit tests for each component and configured *Travis CI* environment'},
                {left: 'Component implementations are based on features provided by Vue.js, such as dependency injection, transition, slots and etc.'}
            ]
        },
        {
            left: 'Code Block Beautifier',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: 'Jan 2019',
            children: [
                {left: 'A *Chrome Extension* for adding code syntax highlighting to any technical articles (400+ users, 90+ stars).'},
                {left: 'Designed a DFS algorithm to combine continuous "pre" elements as one "pre" element'},
                {left: 'Provides more than 20 languages for auto-detection and over 70 different themes'},
                {left: 'Applied "Observer" design pattern to dispatch and trigger built-in events, such as changing theme and switching language'},
                {left: 'Strong compatible: For now, it supports Medium, StackOverflow, MDN, FreeCodeCamp, etc.'},
            ]
        },
        {
            left: 'Guitar Tabs Editor',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: 'Mar 2018',
            children: [
                {left: 'An online gutar tabs editor built with *React.js*'},
                {left: "Rendered formatted texts to a guitar tab, and used *SVG* to display guitar symbols"},
                {left: 'Implemented 2 modes to display guitar tabs: Display chord as text or a SVG element'},
                {left: 'Open source a React component for enabling developers to customize guitar chords'},
            ]
        },
    ],
    interns: [
        {
            left: 'DJI Technology Company (Title: Frontend Developer)',
            right: 'Jun 2019 - Sept 2019',
            children: [
                {left: 'Designed and implemented *LAANC system* which helps drone pilots to make flight requests'},
                {left: 'Restyled components based on new design, and migrated their implementations to *Element UI* from *Buefy + Bulma*'},
                {left: "Implemented Map module requirements with *Mapbox*, such as selecting flight area, analyzing restricted area and fetching local weathers"},
                {left: 'Designed schemas, queries and mutations of *GraphQL* and used *Vue-Apollo* to send Ajax requests'},
                {left: 'Used *express.js* and *mockserver* to generate mock data to do integration tests with *Puppteer*'},
            ]
        },
        {
            left: 'Neusoft (Title: Frontend Developer)',
            right: 'May 2017 - Sept 2017',
            children: [
                {left: 'Developed UI components for an *online shopping web app* (Mobile) with Vue.js'},
                {left: 'Optimized redundant codes by using *Vuex* to managing data flow among unrelated components'},
                {left: 'Configured *Vue Router guard* to manage user accessibility based on privileges'},
                {left: 'Added transition and beautified components with Animate.css and Element UI'},
                {left: 'Used *Mock.js* to generate dummy data and test all HTTP requests'}
            ]
        }
    ]
}
