import React from 'react'
import FormatBlockHead from '../FormatAll/FormatBlockHead'
import ProjectDetailShopList from './ProjectDetail-shopList'
import '../../styles/projectDetailPage.scss'

class ProjectDetailPage extends React.Component {
    render() {
        return(
            <div className="project-detailPage">
                <div className="top-block">
                    <FormatBlockHead blockHeadTitle="3D项目地图" blockHeadSearch={false} blockHeadTime={false}/>
                    <ProjectDetailShopList />
                </div>
            </div>
        )
    }
}

export default ProjectDetailPage;