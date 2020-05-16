import React,{Component} from "react";
import {Container, ListGroup,ListGroupItem, Button } from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {v4 as uuidv4} from "uuid";

class ShoppingList extends Component{
    state={
        items:[
            {id:uuidv4(),name:"Eggs"},
            {id:uuidv4(),name:"Milk"},
            {id:uuidv4(),name:"Steak"},
            {id:uuidv4(),name:"Water"}
        ]
    }

    render(){
        //destructing is used in line below to pull out items from the state method.
        //Alternatively we have to use this.state.item 
        const { items } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={()=>{
                        const name = prompt('enter Item')
                        if(name){
                            this.setState(state => ({
                                items:[...state.items, {id:uuidv4(),name}]
                            }))
                        }
                    }} 
                >Add Item </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list mr-0">
                        {items.map(({id,name})=>(
                            <CSSTransition key={id} timeout={500} classNames ="fade">
                                <ListGroupItem>
                                    {name}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            this.setState(state =>({
                                                items:state.items.filter(item => item.id != id)
                                            }))
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;