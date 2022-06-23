<template>
    <ul>
        <li>
            <strong>技术：</strong>{{skills.techs.join(', ')}}
        </li>
        <li>
            <strong>测试 & 部署：</strong>{{skills.tests.join(', ')}}
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
