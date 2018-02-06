/**
 * Created by tommy.hu on 2018/2/6.
 */
class TableRowWrapper1 extends React.Component {
    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}

const TableRowWrapper = ({ children }) => (
    <div>
        dfasd{children}
    </div>
);

class Title extends  React.Component{
    render(){
        return(
            <h1>i am title</h1>
        )
    }
}


const Title1=()=>(<h1>i am simple title</h1>);
const Title2 = props => <h1>Hello, {props.name}</h1>;



/*
 * 生命周期https://www.jianshu.com/p/4784216b8194
 * */
/*https://www.w3cplus.com/react/react-learn-2-2.html*/
class CommentList extends React.Component {
    /*构造*/
    constructor(props) {
        /*继承属性*/
        super(props);
        /*设置状态*/
        this.state = { comments: [] }
    }
    /*组件出现前 就是dom还没有渲染到html文档里面*/
    componentWillMount() {

    }
    /*组件渲染完成 已经出现在dom文档里*/
    componentDidMount() {
        $.ajax({
            url: "./my-comments.json",
            dataType: 'json',
            success: function(comments) {
                this.setState({comments: comments})
            }.bind(this)
        })
    }
    renderComment({body, author}) {
        return <li>{body}—{author}</li>
    }
    render() {
        return <ul> {this.state.comments.map(this.renderComment)} </ul>
    }
}


ReactDOM.render(
    <div>
        <Title1/><Title1/><Title2 name="123"/>
        <TableRowWrapper children="tommyh1111u"/>
        <CommentList/>
    </div>,
    document.getElementById('example')
);