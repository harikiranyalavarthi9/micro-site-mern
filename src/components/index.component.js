import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            configdata: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/configdata')
            .then(response => {
                this.setState({
                    configdata: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    tabRow() {
        return this.state.configdata.map(function(object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }
    
    render() {
        return (
            <div>
                <h3 align="center">Zephyr User Data</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Jira URL</th>
                            <th>Jira Email</th>
                            <th>Jira Token</th>
                            <th>qTest URL</th>
                            <th>qTest Token</th>
                            <th>Project ID</th>
                            <th>Requirement Count</th>
                            <th>Test Case Folder ID</th>
                            <th>XML Filepath</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}