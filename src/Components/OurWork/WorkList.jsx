import React from 'react';
import {Row} from 'react-bootstrap';
import WorkBlock from './WorkBlock';

const WorkList = (props) => {
    const WorkImg = [
        {
            id: 'img1',
            imgUrl: 'https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg'
        },
        {
            id: 'img2',
            imgUrl: 'https://cdn.pixabay.com/photo/2017/09/16/01/03/girl-2754233_1280.jpg'
        },
        {
            id: 'img3',
            imgUrl: 'https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270_1280.jpg'
        },
        {
            id: 'img4',
            imgUrl: 'https://cdn.pixabay.com/photo/2017/08/12/20/16/slums-2635238_1280.jpg'
        },
        {
            id: 'img5',
            imgUrl: 'https://cdn.pixabay.com/photo/2018/07/19/08/51/old-man-3548098_1280.jpg'
        },
        {
            id: 'img6',
            imgUrl: 'https://cdn.pixabay.com/photo/2016/05/26/12/36/indian-1417068_1280.jpg'
        },
        {
            id: 'img7',
            imgUrl: 'https://cdn.pixabay.com/photo/2020/05/25/04/22/man-5216903_1280.jpg'
        },
        {
            id: 'img8',
            imgUrl: 'https://cdn.pixabay.com/photo/2012/10/10/18/41/afghani-60798_1280.jpg'
        },
        {
            id: 'img9',
            imgUrl: 'https://cdn.pixabay.com/photo/2017/08/05/20/35/india-2585399_1280.jpg'
        },
        {
            id: 'img10',
            imgUrl: 'https://cdn.pixabay.com/photo/2017/08/07/13/49/kid-2603998_1280.jpg'
        },
        {
            id: 'img11',
            imgUrl: 'https://cdn.pixabay.com/photo/2012/10/10/18/14/child-60766_1280.jpg'
        },
        {
            id: 'img12',
            imgUrl: 'https://cdn.pixabay.com/photo/2012/10/10/18/14/children-60767_1280.jpg'
        },
    ]
    return(
        <Row>
            <WorkBlock PostItems={WorkImg} />
        </Row>
    )
}

export default WorkList;