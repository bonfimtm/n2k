<template>
    <div class="window button">
        <div class="meridian">
            <div class="diagonal"></div>
        </div>
    </div>
</template>

<style scoped>
.window.button {
    float: right;
    width: 16px;
    height: 16px;
}

.meridian {
    height: 16px;
    width: 2px;
    margin-left: 7px;
    background-color: var(--text-color);
    transform: rotate(45deg);
    z-index: 1;
}

.diagonal {
    height: 16px;
    width: 2px;
    background-color: var(--text-color);
    transform: rotate(90deg);
    z-index: 2;
}
</style>