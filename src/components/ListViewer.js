import React from 'react'
import { Card, Icon, Popover, Button } from 'antd';
const { Meta } = Card;

export class ListViewer extends React.Component {

    downloadTorrent(downloadUrl) {
        console.log(downloadUrl);
    }


    render() {
        let movieList = this.props.movieList;
        let movies = movieList.data.movies;

        const content = (content) => (
            <div>
                <p>{content}</p>
            </div>
        );

        const downloaderView = (torrents) => (
            <div>
                <Button>{torrents[0].quality}</Button>
                <Button>{torrents[1].quality}</Button>
            </div>
        );

        const downloadButton = (urls) => (
            <Popover content={content(urls[0])} title={urls[1]}>
                <Button type="default">Summary</Button>
            </Popover>
        );
        

        let summaryList = movies.map(movie => {
            return (
                <Card className="List" key={movie.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={movie.medium_cover_image} alt={movie.title} />}
                >

                    <Meta title={movie.title}/>

                    <br/>

                    <Popover content={content(movie.summary)} title={movie.title}>
                        <Button type="default">Summary</Button>
                    </Popover>

                    <Popover content={downloaderView(movie.torrents)} title={movie.title}>
                        <Button type="default">Download</Button>
                    </Popover>

                </Card>);
        })

        return (
            <div className="ListViewer">
                <div>{summaryList}</div>
            </div>
        );
    }
}


// download torrent
// fix the summary issue
