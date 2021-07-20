import { useState } from 'react'
import s from './OnOff.module.css'

type OnOffType = {
    on: boolean
    onClick: () => void
}


export function OnOff(props: OnOffType) {
    return (
        <div className={s.onOff}>
            <button className={props.on ? s.on1 : s.on2} onClick={props.onClick}>On</button>
            <button className={props.on ? s.off1 : s.off2} onClick={props.onClick}>Off</button>
            <button className={props.on ? s.alarm1 : s.alarm2}></button>
        </div>
    )
}


//     if (on) {
//         return (
//             <div className={s.onOff}>
//                 <button className={s.on1}>On</button>
//                 <button className={s.off1}>Off</button>
//                 <button className={s.alarm1}></button>
//             </div>)
//     } else {
//         return (
//             <div className={s.onOff}>
//                 <button className={s.on2}>On</button>
//                 <button className={s.off2}>Off</button>
//                 <button className={s.alarm2}></button>
//             </div>)
//     }
// }
