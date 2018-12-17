export default {
    name: '严海翔',
    tel: '15602564425',
    email: 'haixiany@uci.edu',
	github: 'https://github.com/Haixiang6123',
    jianshu: 'https://www.jianshu.com/u/0340be4082b5',
    medium: 'https://medium.com/@haixiang6123',
    edus: [
        {
            left: '加州大学尔湾分校',
            right: '美国加州',
            children: [
                {
                    left: '专业：计算机科学硕士',
                    right: '2018年9月 - 2019年12月'
                }
            ]
        },
        {
            left: '东北大学',
            right: '沈阳',
            children: [
                {
                    left: '专业：软件工程本科，GPA：3.6/5.0',
                    right: '2014年10月 - 2018年6月'
                },
                {
                    left: '荣誉：3年三等奖学金，1年二等奖学金',
                },
                {
                    left: '交换经历：在加州大学尔湾分校做交换生，GPA：3.8/4.0'
                }
            ]
        },
    ],
    skills: {
        langs: ['JavaScript', 'Java', 'Python', 'C', 'C++'],
        frontend: ['React.js', 'Vue.js', 'jQuery', 'ES6', 'Sass', 'Webpack'],
        backend: ['Express.js', 'Koa.js', 'Flask', 'MySQL', 'MongoDB', 'Oracle (PL/SQL)'],
        test: ['Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI'],
        mobile: ['React Native', 'Android'],
    },
    projects: [
        {
            left: 'Chrome 翻译小助手',
            link: 'https://github.com/Haixiang6123/translate-chr',
            children: [
                {left: '该翻译插件使用了 **Chrome Extension** 提供的开发插件 API 和谷歌提供的翻译 API'},
                {left: '实现了6种语言的自由翻译，如英语，日语，法语等。通过使用 DOM API 在选中文本旁边生成译文面板'},
                {left: '点击右键即可进行自动跳转并用百度对选中文本进行翻译'}
            ]
        },
        {
            left: '基于 Vue.js 的 UI 库',
            link: 'https://haixiang6123.github.io/wheel-ui/',
            right: '2018年7月',
            children: [
                {left: '基于 *Vue.js* 利用其特性，如 Vue 过度&动画，插槽，自定义插件开发的一套组件UI库，并最后发布发 npm 上'},
                {left: '使用 CSS 预处理器 Sass 定制组件的样式，定义不同 Mixins 来封装样式来提高样式的重用度'},
                {left: '使用 *Chai、Sinon、Mocha* 测试组件是否能处理边界情况，保证在所有情况下都能正常使用'},
                {left: '配置 *Travis CI、Karma* 对每次 Git 的提交做集成测试，以提高 UI 库的健壮性'},
                {left: '使用 VuePress 搭建 UI 库的官方开发文档，通过 Markdown 来编写 API 使用手册'},
            ]
        },
        {
            left: '吉他谱编辑器',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: '2018年5月',
            children: [
                {left: '本项目是基于 *React.js* 开发的吉他谱在线编辑器，它能使作者通过书写规定格式的文本来创作吉他谱，并统一其编写的吉他谱'},
                {left: '通过 react-chord-generator 和 react-lyrics 将类 Markdown/Latex 格式文本渲染为 HTML 样式'},
                {left: '其中上述两个组件已经发布到 npm，开发人员可对其进行个性化的定制来实现其它的和弦图'},
                {left: '使用 *SVG* 来渲染和弦图和六线谱图'},
                {left: '实现两种查看和弦图的格式：文本模式和和弦图模式。前者展示吉他谱概况，后者详细显示具体和弦图'},
            ]
        },
        {
            left: '电影购买系统（移动端）',
            right: '2018年1月',
            children: [
                {left: '本项目是基于 React.js 开发的电影选购系统，主要实现多类型搜索功能，购物车，用户登录功能等'},
                {left: '使用 *React Router* 搭建网站的路由系统，并在路由设置守卫来防止对管理页面的非法访问'},
                {left: '使用 *Redux* 对全局数据进行管理，如搜索结果、用户购物车信息，将信息与相应组件共享'},
                {left: '将网站发布至 AWS ，并为其配置负载均衡。将数据存放到 Master DB 和 slave DB 中来降低数据库的压力'},
                {left: '使用 JAX-RS 配合 Servlet 的注解来设计 *RESTFul* 风格 API，替代传统的 SOAP 方案'}
            ]
        },
        {
            left: '仿网易严选商城',
            link: 'https://haixiang6123.github.io/yan-xuan/#/home/recommend',
            right: '2017年8月',
            children: [
                {left: '本项目基于 Vue.js 开发的仿网易严选商城（移动端），主要实现商品详情，商品分类，购买商品功能'},
                {left: '使用 Vuex 管理组件共享的数据，同时使用 localStorage 来存放用户登录状态'},
                {left: '利用 Vue Router 的导航守卫功能来实现权限系统，如普通用户不能访问管理员页面'},
                {left: '使用 *Mock.js* 来为页面提供数据，并用来测试后端的 API'}
            ]
        }
    ],
}
