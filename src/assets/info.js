export default {
    name: '严海翔',
    tel: '15602564425',
    email: 'haixiany@uci.edu',
	github: 'https://github.com/Haixiang6123',
    jianshu: 'https://www.jianshu.com/u/0340be4082b5',
    medium: 'https://medium.com/@haixiang6123',
    website: 'https://haixiang6123.github.io/blog/#/',
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
            left: '守望先锋 UI 库',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: '2019年2月',
            children: [
                {left: '本项目是基于 **Vue.js** 并模仿守望先锋 UI 开发的一套 UI 组件库'},
                {left: '使用 CSS 预处理器 SASS 定制组件的样式，定义不同 Mixins 来封装样式以提高样式的重用度'},
                {left: '使用 *Chai、Sinon、Mocha* 对组件进行单元测试，同时结合 *Travis CI、Karma* 进行集成测试，目前测试覆盖率为 82.5%'},
                {left: '目前该 UI 库已发布到 npm，当前月下截量为 2000+'}
            ]
        },
        {
            left: 'Medium 代码高亮插件',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier/blob/master/README-CN.md',
            right: '2019年1月',
            children: [
                {left: '使用 **谷歌插件 API** 开发的代码高亮插件，高亮任何网站里的代码，主要支持 Medium，知乎，简书，StackOverflow'},
                {left: '通过 Highlight.js 来自动检测代码块中的语言，用户可以通过设置语言偏好来提高自动检测语言的准确度'},
                {left: '支持 80 多种代码主题以及 20 多种编程语言'},
                {left: '目前插件已发布到 Google Chrome Extension APP Store，用户数已破百'}
            ]
        },
        {
            left: '迷你手绘板',
            link: 'https://haixiang6123.github.io/sketch-book/',
            right: '2018年12月',
            children: [
                {left: '本项目基于 **Canvas API** 来开发的模拟手绘板'},
                {left: '通过监听 mouse 事件来实现用户手绘图形，并调用绘制空白矩形完成橡皮擦功能'},
                {left: '实现了用户选择不同颜色，不同画笔粗细来绘制图形的功能'},
                {left: '通过临时生成 a 标签实现下载绘制后的图形'}
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
            left: '仿网易严选商城（移动端）',
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
