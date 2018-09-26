<template>
    <ul>
        <li>
            <strong>Languages: </strong>{{skills.langs.join(', ')}}
        </li>
        <li>
            <strong>Technologies: </strong>{{skills.techs.join(', ')}}
        </li>
        <li>
            <strong>Databases: </strong>{{skills.dbs.join(', ')}}
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