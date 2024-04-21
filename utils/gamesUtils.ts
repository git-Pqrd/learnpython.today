import { Game } from "@/types/game";
import { knownTags as kt } from "@/config/tag";

let i = 0;
// returns a reference based on a few games attributes
export const getRef = (game: Game): number => {
  let ref = `${i}`;
  i += 1;
  return parseInt(ref);
};

/** Function to sort games by their date to be used in sort array op */
export const sortGamesByRef = (a: Game, b: Game) => {
    if (a.ref > b.ref) return -1;
    return 1;
};
