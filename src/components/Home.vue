<template>
  <div>
    <div class="info">
      <h1 class="name">{{ name }}</h1>
      <p>
        电话: <strong class="tel">{{ tel }}</strong>
        邮件: <strong class="email">{{ email }}</strong>
      </p>
    </div>

    <div class="contact">
      <h4>个人链接</h4>
      <hr>
      <div class="blogs">
        个人主页: <strong><a :href="website" target="_blank">{{ website }}</a>（很酷的个人页）</strong>
      </div>
      <div class="links">
        Github: <strong><a :href="github" target="_blank">{{ github }}</a>（3.5k+ Stars）</strong>
      </div>
      <div class="links">
        知乎: <strong><a :href="zhihu" target="_blank">{{ zhihu }}</a>（1.6k+ 关注）</strong>
      </div>
      <div class="links">
        Medium: <strong><a :href="medium" target="_blank">{{ medium }}</a>（20+ 英文博客）</strong>
      </div>
    </div>

    <div class="edu">
      <h4>教育背景</h4>
      <hr>
      <List :source="edus"></List>
    </div>

    <div class="skills">
      <h4>技能清单</h4>
      <hr>
      <Skills :skills="skills"></Skills>
    </div>

    <div v-if="works" class="interns">
      <h4>工作经历</h4>
      <hr>
      <List :source="works"></List>
    </div>

    <div class="projects">
      <h4>个人项目</h4>
      <hr>
      <List :source="projects"></List>
    </div>
  </div>
</template>

<script>
import List from './List';
import Skills from './Skills';
import info from '../assets/info';

export default {
  name: 'Home',
  data() {
    return info
  },
  components: {
    List,
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  .name {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .links, .blogs {
    //text-align: center;
  }
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
