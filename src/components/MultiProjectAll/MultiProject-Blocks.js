import React from 'react'
import FormatBlockHead from '../FormatAll/FormatBlockHead';
class MultiProjectBlocks extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="blocks">
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
                <div className="block">
                    <FormatBlockHead blockHeadSearch={false} blockHeadTime={false} blockHeadTitle="长宁八八中心"/>
                </div>
            </div>
        )
    }
}

export default MultiProjectBlocks;