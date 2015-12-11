import React, { Component } from 'react';
import Switch from './components/switch/switch';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exampleOneChecked: false,
        };
        this.onExampleOneChange = this.onExampleOneChange.bind(this);
    }

    onExampleOneChange(newValue) {
        this.setState({exampleOneChecked: newValue});
    }

    render() {
        const isImportant = true;

        return(
            <div>
                <div className="panel">
                    <div className="panel-header"><h2 className="panel-title">Store Settings</h2></div>
                    <div className="panel-body">

                        <div className='form-field'>
                            <label className='form-label'>Set Store Live</label>

                            <Switch
                                aria-label="Set store live"
                                checked={this.state.exampleOneChecked}
                                id='switchExample_1'
                                important={isImportant}
                                off-state-description='Down for Maintence'
                                off-state-label='Off'
                                onChange={this.onExampleOneChange}
                                on-state-description='Open'
                                on-state-label='On'
                            />

                        </div>

                    </div>
                </div>
                <pre>
                    Switched Checked: {JSON.stringify(this.state.exampleOneChecked)}
                </pre>

            </div>
        );
    }
}
