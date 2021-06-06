<template>
    <button @click="post">asd</button>

    <button @click="xxx">test</button>
</template>
<script>
export default {
    methods: {
        async xxx() {
            await this.$api.blog.detail({ a: "s" })
        },
        async post() {
            var { data } = await this.$api.blog.detail({
                title: "xxx",
                content: "内容1020",
            });
            console.log(data);
        },
    }
}
</script>