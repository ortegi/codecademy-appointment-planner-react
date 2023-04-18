const Tile = ({data}) => {
    return (
        <div className="bg-[#2f2f2f] rounded px-6 py-3 my-3 w-full">   
            <h2 className="font-bold my-1"> 🙍‍♂️ {data.name} </h2>
            <p className="my-1">☎ {data.phone} </p>
            <p className="my-1">💬 {data.email} </p>
        </div>
    )
}

export default Tile;