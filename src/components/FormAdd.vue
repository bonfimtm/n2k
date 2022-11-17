<script>
export default {
    emits: [
        'add-card',
    ],
    data() {
        return {
            text: ''
        };
    },
    methods: {
        add() {
            if (this.text) {
                this.$emit('add-card', this.text);
                this.text = '';
            }
        },
    }
}
</script>

<template>
    <form style="display: inline-flex; width: 100%;" @submit.prevent="add">
        <input class="input" style="width: 100%;" v-model.trim="text" />
        <button class="window button add" type="submit">Add</button>
    </form>
</template>

<style scoped>
.input {
    width: 256px;
    height: 26px;
    margin-right: 8px;
}

.button.add {
    width: 128px;
    height: 32px;
    padding: 6px 6px;
    text-align: center;
    font-size: large;
    font-weight: bold;
}
</style>