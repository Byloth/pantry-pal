<script lang="ts" setup>
    import { AlertHandler as BaseHandler } from "@byloth/vuert";
</script>

<template>
    <BaseHandler v-slot="{ alert, customComponent, isOpen, queue, resolve, reject }"
                 class="dialog-handler">
        <Transition appear
                    name="dialog"
                    mode="out-in">
            <VCard v-if="alert" v-show="isOpen">
                <VCardItem>
                    <template v-if="alert.icon" #prepend>
                        <VIcon :icon="alert.icon" />
                    </template>
                    <template #default>
                        <VCardTitle v-if="alert.title">
                            {{ alert.title }}
                        </VCardTitle>
                        <!--VCardSubtitle v-if="alert.subtitle">
                            {{ alert.subtitle }}
                        </VCardSubtitle-->
                    </template>
                    <template v-if="alert.dismissible" #append>
                        <VIcon icon="mdi-close" @click="resolve" />
                    </template>
                </VCardItem>
                <VCardText>
                    <Component :is="customComponent"
                               v-if="customComponent"
                               :alert="alert"
                               :queue="queue"
                               :resolve="resolve"
                               :reject="reject" />
                    <pre v-else>{{ alert.message }}</pre>
                </VCardText>
                <VCardActions v-if="alert.actions?.length">
                    <VBtn v-for="action in alert.actions"
                          :key="action.id"
                          @click="resolve(action)">
                        {{ action.label }}
                    </VBtn>
                </VCardActions>
            </VCard>
        </Transition>
    </BaseHandler>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .dialog-handler
    {
        bottom: 0px;
        left: 0px;
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;
        pointer-events: none;
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: 5;

        & > .v-card
        {
            pointer-events: auto;

            pre
            {
                font-family: inherit;
                margin: 0px;
                white-space: pre-wrap;
            }

            &.dialog-enter-from,
            &.dialog-leave-to
            {
                opacity: 0;
                transform: translateY(-2.5em);
            }
            &.dialog-enter-active,
            &.dialog-leave-active
            {
                transition: opacity variables.$transition-duration variables.$transition-timing-function,
                            transform variables.$transition-duration variables.$transition-timing-function;
            }
            &.dialog-enter-to,
            &.dialog-leave-from
            {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
</style>
