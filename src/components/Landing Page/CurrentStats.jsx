const CurrentStats = () => {
    const currentStats = [
        {
            stat: "50,000+",
            name: "Active Students"
        },
        {
            stat: "2,500+",
            name: "Teachers Worldwide"
        },
        {
            stat: "100,000+",
            name: "Free Questions"
        },
        {
            stat: "100%",
            name: "Free Access"
        }
    ]
    return (
        <div className="w-full px-10 py-20 bg-gray-100 flex justify-around">
            {currentStats.map((CurrentStat, idx) => {
                return (
                    <div className="flex flex-col" key={idx}>
                        <h3 className="text-4xl font-extrabold bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent ">{CurrentStat.stat}</h3>
                        <span className="text-gray-500 text-center">{CurrentStat.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default CurrentStats