import React, {Component} from 'react';

import Result from './Result';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'react',
            result: []
        };
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(e) {
        console.log('Searching', e.target.value);
        this.setState({
            query: e.target.value
        });
        fetch('http://hn.algolia.com/api/v1/search?query=' + this.state.query)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    result: data.hits
                });
                console.log(this.state.result);
            });
    }

    componentDidUpdate(){
        console.log('Component did update');
    }

    componentDidMount(){
        console.log('Component did mount');
    }

    render() {
        return (
            <div>
                <div className='form-group'>
                    <input className='form-control' type="text" placeholder="Type what you want to know" onChange={this.doSearch}/>
                </div>
                <Result result={this.state.result}/>

            </div>
        )
    }
}

export default Search;