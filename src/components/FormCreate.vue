<script>
export default {
    data() {
        return {
            text: ''
        };
    },
    methods: {
        createItem() {
            console.log(this.text);
        }
    }
}
</script>

<template>
    <div style="display: inline-flex; width: 100%;">
        <input class="input" v-model="text" />
        <button class="window button create" @click="createItem">
            Create
        </button>
    </div>
</template>

<style scoped>
.input {
    width: 256px;
    height: 26px;
    margin-right: 8px;
}

.button.create {
    width: 128px;
    height: 32px;
    padding: 6px 6px;
    text-align: center;
    font-size: large;
    font-weight: bold;
}
</style>