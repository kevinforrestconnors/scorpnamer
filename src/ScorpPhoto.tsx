import React from "react";

type ScorpPhotoProps = {
  scorpId: string;
  image: string;
};

export function ScorpPhoto(props: ScorpPhotoProps): React.ReactElement {
  return (
    <div className="scorpPhoto">
      <a
        href={`https://radstrike.com/scorpions/info/?number=${props.scorpId}`}
        target="_blank"
        rel="noreferrer"
      >
        {<img src={props.image} alt={`Scorp ${props.scorpId}`} />}
      </a>
    </div>
  );
}
