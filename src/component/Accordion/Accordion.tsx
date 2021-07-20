import {useState} from "react"
type ItemType = {
    title: string
    value: any
}
type AccordionType = {
    name: string
    onChange: () => void
    collapsed: boolean
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle name={props.name} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleType = {
    name: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h2 onClick={(e) => {
                props.onChange()
            }}>{props.name}</h2>
        </div>
    )
}

type AccordionBody = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBody) {
    return (
        <div>
            <ul>
                {
                    props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}}
                                                      key={index}>{i.title}</li>)
                }
            </ul>
        </div>
    )
}