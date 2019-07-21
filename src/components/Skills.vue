<template>
    <ul>
        <li>
            <strong>框架：</strong>{{skills.frameworks.join(', ')}}
        </li>
        <li>
            <strong>库：</strong>{{skills.libraries.join(', ')}}
        </li>
        <li>
            <strong>工具：</strong>{{skills.tools.join(', ')}}
        </li>
        <li>
            <strong>测试&部署</strong>{{skills.tests.join(', ')}}
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