import React from 'react'

function Card({ data, data2 }) {
    console.log(data2)
    return (
        <div className="card col-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                    {data.category}
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>

    )
}

export default Card