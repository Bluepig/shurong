import React from 'react';
import FormatList from './FormatList';
import FormatDisplay from './FormatDisplay';
import '../../styles/formatPage.scss';
class FormatPage extends React.Component {
  render() {
    return (
      <div className='formatPage'>
        <FormatList />
        <FormatDisplay />
      </div>
    );
  }
}

export default FormatPage;
