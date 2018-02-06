/**
 * Created by tommy.hu on 2018/2/6.
 */
const myStyle = {
    fontSize:10,
    color:'#008800'
};
const arr=[1,2,3,4,5,6];
const arr1=[{id:1,name:'tommyhu'},{id:2,name:'jim'}];


class App extends React.Component{
    /*属性默认值？？？*/
    static defaultProps  = {
        name:"name默认"
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            /*使用this获取属性*/
            <div>i am app component,{this.props.name}</div>
        );
    }
}

/*无状态组件*/
const Title1=(props)=>(<h1>i am simple title{props.name}</h1>);
const Title2 = props => <h1>Hello, {props.name}</h1>;

/*函数式申明*/
function Title0(props){
    return <h1>i am simple title{props.name}</h1>
}

/*
* 复合组件
* */
class Title extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                这是一个复合组件
                <Title0 name={this.props.name}/>
                <Title1 name={this.props.name}/>
            </div>
        );
    }
}

/*
* 状态机器setState
* */
class LikeButton extends React.Component{
    constructor(props){
        /*属性props和状态机state的主要区别是state可以根据与用户交互来改变*/
        super(props);
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);/*绑定事件*/
    }
    handleClick(event) {
        /*事件中使用this必须在构造函数constructor中bind*/
        this.setState({liked: !this.state.liked});/*setState会自动调用this.render*/
    }
    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}


ReactDOM.render(
    /*注释*/
    <div style={myStyle}>
        {/*组件*/}
        <App/>
        <App name="hello component"/>
        <Title0 name="hello component0"/>
        <Title1 name="hello component1"/>
        <Title2 name="hello component2"/>

        {/*复合组件*/}
        <Title name="复合组件"/>

        {/*一维数组直接输出*/}
        <span>{arr}</span>
        {/*对象数组需要用map*/}
        {arr1.map(function(d){
            return <p>{d.name}</p>
        })}

        <LikeButton />
    </div>,
    document.getElementById('example')
);