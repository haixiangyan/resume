<template>
    <ul>
        <li v-for="item in source">
            <div class="item">
                <span class="left">
                    {{item.left}}
                    <small>
                        <a class="link" v-if="item.link" :href="item.link" target="_blank"> ({{item.link}})</a>
                    </small>
                </span>
                <span class="right">{{item.right}}</span>
            </div>
            <ul>
                <li v-for="childrenItem in item.children">
                    <p class="children-item">
                        <span class="left">
                          <span v-html="renderLeft(childrenItem.left)"></span>
                          <a class="link" v-if="childrenItem.link" :href="childrenItem.link" target="_blank">
                            <strong>（{{childrenItem.link}}）</strong>
                          </a>
                        </span>
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
                return left.replace(/\*([\w.\s&()\/,，、-]+)\*/g, '<strong>$1</strong>');
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
        small {
            display: flex;
        }
    }

    .link {
      color: #42b983;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .children-item {
      font-size: 0.9em;
    }
</style>
