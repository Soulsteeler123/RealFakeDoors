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
            image: require("../../assets/coloured-doors.jpg")
        },
        {
            image: require("../../assets/line-of-metal-doors.jpg")
        }
        ,
        {
            image: require("../../assets/fantasy-garden-15632061590mq.jpg")
        },
        {
            image: require("../../assets/chinese-doors-296127685436478D3.jpg")
        }
    ]
    return(
        <Carousel animation='slide'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Specials;