/**
 * Created by tommy.hu on 2018/2/2.
 */
import React from 'react';
import PropTypes from 'prop-types';
class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
                       value={this.state.text} />
            </div>
        );
    }
}

/*
* 属性检查的帖子：https://www.cnblogs.com/penghuwan/p/6796139.html
* */
InputControlES6.propTypes  = {
    initialValue:  PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
};

export default InputControlES6;