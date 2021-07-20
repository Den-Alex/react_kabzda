import React, {useState} from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemsType>
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false);

    const selectedItem = props.items.find(i => i.value === props.value);

    const showItems = () => setActive(!active);
    const onTimClick = (value: any) => {
        props.onChange(value);
        showItems()
    }

    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Kiev</option>
                <option value="3">Vena</option>
            </select>
            <div className={s.select}>
                <span className={s.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            key={i.value}
                            onClick={() => {
                                onTimClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}