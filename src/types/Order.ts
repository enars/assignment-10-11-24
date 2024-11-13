export type Order = {
  id: number;
  instrumentId: number;
  instrumentTicker: string;
  amount: number;
  price: number;
  action: keyof typeof OrderAction;
  createdAt: Date;
  updatedAt: Date;
};

export enum OrderAction {
  BUY = "buy",
  SELL = "sell",
}
