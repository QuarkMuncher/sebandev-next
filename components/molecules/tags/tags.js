import guid from "../../../lib/guid";
import { BlueTag, RedTag, YellowTag, GreenTag } from "../../atoms";

const colorMap = {
  blue: "seriesquickshot",
  red: "vite",
  yellow: "vanilla",
  green: "javascript",
};

export default function Tags({ tags }) {
  return (
    <div className={`flex gap-1`}>
      {tags.map((tag) => {
        if (colorMap.blue.includes(tag))
          return <BlueTag key={guid()} title={tag} />;
        else if (colorMap.red.includes(tag))
          return <RedTag key={guid()} title={tag} />;
        else if (colorMap.yellow.includes(tag))
          return <YellowTag key={guid()} title={tag} />;
        else if (colorMap.green.includes(tag))
          return <GreenTag key={guid()} title={tag} />;
      })}
    </div>
  );
}
