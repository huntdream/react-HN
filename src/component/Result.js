import React,{Component} from 'react'

class Result extends Component {
    render() {
        const hits = this.props.result;

        if(this.props.isLoading){
            return <div className='text-info col-md-8 order-md-first'>Loading</div>
        }

        if (hits) {
            return (
                <div className='col-md-8 order-md-first'>
                    <ul className='list-group'>
                    {hits.filter(hit => hit)
                        .map(hit =>
                        <li key={hit.objectID} className='list-group-item'>
                            <a href={hit.url}>
                                {hit.title||hit.comment_text}
                            </a>
                        </li>
                    )
                    }
                    </ul>
                </div>
            )
        }
        else {
            return <p> No matched result</p>;
        }
    }
}

export default Result;