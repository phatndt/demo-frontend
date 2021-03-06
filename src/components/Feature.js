import React,{Component} from 'react';
import Icon from './Icon';
class Feature extends Component {
render(){
  return (
    <div className="feature">
      <h2>Features</h2>
      <hr />
      <div className="col-2">
                <Icon image ="images/2-icon.png" name = "Cleaning"></Icon>
              </div>
              <div className="col-2">
                <Icon image ="images/6-icon.png" name = "Coffee Delivery"></Icon>
              </div>
              <div className="col-2">
                <Icon image ="images/7-icon.png" name = "Food Delivery"></Icon>
              </div>
              <div className="col-2">
                <Icon image ="images/8-icon.png" name = "Shopping"></Icon>
              </div>
              <div className="col-2">
                <Icon image ="images/25-icon.png" name = "Massage"></Icon>
              </div>
              <div className="col-2">
                <Icon image ="images/3-icon.png" name = "Event Assistant"></Icon>
              </div>
    </div>
  );
}
}

export default Feature;
