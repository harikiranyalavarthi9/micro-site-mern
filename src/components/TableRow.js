import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.jira_url}
          </td>
          <td>
            {this.props.obj.jira_email}
          </td>
          <td>
            {this.props.obj.jira_token}
          </td>
          <td>
            {this.props.obj.qtest_url}
          </td>
          <td>
            {this.props.obj.qtest_token}
          </td>
          <td>
            {this.props.obj.project_id}
          </td>
          <td>
            {this.props.obj.requirement_count}
          </td>
          <td>
            {this.props.obj.folder_id}
          </td>
          <td>
            {this.props.obj.xml_filepath}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;