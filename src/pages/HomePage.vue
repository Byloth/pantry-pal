<script lang="ts" setup>
    import { useVuert } from "@byloth/vuert";

    import VueLogo from "@/components/VueLogo.vue";

    const $vuert = useVuert();

    const emitSuccess = () => $vuert.emit({
        icon: "circle-check",
        title: "Success",
        message: "This is a success message.",
        type: "success",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitInfo = () => $vuert.emit({
        icon: "circle-info",
        title: "Info",
        message: "This is an informative message.",
        type: "info",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitWarning = () => $vuert.emit({
        icon: "circle-exclamation",
        title: "Warning",
        message: "This is a warning message.",
        type: "warning",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitError = () => $vuert.emit({
        icon: "circle-xmark",
        title: "Error",
        message: "This is a error message.",
        type: "error",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
</script>

<template>
    <div id="home-page" class="page">
        <header>
            <VueLogo />
        </header>
        <h1>Your Pantry Pal is up and running! 🚀</h1>
        <div>
            <VBtn color="success" @click="emitSuccess">
                Success
            </VBtn>
            <VBtn color="info" @click="emitInfo">
                Informative
            </VBtn>
            <VBtn color="warning" @click="emitWarning">
                Warning
            </VBtn>
            <VBtn color="error" @click="emitError">
                Error
            </VBtn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #home-page
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        .v-btn
        {
            margin: 0.5em;
        }
    }
</style>
