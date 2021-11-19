import Carousel from 'react-material-ui-carousel'
import React from 'react';
import { Paper } from '@material-ui/core'
const Item = (props) => {
    return (
        <Paper>
            <img src={props.item.image} width="100%" height="512"/>
        </Paper>
    )
}

const Specials = () => {
    var items = [
        {
            image: require("../../assets/slide1.png")
        },
        {
            image: require("../../assets/slide2.png")
        }
    ]
    return(
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Specials;