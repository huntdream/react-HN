import React, {Component} from 'react';

class Tags extends Component {
    render() {
        const tags = this.props.tags;
        return (
            <div className="col-md-4 order-first justify-content-center row align-items-start"
                 onClick={this.props.onClick}>
                {
                    tags.map(tag =>
                        <button className={"btn btn-outline-secondary m-1"} key={tag}>
                            {tag.toUpperCase()}
                        </button>
                    )
                }
            </div>
        )
    }
}

export default Tags;