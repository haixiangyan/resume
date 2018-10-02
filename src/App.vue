<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app',
        data() {
            return {
                indent: '20px'
            }
        },
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    #app {
        margin: 0 auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: .9em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
    }
    h4 {
        margin-top: 3px;
    }
    hr {
        margin: 1px 0;
    }
    ul {
        padding-inline-start: 20px;
    }
</style>
