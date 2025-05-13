<script setup lang="ts">
    import { ref } from "vue";

    interface PantryItem {
        name: string;
        quantity: number;
    }

    const pantryItems = ref<PantryItem[]>([]);

    function addItem()
    {
        pantryItems.value.push({ name: "Nuovo Prodotto", quantity: 1 });
    }

    function editItem(index: number)
    {
        const item = pantryItems.value[index];
        item.name = prompt("Modifica il nome del prodotto", item.name) || item.name;
        const quantity = prompt("Modifica la quantità", item.quantity.toString());
        item.quantity = quantity ? parseInt(quantity, 10) : item.quantity;
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
                            <VListItemSubtitle>{{ item.quantity }}</VListItemSubtitle>
                        </VListItemContent>
                        <VListItemAction>
                            <VBtn icon @click="editItem(index)">
                                <VIcon>mdi-pencil</VIcon>
                            </VBtn>
                            <VBtn icon @click="removeItem(index)">
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
    }
</style>
