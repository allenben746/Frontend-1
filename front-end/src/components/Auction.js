import React from 'react';
import axios from 'axios';
const Auction = (props) => {
    const [auction, setAuction] = useState(null);
    const id = props.match.params.id;
    useEffect(() => {

        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
            .get(data)
            .then(response => {
                setAuction(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);
    if (!auction) {
        return <div>Loading auction information...</div>;
    }
    const { username, image, product, description, bid } = auction;
    return (

        <div className="auction-card">
            <h1>Auction</h1>
            <h2>{username}</h2>
            <div className="product">

                image:{image}
                Product:{product}
                description:{description}
            </div>
            <div className="bid">
                <h3>Bidder</h3>
                <p>{bid}</p>
                {/* {bidder && bidder.map(item => (
                      <div key={bidder} className="bidder">
                          {bidder}
                          ))} */}
            </div>
        </div>






    )
}

export default Auction;







if (!movie) {
    return <div>Loading movie information...</div>;
}

const { title, director, metascore, stars } = movie;
return (

    <div className="movie-card">

        <h2>{title}</h2>

        <div className="save-wrapper">
            <div className="movie-director">
                Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {stars && stars.map(star => (
                <div key={star} className="movie-star">
                    {star}
                </div>
            ))}
        </div>
        <div className="save-button">Save</div>

    </div>
);
  
}

export default Movie;
