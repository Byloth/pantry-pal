<script lang="ts" setup>
    const $emit = defineEmits(["drawer:toggle"]);
</script>

<template>
    <VAppBar color="primary">
        <template #prepend>
            <VAppBarNavIcon @click="$emit('drawer:toggle')" />
        </template>
        <template #default>
            <VToolbarTitle>Pantry Pal</VToolbarTitle>
            <VSpacer />
            <VBtn text
                  href="https://github.com/Byloth/pantry-pal"
                  target="_blank">
                GitHub
            </VBtn>
        </template>
    </VAppBar>
</template>

<style lang="scss" scoped></style>
