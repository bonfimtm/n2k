<template>
    <button class="window button">
        <div class="meridian">
            <div class="diagonal"></div>
        </div>
    </button>
</template>

<style scoped>
.window.button {
    float: right;
    width: 16px;
    height: 16px;
}

.meridian {
    height: 10px;
    width: 1px;
    margin-left: -.5px;
    background-color: var(--text-color);
    transform: rotate(45deg);
    z-index: 1;
}

.diagonal {
    height: 10px;
    width: 1px;
    background-color: var(--text-color);
    transform: rotate(90deg);
    z-index: 2;
}
</style>