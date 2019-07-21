<template>
    <div>
        <div class="info">
            <h1 class="name">{{name}}</h1>
            <p>
                <span class="tel">{{tel}}</span>
                <span class="email">{{email}}</span>
            </p>
            <div class="links">
                Github <a :href="github">{{github}}</a>
            </div>
            <div class="blogs">
                个人主页 <a :href="website">{{website}}</a>
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

        <div v-if="interns" class="interns">
            <h4>实习经历</h4>
            <hr>
            <List :source="interns"></List>
        </div>

        <div class="projects">
            <h4>项目经验</h4>
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

        .email {
            margin-left: 20px;
        }
        .links, .blogs {
            text-align: center;
        }
    }

    a {
        color: #42b983;
        text-decoration: none;
    }
</style>
