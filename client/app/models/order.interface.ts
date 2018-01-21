export interface Order {
  item: string;
  sku: string;
  vendor: string;
  quantity: number;
  price: number;
  _id?: string;
  orderClosed?: boolean;
  dateClosed?: string;
}
