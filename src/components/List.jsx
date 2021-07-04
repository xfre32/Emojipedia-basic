import React from "react";
import Card from "./Card";
import Emojis from "../emojipedia";

function renderCard(emo) {
  return (
    <Card key={emo.id} emoji={emo.emoji} term={emo.name} det={emo.meaning} />
  );
}

function List() {
  return <dl className="dictionary">{Emojis.map(renderCard)}</dl>;
}

export default List;
