import React, { Component } from 'react';
import classNames from 'classnames';

export default class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: props.checked};
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({checked: e.target.checked});
        if(this.props.onChange){
            this.props.onChange(e.target.checked);
        }
    }

    render() {

        let {id} = this.props;
        let ariaLabel = this.props['aria-label'];
        let ariaLabelID = `${id}_aria_id`;
        let offStateDescription = this.props['off-state-description'];
        let onStateDescription = this.props['on-state-description'];
        let offStateLabel = this.props['off-state-label'];
        let onStateLabel = this.props['on-state-label'];

        let  offDescriptionElement, onDescriptionElement, stateLabelElement;

        if(this.props['off-state-description']) {
            offDescriptionElement = <span className='switch-description--off' aria-hidden='true'>{offStateDescription}</span>;
        }

        if(this.props['off-state-description']) {
            onDescriptionElement = <span className='switch-description--on' aria-hidden='true'>{onStateDescription}</span>;
        }

        if(this.props['off-state-label'] && !this.state.checked) {
            stateLabelElement = <span className="switch-label" aria-hidden='true'>{offStateLabel}</span>;
        } else if (this.props['on-state-label'] && this.state.checked) {
            stateLabelElement = <span className="switch-label" aria-hidden='true'>{onStateLabel}</span>;
        }

        const switchClassNames = classNames({
            'switch': true,
            'switch--important': this.props.important,
            'switch--checked': this.state.checked
        });

        return(
            <div className={switchClassNames}>

                {offDescriptionElement}

                <input
                    aria-labelledby={ariaLabelID}
                    checked={this.state.checked}
                    className='switch-checkbox'
                    id={id}
                    name={id}
                    onChange={this.onChange}
                    type='checkbox'
                />

                <label
                    className='switch-toggle'
                    htmlFor={id}
                >
                    {stateLabelElement}
                </label>

                {onDescriptionElement}

                <span
                    aria-hidden='true'
                    className='switch-ariaDescription'
                    id={ariaLabelID}
                >
                        {ariaLabel}
                </span>

            </div>
        );
    }
}

Switch.propTypes = {
    'aria-label': React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
    important: React.PropTypes.bool,
    'off-state-description': React.PropTypes.string,
    'off-state-label': React.PropTypes.string,
    'onChange': React.PropTypes.func,
    'on-state-description': React.PropTypes.string,
    'on-state-label': React.PropTypes.string,

}
