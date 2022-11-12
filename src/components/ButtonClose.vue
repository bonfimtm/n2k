<template>
    <div class="window window-button">
        <div class="meridian">
            <div class="diagonal"></div>
        </div>
    </div>
</template>

<style scoped>
.meridian {
    height: 24px;
    width: 2px;
    margin-left: 11px;
    background-color: var(--text-color);
    transform: rotate(45deg);
    z-index: 1;
}

.diagonal {
    height: 24px;
    width: 2px;
    background-color: var(--text-color);
    transform: rotate(90deg);
    z-index: 2;
}
</style>