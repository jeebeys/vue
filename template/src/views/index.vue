<template>
    <div>
        <button @click="test">index-{{ $store.state.count }}</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            test: function () {
                console.log('----', this.$cache,this.$store.cache);
                this.$store.commit('increment')
                this.$http.post("/wd/login", {username: 'super', password: '123456'},{'X-Requested-Head': 'json'}).then(data => {
                    console.log('success-proxy', data);
                })
                this.$http.get('/api/weather/city/101030100', {}).then((data) => {
                    console.log(data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
