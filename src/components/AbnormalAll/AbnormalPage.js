import React from 'react'
import AbnormalDetail from './Abnormal-detail'
import AbnormalOthers from './Abnormal-others'
import '../../styles/abnormalPage.scss'

class AbnormalPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="abnormal-page">
                <AbnormalDetail />
                <AbnormalOthers />
            </div>
        )
    }
}

export default AbnormalPage;