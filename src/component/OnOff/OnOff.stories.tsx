 import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OnOff } from './OnOff';
 import {action} from '@storybook/addon-actions'


export default {
    title: 'OnOff stories',
    component: OnOff
}


export const OnMode = () => <OnOff on={true} onClick={action('on')}/>


export const OffMode = () => <OnOff on={false} onClick={action('off')}/>
export const OnOffAll = () => {
    const [value, setValue] = useState(true);
    return <OnOff on={value} onClick={() => {setValue(!value)}}/>
}