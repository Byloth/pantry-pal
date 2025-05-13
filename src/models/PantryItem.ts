export class PantryItem
{
    name: string;
    quantity: number;

    constructor(name: string, quantity = 1)
    {
        this.name = name;
        this.quantity = quantity;
    }

    increaseQuantity(): void
    {
        this.quantity++;
    }

    decreaseQuantity(): void
    {
        if (this.quantity > 0)
        {
            this.quantity--;
        }
    }
}
