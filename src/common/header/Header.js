import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen: false
        }
    }
    openHandler=()=>{
        this.setState({modalIsOpen:true})
    }
    closeHandler=()=>{
        this.setState({modalIsOpen:false})
    }
    render(){
        return(
            <div>
                <header className="header">
                    <img src={logo} className="app-logo" alt="logo" /> 
                    <Button id="loginBtn" variant="contained" onClick={this.openHandler}>Login</Button>           
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeHandler}></Modal>
            </div>
        );
    }
}
export default Header;