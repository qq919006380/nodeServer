<template>
    <button @click="on"></button>
</template>
<script>
export default {
    setup() {
        function on() {
            console.log(123);
        }
        return { on }
    }
}
</script>