import React from 'react'
import '../../styles/format/formatProgressBar.scss'

class FormatProgressBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="set-size charts-container">
                <div className="pie-wrapper progress-30">
                    <span className="label">30<span className="smaller">%</span></span>
                    <div className="pie">
                    <div className="left-side half-circle"></div>
                    <div className="right-side half-circle"></div>
                    </div>
                </div>

                <div className="pie-wrapper progress-45 style-2">
                    <span className="label">45<span className="smaller">%</span></span>
                    <div className="pie">
                    <div className="left-side half-circle"></div>
                    <div className="right-side half-circle"></div>
                    </div>
                    <div className="shadow"></div>
                </div>

                <div className="pie-wrapper pie-wrapper--solid progress-65">
                    <span className="label">65<span className="smaller">%</span></span>
                </div>
            </div>
        )
    }
}

export default FormatProgressBar;