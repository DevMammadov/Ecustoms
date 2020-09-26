export interface IList {
  cardsState: ICardState;
  getCards(type: string): void;
}

export interface IList {
  id: number;
  title: string;
  name: string;
  auth: number;
  swapIcon: boolean;
  icon: string;
  type: string;
}
