import React,{Component} from 'react';
import Result from './Result';

class LatestStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story')
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error('Something Wrong');
                }

            })
            .then(data => {
                    this.setState({
                        hits: data.hits,
                        isLoading: false
                    });
                    console.log(data.hits)
                }
            ).catch(error => this.setState({error, isLoading: false}));

    }

    render() {
        return (
            <Result result={this.state.hits} isLoading={this.state.isLoading}/>
        )
    }
}

export default LatestStory;