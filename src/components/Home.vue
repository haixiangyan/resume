<template>
    <div>
        <div class="info">
            <h1 class="name">{{name}}</h1>
            <p>
                <span class="tel">Tel: {{tel}}</span>
                <span class="email">E-mail: {{email}}</span>
            </p>
            <p class="linkedin">
                LinkedIn: {{linked}}
            </p>
			<p class="github">
				Github: {{github}}
			</p>
        </div>

        <div class="edu">
            <h4>EDUCATION</h4>
            <hr>
            <List :source="edus"></List>
        </div>

        <div class="skills">
            <h4>SKILLS</h4>
            <hr>
            <Skills :skills="skills"></Skills>
        </div>

        <div class="projects">
            <h4>PROJECTS</h4>
            <hr>
            <List :source="projects"></List>
        </div>

        <div class="interns">
            <h4>INTERNSHIP</h4>
            <hr>
            <List :source="interns"></List>
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
    }

    a {
        color: #42b983;
    }
</style>
