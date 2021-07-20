import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

export default {
    title: 'input',
    // component: input
}
// export const UncontrolledInput = () => <input/>
// export const UncontrolledInput1 = () => {
//     const [value, setValue] = useState("");
//     return <><input onChange={(e) => {
//         const newValue = e.currentTarget.value;
//         setValue(newValue)
//     }
//     }/> - {value} </>
// }
// export const UncontrolledInput2 = () => {
//     const [value, setValue] = useState("");
//     const inpurRef = useRef<HTMLInputElement>(null)
//     const save = () => {
//         const element = inpurRef.current as HTMLInputElement
//         setValue(element.value);
//     }
//     return <><input ref={inpurRef}/><button onClick={save}>X</button> - actual value: {value} </>
// }
// export const ControlledInput0 = () => <input value="Den"/>
//
// export const ControlledInput = () => {
//     const [parentValue,setParentValue] = useState('')
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value) }
//     return (
//         <input value={parentValue} onChange={onChange}/>
//     )
// }
// export const ControlledCheckbox = () => {
//     const [parentValue,setParentValue] = useState(true)
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked) }
//     return (
//         <input type="checkbox"  checked={parentValue} onChange={onChange}/>
//     )
// }
export const ControlledSelect = () => {
    const [parentValue,setParentValue] = useState<string | undefined>("")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">M</option>
            <option value="2">L</option>
            <option value="3">V</option>
        </select>
    )
}




























