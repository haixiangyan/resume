<template>
    <ul>
        <li v-for="item in source">
            <p class="item">
                <span class="left">
                    {{item.left}}
                    <br>
                    <a class="link" v-if="item.link" :href="item.link"> ({{item.link}})</a>
                </span>
                <span class="right">{{item.right}}</span>
            </p>
            <ul>
                <li v-for="childrenItem in item.children">
                    <p class="children-item">
                        <span v-html="renderLeft(childrenItem.left)" class="left"></span>
                        <span class="right">{{childrenItem.right}}</span>
                    </p>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Edu",
        props: {
            source: {
                type: Array,
                required: true
            }
        },
        methods: {
            renderLeft(left) {
                return left.replace(/\*([\w.\s&()\/,]+)\*/g, '<strong>$1</strong>');
            }
        }
    }
</script>

<style scoped lang="scss">
    .item, .children-item {
        display: flex;
        justify-content: space-between;
    }

    .item {
        margin-top: 3px;
        font-weight: bold;
        .link {
            color: #42b983;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .children-item {
        font-size: 0.9em;
    }
</style>
