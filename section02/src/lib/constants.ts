export const API_URL = "http://localhost:3000";

export const QUERY_KEYS = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    datail: (id: string) => ["todo", "detail", id],
  },
};
