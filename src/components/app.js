import React, { Component } from 'react';

import {AddComponent} from './AddComponent/add.component';
import {ListComponent} from "./ListComponent/list.component";

export default class App extends Component {
  render() {
    return (
      <div>
          <AddComponent />
          <ListComponent />
      </div>
    );
  }
}
