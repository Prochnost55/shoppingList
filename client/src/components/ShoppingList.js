import React,{Component} from "react";
import {Container, ListGroup,ListGroupItem, Button } from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems()
    }

    onDeleteClick = (id) =>{
        this.props.deleteItem(id)
    }

    render(){
        
        //destructuring is used in line below to pull out items from the state method.
        //Alternatively we have to use this.state.item 
        // const { items } = this.state;
         const {items} = this.props.item;

        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id,name})=>(
                            <CSSTransition key={id} timeout={500} classNames ="fade">
                                <ListGroupItem>
                                    {name}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, id)}
                                    >
                                        Delete
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                {/* <Button
                    color="dark"
                    className="mt-3"
                    style={{marginBottom:'2rem'}}
                    onClick={()=>{
                        // const name = prompt('enter Item')
                        // if(name){
                        //     this.setState(state => ({
                        //         items:[...state.items, {id:uuidv4(),name}]
                        //     }))
                        // }
                    }}>
                        
                    Add Item 
                </Button> */}
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item:PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>({
    item: state.item
})
export default connect(mapStateToProps,{ getItems, deleteItem })(ShoppingList);