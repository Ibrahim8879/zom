import React from "react";
import "./cardliststyle.css"
import { Card } from "../card/card";

export const Cardlists = props =>{
    return(
    <div className="card-list">
                  {props.Monsters.map(
            monster => (<Card key={monster.id} monster={monster}/>)
          )}
    </div>
)};
