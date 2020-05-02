<template>
    <div>
        <button @click="test">index-{{ $store.state.count }}-{{msg}}</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['msg'],
        methods: {
            test: function () {
                console.log('----', this.$cache,this.$store.cache);
                this.$store.commit('increment')
                this.$http.get('/api/weather/city/101030100', {}).then((data) => {
                    console.log(data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
