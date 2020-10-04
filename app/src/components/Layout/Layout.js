import React,{Component} from 'react';
import Dux from '../../hoc/Dux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{


  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer:false});
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState)=>{
      return {showSideDrawer : !prevState.showSideDrawer};
    });
  }
  
     render(){
       return(
      <Dux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed ={this.sideDrawerClosedHandler} />
        <main className='Layout-content'>
            {this.props.children}
        </main>
      </Dux>
       );
     }
    
};


export default Layout;