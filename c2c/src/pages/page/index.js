import React, {PureComponent} from 'react';
// import './index.css';
import style from './index.css';

export default class Page extends PureComponent {
  render() {
    return (
      <div className={style["page-box"]}>
        this is Page~
      </div>
    )
  }
}
