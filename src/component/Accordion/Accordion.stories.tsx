import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions'


export default {
    title: 'Accordion stories',
    component: Accordion
}

export const ContolledMode = () => <Accordion name={'Marina'}
                                              collapsed={true}
                                              onChange={action("ControlledMode")}
                                              items={[
                                                  {title: 'Den', value: 1},
                                                  {title: 'Marina', value: 2},
                                                  {title: 'Karina', value: 3}]}
                                              onClick={action("ControlledMode")}
/>
export const UncontolledMode = () => <Accordion name={'Karina'}
                                                collapsed={true}
                                                onChange={action("ControlledMode")}
                                                items={[
                                                    {title: 'Den', value: 1},
                                                    {title: 'Marina', value: 2},
                                                    {title: 'Karina', value: 3}]}
                                                onClick={action("ControlledMode")}
/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion name={'Marina'} collapsed={value} onChange={() => {
            setValue(!value)
        }}
                   items={[
                       {title: 'Den', value: 1},
                       {title: 'Marina', value: 2},
                       {title: 'Karina', value: 3}]}
                   onClick={action("ControlledMode")}
        />
    )
}