import React, { PureComponent } from 'react';
import ExpandedSidebar from './expanded-sidebar';
import CollapsedSidebar from './collapsed-sidebar';
import classes from './sidebar.css';

class Sidebar extends PureComponent {
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  render() {
    const { expanded } = this.state;

    return (
      <div className={classes.container}>
        {expanded && <ExpandedSidebar collapse={() => this.setState({ expanded: false })} />}
        {!expanded && <CollapsedSidebar expand={() => this.setState({ expanded: true })} />}
      </div>
    )
  }
}

export default Sidebar;
