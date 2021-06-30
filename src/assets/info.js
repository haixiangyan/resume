export default {
  name: '严海翔',
  tel: '15602564425',
  email: 'haixiang6123@gmail.com',
  github: 'https://github.com/Haixiang6123',
  jianshu: 'https://www.jianshu.com/u/0340be4082b5',
  medium: 'https://medium.com/@haixiang6123',
  website: 'https://yanhaixiang.com',
  edus: [
    {
      left: '加州大学尔湾分校',
      right: '美国加州',
      children: [
        {
          left: '专业：Master of Networked System',
          right: '2018年9月 - 2020年3月'
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
      ]
    },
  ],
  skills: {
    frameworks: ['Vue.js', 'React.js', 'TypeScript', 'Express.js', 'Koa.js'],
    libraries: ['Element UI', 'Ant Design', 'GraphQL'],
    tools: ['Sass', 'Webpack', 'Faker.js', 'Mock.js'],
    tests: ['Cypress', 'Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI'],
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
        {left: '结合 *Vuex* 和 Vuex-Pathify 来精简处理 store 状态的代码'}
      ]
    },
    {
      left: 'Brix（前端实习，美国 Irvine）',
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
      left: '造轮子文章系列（Star: 1.2k+）',
      link: 'https://github.com/Haixiang6123/one-day-one-npm-lib',
      right: '2021年5月',
      children: [
        {left: '小书会带读者造 10 个非常实用的 npm 库 📦，包括：*redux*, react-error-boundary, idb-keyval 等'},
        {left: '首先做一个最 Low 的解决方法出来，然后慢慢优化它，最后推导成源码的样子。整个从 0 到 1 的设计与思考过程会完整地呈现给读者。'},
      ]
    },
    {
      left: 'node-autodoc',
      link: 'https://github.com/Haixiang6123/node-autodoc',
      right: '2021年4月',
      children: [
        {left: '一个测试驱动文档的生成器。灵感来源于 *autodoc* 和 *supertest*.'},
        {left: '这个库可以在写简单接口测试用例时，直接根据测试用例，生成 API 文档。'},
      ]
    },
    {
      left: '守望先锋 UI 库（Star: 370+, NPM 下载量: 11k+）',
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
      left: '代码高亮插件（Star: 110+, 用户量：1k+）',
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
      left: '吉他谱编辑器（Star: 24）',
      link: 'https://haixiang6123.github.io/guitar-editor/#/',
      right: '2018年5月',
      children: [
        {left: '本项目是基于 *React.js* 开发的吉他谱在线编辑器，吉他谱作者可以通过编写规定格式的文本来创作吉他谱'},
        {left: '将特定格式的文本渲染成转化成网页，并使用 *SVG* 来渲染吉他和弦图和六线谱'},
      ]
    },
  ],
}
