type Player<E> = {
  name: string;
  extraInfo: E;
};
type nicoPlayer = Player<{ favFood: string }>;

const nico: nicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "pizza",
  },
};
