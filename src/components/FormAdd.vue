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
                this.$emit('add-card', this.text)
                this.text = '';
            }
        },
    }
}
</script>

<template>
    <div style="display: inline-flex; width: 100%;">
        <input class="input" v-model="text" />
        <button class="window button add" @click="add">Add</button>
    </div>
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