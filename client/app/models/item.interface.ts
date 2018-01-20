/*
    ITEM INTERFACE/MODEL
*/

export interface Item {
    _id: string;
    name: string;
    SKU: string;
    sellable: boolean;
    retailPrice: number;
    orderPrice: number;
    manufacturer: string;
    description: string;
    size: string;
    taxExempt: boolean;
    count: number;
    reorderedCount: number;
    orderNeeded: boolean;
    orderPlaced: boolean;
    backordered: boolean;
    expectedDelivery: Date;
    category: string;
}
