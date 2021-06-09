<template>
    <el-button type="text" @click="dialogVisible = true">新建话题</el-button>

    <div v-for="item in blogList">{{ item.content }}</div>

    <el-dialog title="提示" v-model="dialogVisible" width="80%">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="30"
            show-word-limit
        ></el-input>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveBlog">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import { ElMessage } from 'element-plus'

import { $api } from '../api';
export default {
    setup(props, ctx) {
        var blogList = ref([])
        let textarea = ref("")
        let title = ref("")
        let dialogVisible = ref(false)
        onMounted(async () => {
            var { data } = await $api.blog.list();
            blogList.value = data.data
        })
        let saveBlog = async () => {
            var { data } = await $api.blog.new({
                title: title.value,
                content: textarea.value
            });
            if (data == 0) {
                ElMessage.success({
                    message: data.message,
                    type: 'success'
                });
            } else {
                ElMessage.warning({
                    message: data.message,
                    type: 'warning'
                });
                return
            }
            dialogVisible.value = false
        }
        return { blogList, dialogVisible, textarea, title, saveBlog }
    },
}
</script>