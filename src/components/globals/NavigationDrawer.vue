<script lang="ts" setup>
    const open = defineModel("drawer", {
        default: false,
        type: Boolean
    });
</script>

<template>
    <VNavigationDrawer v-model="open">
        <VList>
            <VListItem title="Anonymous user" subtitle="Administrator">
                <template #prepend>
                    <VAvatar color="grey-lighten-1">
                        <VIcon color="white" icon="mdi-account-circle" />
                    </VAvatar>
                </template>
            </VListItem>
        </VList>
        <VDivider />
        <VList nav>
            <VListItem prepend-icon="mdi-home"
                       title="Home"
                       :to="{ name: 'home' }" />
            <VListItem prepend-icon="mdi-file-document-arrow-right-outline"
                       title="Pantry"
                       :to="{ name: 'pantry' }" />
            <VListItem prepend-icon="mdi-package-variant-closed"
                       title="About"
                       :to="{ name: 'about' }" />
        </VList>
    </VNavigationDrawer>
</template>

<style lang="scss" scoped></style>
