import './Main.css'
function Main() {
    const shows = [
        {
            id: 1, title: 'Weekly Motiation...', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true', by: 'Ben Ins Scott'
        }, {
            id: 2, title: 'MEDITATION SELF', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true', by: 'Ben Ins Scott'

        }, {
            id: 3, title: 'Word beyond act...', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true', by: 'Ben Ins Scott'

        }, {
            id: 4, title: 'The Alexa Show', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true', by: 'Ben Ins Scott'

        }, {
            id: 5, title: 'The Stories of Ma...', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true', by: 'Ben Ins Scott'

        }, {
            id: 6, title: 'Motivation Daily b...', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true', by: 'Ben Ins Scott'

        }
    ]
    const data = [
        { id: 1, title: 'Liked Songs', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true' },
        { id: 2, title: 'Neffex Playlist', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true' },
        { id: 3, title: 'K/ DA', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true' },
        { id: 4, title: 'Liked Songs', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true' },
        { id: 5, title: 'Dance/Electronic Mix', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true' }
    ]

   
    return (
        <>
            <div className="main">
                <div className="top-bar">
                    <div className="arrows">
                        <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" /></a>
                    </div>
                    <div className="user"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" /></div>
                </div>

                <h2>Good Morning</h2>
                <div className="songs">
                    {data.filter(i => i.id%2==0).map((i) => (
                        <div key={i.id} className="music">
                            <img src={i.img_url} alt={i.title} />
                            <p>{i.title}</p>
                        </div>))}

                </div>


                <h3>
                    Shows you might like
                </h3>
                <div className="shows">

                    {shows.map((i) => (
                        <div key={i.id} className="show">
                            <img src={i.img_url} alt={i.title} />
                            <p>{i.title}</p>
                            <span>{i.by}</span>

                        </div>
                    ))}


                </div> </div>
        </>)
}

export default Main



