<script setup lang="ts">
    import { ref } from "vue";
    import { PantryItem } from "@/models/PantryItem";

    const pantryItems = ref<PantryItem[]>([]);

    function addItem()
    {
        pantryItems.value.push(new PantryItem("Nuovo Prodotto"));
    }

    function editItem(index: number)
    {
        const item = pantryItems.value[index];
        item.name = prompt("Modifica il nome del prodotto", item.name) || item.name;
    }

    function removeItem(index: number)
    {
        pantryItems.value.splice(index, 1);
    }
</script>

<template>
    <VContainer id="pantry-page">
        <VRow>
            <VCol>
                <h1>La tua Dispensa</h1>
                <VBtn color="primary" @click="addItem">
                    Aggiungi Prodotto
                </VBtn>
                <VList>
                    <VListItem v-for="(item, index) in pantryItems" :key="index">
                        <VListItemContent>
                            <VListItemTitle>{{ item.name }}</VListItemTitle>
                            <VListItemSubtitle>
                                Quantità: {{ item.quantity }}
                                <VBtn icon
                                      small
                                      @click="item.increaseQuantity()">
                                    <VIcon>mdi-plus</VIcon>
                                </VBtn>
                                <VBtn icon
                                      small
                                      @click="item.decreaseQuantity()">
                                    <VIcon>mdi-minus</VIcon>
                                </VBtn>
                            </VListItemSubtitle>
                        </VListItemContent>
                        <VListItemAction>
                            <VBtn icon
                                  small
                                  color="grey"
                                  @click="editItem(index)">
                                <VIcon>mdi-pencil</VIcon>
                            </VBtn>
                            <VBtn icon
                                  small
                                  color="grey"
                                  @click="removeItem(index)">
                                <VIcon>mdi-delete</VIcon>
                            </VBtn>
                        </VListItemAction>
                    </VListItem>
                </VList>
            </VCol>
        </VRow>
    </VContainer>
</template>

<style lang="scss" scoped>
    #pantry-page
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h1
        {
            margin-bottom: 20px;
        }

        .mdi-pencil,
        .mdi-delete
        {
            color: grey;
        }
    }
</style>
