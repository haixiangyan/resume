<template>
    <ul>
        <li>
            <strong>Frameworks: </strong>{{skills.frameworks.join(', ')}}
        </li>
        <li>
            <strong>Libraries: </strong>{{skills.libraries.join(', ')}}
        </li>
        <li>
            <strong>Tools: </strong>{{skills.tools.join(', ')}}
        </li>
        <li>
            <strong>Test: </strong>{{skills.test.join(', ')}}
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
