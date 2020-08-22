import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from'@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types'
const TabContainer=function(props){
    return(
      <Typography component="div" style={{padding:0, textAlign:'center'}}>
          {props.children}
      </Typography>
    );
}
TabContainer.propTypes={
    children: PropTypes.node.isRequired
}
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen: false,
            value:0,
            username:"",
            userNameRequired:"dispNone",
            password:"",
            passwordRequired:"dispNone"
        }
    }
    
    openHandler=()=>{
        this.setState({modalIsOpen:true})
    }
    closeHandler=()=>{
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler=(event,value)=>{
        this.setState({value})
    }
    loginClickHandler=()=>{
        this.state.username === "" && this.state.password === "" ? this.setState({userNameRequired:"dispBlock"}) :
         this.setState({userNameRequired:"dispNone"}) ;
        this.state.username === "" ? this.setState({userNameRequired:"dispBlock"}) :
         this.setState({userNameRequired:"dispNone"}) ;
        this.state.password === "" ? this.setState({passwordRequired:"dispBlock" }) :
         this.setState({passwordRequired: "dispNone"}) ;
    }
    inputUserNameChangeHandler=(e)=>{
        this.setState({username: e.target.value});
    }
    inputPasswordChangeHandler=(e)=>{
        this.setState({password: e.target.value});
    }
    render(){
        return(
            <div>
                <header className="header">
                    <img src={logo} className="app-logo" alt="logo" /> 
                    <Button id="loginBtn" variant="contained" onClick={this.openHandler}>Login</Button>           
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeHandler} id="modalId">
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler} className="tabs">
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="userName" type="text" username={this.state.username} onChange={this.inputUserNameChangeHandler} />
                            <FormHelperText className={this.state.userNameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button id="loginBtn" variant="contained" color='primary' onClick={this.loginClickHandler}>Login</Button> 
                    </TabContainer>}
                </Modal>
            </div>
        );
    }
}
export default Header;