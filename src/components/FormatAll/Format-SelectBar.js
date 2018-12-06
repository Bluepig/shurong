import React from 'react';
import '../../styles/format/formatSelectBar.scss';

class SelectBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showlist: false,
        };
        this.container = React.createRef();
        this.handleHover = this.handleHover.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleHover() {
        this.setState({
            showlist: true,
        })
    }
    handleOut() {
        this.setState({
            showlist: false,
        })
    }
    handleClick(e) {
        var content = e.target.innerText
        this.container.current.innerText = content
    }
    render() {
        const listItems = this.props.selectitems.map(d => <li key={d.toString()} onClick={e => this.handleClick(e)}>{d}</li>)
        return(
            <div className="selection" onMouseOver={this.handleHover} >
                <span ref={this.container}>
                    {this.props.selectitems[0]}
                </span>
                <span className="arrow">&#62;</span>
                <ul className={this.state.showlist ? " show" : undefined} onMouseOut={this.handleOut}>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default SelectBar;