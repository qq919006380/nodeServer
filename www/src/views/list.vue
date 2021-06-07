<template>
    <button>新建博客</button>
    <div v-for="item in blogList">
        {{item.content}}
    </div>
    <el-button>默认按钮</el-button>

</template>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { $api } from '../api';
export default {
    setup(props, ctx) {

        var blogList = ref([])
        onMounted(async () => {
            var { data } = await $api.blog.list();
            blogList.value = data.data
        })
        return { blogList }
    },

}
</script>