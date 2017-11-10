import React,{Component} from 'react'

class Result extends Component {
    render() {
        const hits = this.props.result;

        if(this.props.isLoading){
            return <p className='text-info'>Loading</p>
        }

        if (hits) {
            return (
                <div>
                    {hits.map(hit =>
                        <div key={hit.objectID}>
                            <a href={hit.url}>
                                {hit.title}
                            </a>
                        </div>
                    )
                    }
                </div>
            )
        }
        else {
            return <p> No matched result</p>;
        }
    }
}

export default Result;