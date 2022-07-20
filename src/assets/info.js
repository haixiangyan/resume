export default {
  name: '严海翔',
  tel: '15602564425',
  email: 'haixiang6123@gmail.com',
  github: 'https://github.com/haixiangyan',
  medium: 'https://medium.com/@haixiang6123',
  website: 'https://yanhaixiang.com',
  zhihu: 'https://www.zhihu.com/people/haixiangyan',
  edus: [
    {
      left: '加州大学尔湾分校',
      right: '美国加州',
      children: [
        {
          left: '专业：Master of Networked System，GPA: 3.3 / 4.0',
          right: '2018年9月 - 2020年3月'
        },
      ]
    },
    {
      left: '东北大学',
      right: '中国沈阳',
      children: [
        {
          left: '专业：软件工程本科，GPA：3.6 / 5.0',
          right: '2014年10月 - 2018年6月'
        },
      ]
    },
  ],
  skills: {
    techs: ['React.js', 'Vue.js', 'HTML5', 'JavaScript', 'TypeScript', 'ES6', 'CSS3', 'SCSS', 'Node.js'],
    tests: ['Cypress', 'Jest', 'React Testing Library'],
  },
  works: [
    {
      left: '腾讯@智能平台',
      link: '',
      right: '2021年11月 - 至今',
      children: [
        {left: '在腾讯智能平台负责智能客服系统开发，为中小企业客户提供智能客服机器人能力，利用技术提升企业客服沟通效率'},
        {left: '使用 *React* + *Redux* + *Ant Design* 技术栈开发智能机器人平台、质检平台、客服H5、小程序以及企微侧边栏应用'},
        {left: '使用 *qiankun* 重构老平台，一方面团队能持续用新技术更新和重构，一方面保证团队随时可以接入新需求，实现项目增量更新'},
        {left: '使用 *qiankun* 对接和融合多方平台，能够让单一客服机器人平台接入数智人平台、新行业平台，大大增强老项目的可扩展能力'},
        {left: '帮助项目构建一条完备的流水线，实现多环境发布、环境隔离、项目回滚、质量红线和代码质量告警，同时接入页面告警以及埋点上报，从而加强项目工程化建设'},
      ]
    },
    {
      left: '腾讯@在线教育',
      link: '',
      right: '2020年7月 - 2021年11月',
      children: [
        {left: '在腾讯开心鼠部门负责微信社群运营系统开发，包含桌面PC端以及企业微信侧边栏应用，服务于 5000+ 运营老师，利用技术降低人力成本和提高运营效率'},
        {left: '使用 *React* + *Redux* + *Ant Design* 技术栈开发企业微信侧边栏和业务管理后台，并参与前端中台开发，使用 *Nest.js* 开发企微转发服务以及前端所需公共服务'},
        {left: '根据业务需要封装一套侧边栏开发 SDK 工具以及上手模板，并输出《侧边栏开发指南》，方便其它部门上手和接入'},
        {left: '调研并深入了解 *single-spa* 和 *qiankun* 微前端框架，在企微侧边栏落地微前端技术，利用 *qiankun* 管理多个应用'},
        {left: '在前端处设置缓存层，通过并行 *Promise*，以及 *Suspense + Lazy Component* 的方法优化网页加载速度'},
      ]
    },
    {
      left: '大疆创新（美国 Palo Alto）',
      link: '',
      right: '2019年06月',
      children: [
        {left: '负责开发 LAANC（Low-Altitude Authorization and Notification）无人机空中飞行范围控制系统，使用 *Vue.js* + *Vuex* + *Vue Router* 编写开发'},
        {left: '使用开源地图库 *MapBox*，并在业务场景中优化开源库中的圆型区域选取问题'}
      ]
    },
    {
      left: 'Data Brix（美国 Irvine）',
      link: '',
      right: '2019年04月',
      children: [
        {left: '使用 *React.js* + *Redux* + *Ant Design* 单独开发一套 OJ（Online Judge）系统，负责网页搭建以及管理页面开发'},
      ]
    },

  ],
  projects: [
    {
      left: '知识输出',
      right: '2020年 - 至今',
      children: [
        {left: '《造轮子文章系列》（Star: 1.5k+）', link: 'https://github.yanhaixiang.com/make-wheels/'},
        {left: '《Jest 实践指南》（Star: 500+）', link: 'https://github.yanhaixiang.com/jest-tutorial/'},
        {left: '《Linter 上手指南》（Star: 150+）', link: 'https://github.yanhaixiang.com/linter-tutorial/'},
        {left: '《企业微信侧边栏开发指南》&开发模板', link: 'https://github.com/wecom-sidebar'},
      ]
    },
    {
      left: '守望先锋 UI 库（Star: 420+）',
      link: 'https://github.yanhaixiang.com/overwatch-ui-doc/#/',
      right: '2019年02月',
      children: [
        {left: '本项目是基于 *Vue.js* 并模仿守望先锋 UI 开发的一套 UI 组件库'},
        {left: '使用 CSS 预处理器 *Sass* 定制组件的样式，并定义不同 Mixins 来封装样式以提高样式的重用度'},
        {left: '使用 *Chai，Sinon，Mocha* 对组件进行单元测试，并结合 *Travis CI，Karma* 进行自动化测试'},
      ]
    },
    {
      left: '代码高亮插件（Star: 110+, 用户量：1k+）',
      link: 'https://github.com/haixiangyan/codeblock-beautifier',
      right: '2019年01月',
      children: [
        {left: '一个用于高亮博客文章代码块的 *Chrome* 插件，支持 Medium，知乎，简书，StackOverflow 等大部分博客网站'},
        {left: '通过 *Highlight.js* 自动检测代码所使用的语言，支持 80 多种代码主题以及 20 多种编程语言'},
      ]
    },
    {
      left: '吉他谱编辑器（Star: 100+）',
      link: 'https://github.yanhaixiang.com/guitar-tabs-editor/#/',
      right: '2018年05月',
      children: [
        {left: '基于 *React.js* 开发的吉他谱在线编辑器，吉他谱作者可以通过编写类 Markdown 格式的文本来创作吉他谱'},
      ]
    },
  ],
}
