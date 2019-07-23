import React from 'react'
import { Card, Icon } from 'antd';
const { Meta } = Card;

export class ListViewer extends React.Component {

    render() {
        let movieList = this.props.movieList;
        let movies = movieList.data.movies;

        let summaryList = movies.map(movie => {
            return (
                <Card className="List" key={movie.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={movie.medium_cover_image} alt="Movie Cover"/>}
                    actions={[<Icon type="download"/>]}
                >
                    <Meta
                        title={movie.title}
                        description={movie.summary}
                    />

                </Card>);
        })

        return (
            <div className="ListViewer">
                <div>{summaryList}</div>
            </div>
        );
    }
}