import TileApp from "./TileApp"

const TileListApp = ({appointments}) => {

    const random = Math.floor(Math.random() * 19999)
    return(
        <div className="mt-10 w-full md:w-2/5">
        {appointments.map((item) => (
          <TileApp data={item} key={`${item.name} ${random}`} />
        ))}
      </div>
    )

}

export default TileListApp