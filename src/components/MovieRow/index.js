import React from 'react';
import './style.css'

export default ({ title, items}) => {
    let results = items.results;
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {results ? results.map((item, key) => (
                    <div className="movieRow--item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    </div>
                )): <div>Carregando</div>}
            </div>
        </div>
    )
};