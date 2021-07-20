import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating, RatingPropsType } from './Rating';

export default {
    title: 'Rating stories',
    component: Rating
}

export const EmtyStar = () => <Rating value={0} onClick={x=>x}/>
export const EmtyRating1 = () => <Rating value={1} onClick={x=>x}/>
export const EmtyRating2 = () => <Rating value={2} onClick={x=>x}/>
export const EmtyRating3 = () => <Rating value={3} onClick={x=>x}/>
export const EmtyRating4 = () => <Rating value={4} onClick={x=>x}/>
export const EmtyRating5 = () => <Rating value={5} onClick={x=>x}/>
export const RatingAll = () => {
    const [rating, setRating] = useState<RatingPropsType>(3)
    return (
     <Rating value={rating} onClick={setRating}/>
    )
}

