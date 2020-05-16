import React,{ Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container   
} from 'reactstrap';

        // Every class have some predefined functions like constructor, render, etc
        // For using a custom functions inside a constructor, we need to bind that function.
        // For example toogle is custom class then we will need to bind it using
        // --------------> this.toogle = this.toggle.bind(this)
        // To avoid binding one can simply use arrow function as used in the project
        // i.e. ---------> toggle = () => { }
        

class AppNavbar extends Component{
    state = {
        isOpen:false
    }
    toggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render(){
        return(   
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/prochnost55">
                                Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
    // constructor(props){
    //     super(props)
    // }
}



export default AppNavbar;
