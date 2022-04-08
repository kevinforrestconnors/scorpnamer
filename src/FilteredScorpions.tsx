import React, { useEffect, useState } from "react";
import { getScorpMetadata } from "./scorp-data";
import { scropEasterEgg, getOwnedScorps } from "./util";

const allScorpIds: string[] = [];
for (let i = 0; i < 10000; i++) {
  let sid = i.toString();

  while (sid.length !== 4) {
    sid = "0" + sid;
  }

  allScorpIds.push(sid);
}

export function FilteredScorpions(props: {
  walletFilter: string;
  scorpionFilters: { [attName: string]: Set<string> };
}): React.ReactElement {
  const [owners, setOwners] = useState<string[]>([]);

  useEffect(() => {
    if (!owners) {
      (async () => {
        const owners = await getOwnedScorps(props.walletFilter);
        setOwners(owners);
      })();
    }
  }, [owners, props.walletFilter]);

  //console.log(owners);

  function passesFilters(id: string): boolean {
    let passFilter = true;
    const attributes: any = getScorpMetadata(id).attributes;
    for (const traitName of Object.keys(attributes)) {
      if (
        !props.scorpionFilters[traitName] ||
        props.scorpionFilters[traitName].size === 0
      ) {
        continue;
      }

      if (
        props.scorpionFilters[traitName].has(attributes[traitName].toString())
      ) {
        continue;
      } else {
        passFilter = false;
        break;
      }
    }
    return passFilter;
  }

  let scorpions = [];

  for (const id of allScorpIds) {
    if (passesFilters(id)) {
      scorpions.push(
        <a
          key={id}
          className="filtered-scorpions-a"
          href={`https://radstrike.com/scorpions/info/?number=${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="filtered-scorpions-div"
            style={{ backgroundImage: `url(/img/${id}_large.png)` }}
          ></div>
        </a>
      );
    }
  }

  const msg =
    scorpions.length === 0 ? (
      <div>
        There are no scorpions with these filters… maybe you should be less
        selective.{" "}
      </div>
    ) : scorpions.length === 1 ? (
      <div>
        This is the only scorpion with these specific filters… wow, so special!{" "}
      </div>
    ) : scorpions.length === 2 ? (
      <div>
        There are only TWO scorpions with these specific filters… what a perfect
        pairing!{" "}
      </div>
    ) : (
      <div>
        There are {scorpions.length < 100 && "only"} {scorpions.length}{" "}
        {scropEasterEgg("scorpion")}s with these filters
        {scorpions.length < 50 ? "!" : "."}
        {scorpions.length < 5 ? "!!" : ""}{" "}
        {scorpions.length === 10000 && "(duh, cause you have no filters)"}
      </div>
    );

  return (
    <div className="filtered-scorpions">
      {msg}
      <div className="filtered-scorpions-grid">{scorpions}</div>
    </div>
  );
}
