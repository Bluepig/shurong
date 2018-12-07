import React from 'react'
import MultiProjectBlocks from './MultiProject-Blocks';
import '../../styles/multiProjectPage.scss';
import FormatProgressBar from '../FormatAll/Format-progressBar';

class MultiProjectPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="multiProjectPage">
                <MultiProjectBlocks />
                <FormatProgressBar />
            </div>
        )
    }
}

export default MultiProjectPage;