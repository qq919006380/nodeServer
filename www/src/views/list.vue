<template>
    <button @click="xxa">asd</button>
    <button @click="post">post</button>
</template>
<script>
import { $api } from '../api';
export default {
    setup(props, ctx) {
        async function xxa() {
            var  {data}  = await $api.blog.list();
            console.log(data);
        }
        return { xxa }
    },
    methods: {
        async post() {
            var { data } = await this.$api.blog.list();
            console.log(data);
        },
    }
}
</script>