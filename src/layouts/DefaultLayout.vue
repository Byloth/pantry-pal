<script lang="ts" setup>
    import { ref } from "vue";

    import AppBar from "../components/globals/AppBar.vue";
    import NavigationDrawer from "../components/globals/NavigationDrawer.vue";
    import HiddenFooter from "../components/globals/HiddenFooter.vue";

    const open = ref(false);
    const toggleDrawer = () => { open.value = !(open.value); };
</script>

<template>
    <VApp>
        <NavigationDrawer v-model:drawer="open" />
        <AppBar @drawer:toggle="toggleDrawer" />
        <VMain>
            <slot></slot>
        </VMain>
        <HiddenFooter />
    </VApp>
</template>

<style lang="scss">
    @use "@/assets/scss/index" as *;

    #app
    {
        .v-main
        {
            background-color: $app-slightly-off-white;
        }
    }
</style>
