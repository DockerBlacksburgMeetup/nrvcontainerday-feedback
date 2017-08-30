import * as React from "react";

class Panel extends React.Component {
  render() {
    const { title, children, icon } = this.props;
    const width = this.props.width || 6;
    const push = Math.floor((12 - width) / 2);

    return (
      <div className="container">
        <div className={`col-md-${width} col-md-push-${push}`}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title">
                { icon && <span><i className={"fa fa-" + icon} />&nbsp;</span> }
                {title}
              </h2>
            </div>
            <div className="panel-body">
              { children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;