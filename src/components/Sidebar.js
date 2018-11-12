import React from 'react';
import '../styles/style.sass';
import { Columns } from 'react-bulma-components';
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="test">
        <h1>商业地产运营监控平台</h1>
        <h2>华润万象城</h2>
        <Columns>
          <Columns.Column>First Column</Columns.Column>
          <Columns.Column>Second Column</Columns.Column>
          <Columns.Column>Third Column</Columns.Column>
          <Columns.Column>Fourth Column</Columns.Column>
        </Columns>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
