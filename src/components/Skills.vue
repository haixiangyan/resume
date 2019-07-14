<template>
    <ul>
        <li>
            <strong>Languages: </strong>{{skills.langs.join(', ')}}
        </li>
        <li>
            <strong>Frontend: </strong>{{skills.frontend.join(', ')}}
        </li>
        <li>
            <strong>Test: </strong>{{skills.test.join(', ')}}
        </li>
        <li>
            <strong>Others: </strong>{{skills.others.join(', ')}}
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