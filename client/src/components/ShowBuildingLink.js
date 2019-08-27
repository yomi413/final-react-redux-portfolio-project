import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBuilding } from "../actions";

class ShowBuildingLink extends Component {
  state = {
    count: 0
  };

  handleCount = event => {
    event.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { building } = this.props;

    return (
      <tbody>
        <tr>
          <td>
            <Link to={`building/${building.id}`}>{building.address}</Link>
            {/* <button onClick={this.handleCount}>Up Vote</button>
            {this.state.count} */}
          </td>

          <td>
            <Link
              className="btn btn-primary btn-sm"
              to={`building/${building.id}/edit`}
            >
              Edit
            </Link>
          </td>

          <td>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => this.props.deleteBuilding(this.props.building.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

const mapDispatchToProps = { deleteBuilding };

export default connect(
  null,
  mapDispatchToProps
)(ShowBuildingLink);
