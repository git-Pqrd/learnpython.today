import * as React from "react";

import { CH1, SubTitle } from "@/components/custom-typo";
import { games } from "@/config/games"
import { GameComponent } from "@/components/game-component";

export default function HomeBlog() {
    return (
        <div>
            <CH1 text="Python Games" />
            <SubTitle text="Learn Python by playing games"  />
            <GameComponent games={games} />
        </div>
    );
}
