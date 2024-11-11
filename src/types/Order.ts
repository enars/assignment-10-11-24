export type Order = {
  id: number;
  instrumentId: number;
  amount: number;
  price: number;
  action: keyof typeof OrderAction;
  createdAt: Date;
  updatedAt: Date;
};

export const OrderAction = {
  BUY: "buy",
  SELL: "sell",
} as const;
