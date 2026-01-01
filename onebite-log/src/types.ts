import { type Database } from "./database.types";

export type PostEnitiy = Database["public"]["Tables"]["post"]["Row"];

export type useMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
