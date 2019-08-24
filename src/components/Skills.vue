<template>
    <ul>
        <li>
            <strong>Frontend: </strong>{{skills.frontend.join(', ')}}
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
