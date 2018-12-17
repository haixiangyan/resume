<template>
    <ul>
        <li>
            <strong>编程语言: </strong>{{skills.langs.join(', ')}}
        </li>
        <li>
            <strong>前端开发: </strong>{{skills.frontend.join(', ')}}
        </li>
        <li>
            <strong>后端开发: </strong>{{skills.backend.join(', ')}}
        </li>
        <li>
            <strong>移动端开发: </strong>{{skills.mobile.join(', ')}}
        </li>
        <li>
            <strong>单元测试: </strong>{{skills.test.join(', ')}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Skills",
        props: {
            skills: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">

</style>