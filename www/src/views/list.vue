<template>
    <div class="p-4 rounded-lg container max-w-screen-lg mx-auto">
        <div class="flex">
            <div class="w-3/4 divide-y divide-gray-200">
                <div
                    class="group pt-4 pb-8 px-4 hover:shadow-lg transition-all duration-300 flex cursor-pointer"
                    v-for="item in blogList"
                >
                    <div
                        class="w-4/5  group-hover:text-blue-400 transition-all duration-300"
                    >
                        <div class="text-xl antialiased font-black">{{ item.title }}</div>
                        <div class="text-sm text-gray-600">{{ item.content }}</div>
                    </div>
                    <div class="w-1/5">
                        <div class="mb-1">{{ item.author }}</div>
                        <div class="text-gray-300 text-xs">{{ item.createtime }}</div>
                    </div>
                </div>
            </div>
            <div class="w-1/4 ml-6 pt-4">
                <el-button
                    class="w-full focus:outline-none"
                    type="primary"
                    @click="dialogVisible = true"
                    plain
                >发布新帖</el-button>

                <div class="p-4 border-solid border-1 mt-4 border-light-blue-100 rounded-lg">
                    <div>最热主题</div>
                    <div class="divide-gray-200 divide-y">
                        <div class="mb-1" v-for="item in blogList">
                            <a
                                :underline="false"
                                class="text-blue-400 text-sm cursor-pointer antialiased"
                                type="primary"
                            >{{ item.title }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <el-dialog title="发表话题" v-model="dialogVisible" width="80%">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <el-input
            class="mt-4"
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            :rows="5"
            maxlength="200"
            show-word-limit
        ></el-input>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveBlog">发 布</el-button>
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
                    message: "发表成功",
                    type: 'success'
                });
                dialogVisible.value = false
            } else {
                ElMessage.warning({
                    message: data.message,
                    type: 'warning'
                });
                return
            }

        }
        return { blogList, dialogVisible, textarea, title, saveBlog }
    },
}
</script>