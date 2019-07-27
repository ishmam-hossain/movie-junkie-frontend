import React from 'react'
import { Card, Popover, Button, Row, Col } from 'antd';
const { Meta } = Card;

export class ListViewer extends React.Component {

    downloadTorrent(downloadUrl) {
        console.log(downloadUrl);
    }


    render() {
        let movieList = this.props.movieList;
        let movies = movieList.data.movies;

        const details = (movie) => (
            <div>
                <p><b>IMDB Rating:  </b> {movie.rating}</p>
                <p><b>Release:  </b> {movie.year}</p>
                <p><b>Duration:  </b> { movie.runtime > 0 ? `${movie.runtime} min.` : '-'}</p>
                <p><b>Genres:  </b> {movie.genres.join(', ')}</p>
                <p><b>Language:  </b> {movie.language}</p>
                <p><b>Synopsis:  </b> {movie.synopsis}</p>
            </div>
        );

        const downloaderView = (torrents) => (
            <div>
                <Button>{torrents[0].quality}</Button>
                <Button>{torrents[1].quality}</Button>
            </div>
        );
        
        let summaryList = movies.map(movie => {
            return (
                <Card className="List" key={movie.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={movie.medium_cover_image} alt={movie.title_english} />}
                >

                    <Meta title={movie.title} />

                    <br />

                    <Popover content={details(movie)} title={movie.title_long}>
                        <Button type="default">Details</Button>
                    </Popover>

                    <Popover content={downloaderView(movie.torrents)} title={movie.title_long}>
                        <Button type="default">Download</Button>
                    </Popover>

                </Card>

            );

        })

        return (
            <div className="ListViewer">
                {/* <div>{summaryList}</div> */}
                <Row>
                    <Col span={6}>{summaryList.slice(0, 5)}</Col>
                    <Col span={6}>{summaryList.slice(5, 10)}</Col>
                    <Col span={6}>{summaryList.slice(10, 15)}</Col>
                    <Col span={6}>{summaryList.slice(15, 20)}</Col>

                </Row>
            </div>
        );
    }
}