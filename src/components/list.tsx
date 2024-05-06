import { FC } from "react";
import Item, { Track } from "./item";

interface ListProps {
  list: Track[];
}

const List: FC<ListProps> = ({ list }) => {
  const listItems = list.map((item) => (
    <Item
      id={item.id}
      name={item.name}
      album={item.album}
      artist={item.artist}
      popularity={item.popularity}
      release_date={item.release_date}
      uri={item.uri}
      key={item.id}
    />
  ));
  return <div className="flex flex-row flex-wrap gap-2">{listItems}</div>;
};

export default List;
