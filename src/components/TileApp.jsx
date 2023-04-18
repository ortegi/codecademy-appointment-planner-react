const TileApp = ({data}) => {
    return (
        <div className="bg-[#2f2f2f] rounded px-6 py-3 my-3 w-full">   
            <h2 className="font-bold my-1"> 📌 {data.title} </h2>
            <p className="my-1">📆 {data.date} </p>
            <p className="my-1">🕓 {data.time} </p>
            <p className="my-1">🙍‍♂️ {data.contact} </p>
        </div>
    )
}

export default  TileApp;