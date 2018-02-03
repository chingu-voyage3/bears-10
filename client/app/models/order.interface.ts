export interface Order {
  item: string;
  sku: string;
  vendor: string;
  quantity: number;
  price: string;
  _id?: string;
  orderClosed?: boolean;
  dateClosed?: string;
}
