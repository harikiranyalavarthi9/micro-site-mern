import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeJiraURL = this.onChangeJiraURL.bind(this);
        this.onChangeJiraEmail = this.onChangeJiraEmail.bind(this);
        this.onChangeJiraToken = this.onChangeJiraToken.bind(this);
        this.onChangeqTestURL = this.onChangeqTestURL.bind(this);
        this.onChangeqTestToken = this.onChangeqTestToken.bind(this);
        this.onChangeqTestProjectID = this.onChangeqTestProjectID.bind(this);
        this.onChangeRequirementCount = this.onChangeRequirementCount.bind(this);
        this.onChangeTCFolderID = this.onChangeTCFolderID.bind(this);
        this.onChangeXMLFilePath = this.onChangeXMLFilePath.bind(this);
        this.onSubmitData = this.onSubmitData.bind(this);

        this.state = {
            jira_url: '',
            jira_email: '',
            jira_token: '',
            qtest_url: '',
            qtest_token: '',
            project_id: '',
            requirement_count: '',
            folder_id: '',
            xml_filepath: ''
        }
    }

    onChangeJiraURL(e) {
        this.setState({
            jira_url: e.target.value
        });
    }

    onChangeJiraEmail(e) {
        this.setState({
            jira_email: e.target.value
        });
    }

    onChangeJiraToken(e) {
        this.setState({
            jira_token: e.target.value
        });
    }

    onChangeqTestURL(e) {
        this.setState({
            qtest_url: e.target.value
        });
    }

    onChangeqTestToken(e) {
        this.setState({
            qtest_token: e.target.value
        });
    }
    
    onChangeqTestProjectID(e) {
        this.setState({
            project_id: e.target.value
        });
    }

    onChangeRequirementCount(e) {
        this.setState({
            requirement_count: e.target.value
        });
    }

    onChangeTCFolderID(e) {
        this.setState({
            folder_id: e.target.value
        });
    }

    onChangeXMLFilePath(e) {
        this.setState({
            xml_filepath: e.target.value
        });
    }

    onSubmitData(e) {
        e.preventDefault();
        // console.log(`The values are ${this.state.jira_url}, ${this.state.jira_email}, ${this.state.jira_token}
        // ${this.state.qtest_url}, ${this.state.qtest_token}, ${this.state.project_id}, ${this.state.requirement_count}
        // ${this.state.folder_id}, ${this.state.xml_filepath}`);

        const obj = {
            jira_url: this.state.jira_url,
            jira_email: this.state.jira_email,
            jira_token: this.state.jira_token,
            qtest_url: this.state.qtest_url,
            qtest_token: this.state.qtest_token,
            project_id: this.state.project_id,
            requirement_count: this.state.requirement_count,
            folder_id: this.state.folder_id,
            xml_filepath: this.state.xml_filepath
        }

        axios.post('http://localhost:4000/configdata/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            jira_url: '',
            jira_email: '',
            jira_token: '',
            qtest_url: '',
            qtest_token: '',
            project_id: '',
            requirement_count: '',
            folder_id: '',
            xml_filepath: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Enter Configuration Details</h3>
                <form onSubmit={this.onSubmitData}>
                    <div className="form-group">
                        <label>Jira URL</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.jira_url}
                            onChange={this.onChangeJiraURL}    
                        />
                    </div>
                    <div className="form-group">
                        <label>Jira Email</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.jira_email}
                            onChange={this.onChangeJiraEmail}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>Jira Token</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.jira_token}
                            onChange={this.onChangeJiraToken}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>qTest URL</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.qtest_url}
                            onChange={this.onChangeqTestURL}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>qTest Token</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.qtest_token}
                            onChange={this.onChangeqTestToken}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>qTest Project ID</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.project_id}
                            onChange={this.onChangeqTestProjectID}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>Jira Requirement Count in qTest</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.requirement_count}
                            onChange={this.onChangeRequirementCount}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>qTest Test Case Folder ID</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.folder_id}
                            onChange={this.onChangeTCFolderID}    
                        />                    
                    </div>
                    <div className="form-group">
                        <label>Zephyr XML Filepath</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.xml_filepath}
                            onChange={this.onChangeXMLFilePath}    
                        />                    
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit Data" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}