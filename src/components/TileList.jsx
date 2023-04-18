import Tile from "./Tile";
import { useUserContext } from "../context/UserContext";

const TileList = () => {

    const {list} = useUserContext();

  return (
    <div className="mt-10 w-full md:w-2/5">
      {list.map((item) => (
        <Tile data={item} key={item.name} />
      ))}
    </div>
  );
};

export default TileList;
