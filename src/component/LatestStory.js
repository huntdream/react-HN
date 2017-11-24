import React, {Component} from 'react';
import Result from './Result';
import Tags from './Tags';

class LatestStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: true,
            tag:'story'
        };
        this.handleTagSearch = this.handleTagSearch.bind(this);
        this.fetchNews = this.fetchNews.bind(this);
    }

    handleTagSearch(e) {
        e.preventDefault();
        if (e.target.tagName === "BUTTON") {
            console.log(e.target.textContent);
            this.fetchNews(e.target.textContent.toLowerCase());
        } else {
            console.log('You clicked wrong button');
        }
    }

    fetchNews(tag='story'){
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=${tag}`)
            .then(response => {
                if (response.ok) {
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
                    console.log(data.hits,tag)
                }
            ).catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchNews()
    }

    render() {
        const TAGS = ['story', 'poll', 'comment'];
        return (
            <div className='row'>
                <Result result={this.state.hits} isLoading={this.state.isLoading}/>
                <Tags tags={TAGS} onClick={this.handleTagSearch}/>
            </div>
        )
    }
}

export default LatestStory;