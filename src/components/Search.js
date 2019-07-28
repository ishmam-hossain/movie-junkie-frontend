import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar" style={{ margin: '24px 0'}}>
                <Search
                    placeholder="movie name"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                    style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}
                />
                
                <br/><br/>
            </div>
        );
    }
}