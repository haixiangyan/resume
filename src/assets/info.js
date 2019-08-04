export default {
    name: '严海翔',
    tel: '+1 (949) 346-358',
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
                    left: '专业：Master of Networked System',
                    right: '2018年9月 - 2019年12月'
                },
                {
                    left: 'GPA: 3.3/4.0'
                }
            ]
        },
        {
            left: '东北大学',
            right: '中国沈阳',
            children: [
                {
                    left: '专业：软件工程本科，GPA：3.6/5.0',
                    right: '2014年10月 - 2018年6月'
                },
                {
                    left: '荣誉：3年三等奖学金，1年二等奖学金',
                },
                {
                    left: '交换生经历：在加州大学尔湾分校做交换生，GPA：3.8/4.0'
                }
            ]
        },
    ],
    skills: {
        frameworks: ['Vue.js', 'React.js', 'TypeScript', 'Angular', 'Express.js', 'Flask'],
        libraries: ['Element UI', 'Ant Design', 'GraphQL', 'Vue-Apollo', 'Mapbox'],
        tools: ['Sass', 'Webpack', 'Parcel', 'faker', 'faker'],
        tests: ['Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'Puppeteer', 'Gitlab CICD'],
    },
    interns: [
        {
            left: '大疆创新（前端实习，美国 Palo Alto）',
            link: '',
            right: '2019年6月',
            children: [
                {left: '开发 LAANC（Low-Altitude Authorization and Notification）系统'},
                {left: '使用 *Element UI* 重做原先使用 *Buefy* + *Bulma* 编写的组件，并根据新 UI 设计稿重写用户交互逻辑和组件样式'},
                {left: '使用 *Mapbox* 实现地图选区功能：画圆选区，多边形选区，地图上显示地理信息'},
                {left: '运用 *GraphQL* 配合 Vue-Apollo 处理大部分数据请求，同时使用 Vue-Apollo 提供的 Subscription 功能实现通知模块'},
                {left: '使用 *Jest* 编写单元测试，用 *Puppeteer* 编写表单的集成测试，用 *MockServer* 和 Vue-Apollo 测试 RESTful API 和 GraphQL 接口，并在 Gitlab 上进行自动化测试。'},
                {left: '结合 *Vuex* 和 *vuex-pathify* 来精简处理 store 状态的代码'}
            ]
        },
        {
            left: 'Brix（前端实习，Irvine）',
            link: '',
            right: '2019年4月',
            children: [
                {left: '使用 *React.js* 单独开发一套 OJ（Online Judge）系统'},
                {left: '基于 *Ant Design* 和 *Sass* 编写组件样式和网页布局'},
                {left: '使用 *Ace Editor* 实现在线编辑代码功能，并用 Session 记住每道编程题的做题情况'},
                {left: '前后端分离，使用 *Mock.js* 生成假数据来测试后端提供的 RESTful API'}
            ]
        },
    ],
    projects: [
        {
            left: '命令行工具',
            link: 'https://github.com/Haixiang6123/awesome-cli',
            right: '2019年7月',
            children: [
                {left: '该项目主要收集了本人开发的命令行工具，主要为：wtf-cli，thanos-snap-cli，uci-reg-cli'},
                {left: 'wtf-cli: 一个用于搜索英文缩写的命令行工具，主要用 *cheerio* 爬取 https://www.abbreviations.com 里的内容加以整理实现，下载量：300+'},
                {left: 'thanos-snap-cli: 该命令行工具会将随机删除一半指定目录下的文件，主要用 *Node.js* 提供的 fs 模块实现'},
                {left: 'uci-reg-cli: 该命令行工具主要用于在终端里显示指定专业的课表'}
            ]
        },
        {
            left: '猫狗探探',
            link: 'https://github.com/Haixiang6123/awesome-a-cat-a-dog',
            right: '2019年3月',
            children: [
                {left: '该项目调用外部 API 来展示小猫小狗图片，并实现点赞，上传图片，收藏功能'},
                {left: '分别使用三大框架（*Vue.js*，*React.js*，*Angular*）+ *TypeScript* + *Sass* 来完成应用的所有功能'},
                {left: '使用 *ECharts.js* 分析图片中出现的物件，以饼图展示'},
            ]
        },
        {
            left: '守望先锋 UI 库（Star: 178, NPM 下载量: 10k+）',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: '2019年2月',
            children: [
                {left: '本项目是基于 *Vue.js* 并模仿守望先锋 UI 开发的一套 UI 组件库'},
                {left: '合理运用 Vue 的特性来打造每个组件，如过渡，slot，provider，watch 属性，生命周期钩子等'},
                {left: '使用 CSS 预处理器 Sass 定制组件的样式，并定义不同 Mixins 来封装样式以提高样式的重用度'},
                {left: '使用 *Chai，Sinon，Mocha* 对组件进行单元测试，并结合 *Travis CI，Karma* 进行自动化测试'},
            ]
        },
        {
            left: '代码高亮插件（Star: 95, 用户量：480+）',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier/blob/master/README-CN.md',
            right: '2019年1月',
            children: [
                {left: '一个用于高亮博客文章代码块的 *Chrome* 插件，目前支持 Medium，知乎，简书，StackOverflow 等大部分博客网站'},
                {left: '通过 *Highlight.js* 自动检测代码所使用的语言，用户可以通过设置语言偏好来提高自动检测语言的准确度'},
                {left: '使用深度搜索来合并连续出现的 pre 元素'},
                {left: '使用 *Event Hub* 来更新代码主题和语言偏好'},
                {left: '该插件提供支持 80 多种代码主题以及 20 多种编程语言'}
            ]
        },
        {
            left: '迷你手绘板',
            link: 'https://haixiang6123.github.io/sketch-book/',
            right: '2018年12月',
            children: [
                {left: '本项目是一个基于 *Canvas* 开发的模拟手绘板'},
                {left: '通过监听 mouse 事件来实现绘制图形功能和擦除图形功能'},
                {left: '用户可选择不同颜色，不同画笔粗细来绘制图形'},
                {left: '通过临时生成 a 标签实现下载绘制后的图形功能'}
            ]
        },
        {
            left: '吉他谱编辑器（Star: 24）',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: '2018年5月',
            children: [
                {left: '本项目是基于 *React.js* 开发的吉他谱在线编辑器，吉他谱作者可以通过编写规定格式的文本来创作吉他谱'},
                {left: '将特定格式的文本渲染成转化成网页，并使用 *SVG* 来渲染吉他和弦图和六线谱'},
            ]
        },
        {
            left: '仿网易严选商城（移动端）',
            link: 'https://haixiang6123.github.io/yan-xuan/#/home/recommend',
            right: '2017年8月',
            children: [
                {left: '本项目基于 *Vue.js* 开发的仿网易严选商城（移动端），主要实现商品详情，商品分类，购买商品功能'},
                {left: '使用 *Vuex* 管理组件共享的数据，同时使用 localStorage 来存放用户登录状态'},
                {left: '利用 *Vue Router* 的导航守卫功能来管理用户访问权限'},
                {left: '使用 *Mock.js* 来生成假数据，用于测试后端的 API'}
            ]
        }
    ],
}
