import React from 'react';
import FormatList from './FormatList';
import FormatDisplay from './FormatDisplay';
import '../../styles/formatPage.scss';
class FormatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      biztype: 'full'
    };
  }
  onFormatClick = data => {
    this.setState({ biztype: data });
  };
  render() {
    return (
      <div className='formatPage'>
        <FormatList onFatherClick={this.onFormatClick} />
        <FormatDisplay bizType={this.state.biztype} />
      </div>
    );
  }
}

export default FormatPage;
