import { Check, List } from 'lucide-react';
import { list } from '../mock/work-list';
import { Trash } from 'lucide-react';
import "./work-list.css";

export const Worklist = (props) => {
    return (
        <div className='workList'>

            <span><List /><p> لیست کارها</p></span>

            {list.map((work) => {
                return (
                    <div className='work-cart-container'>
                        {/* <p>{work.id}</p> */}
                        <input type='checkbox'></input>
                        <div className='work-cart' >
                            <div className='work-cart-text' >
                                <p>{work.title}</p>
                                <p>{work.status === "done" ? <p className="status-done status">انجام شده</p> : <p className='status-doing status'>در حال انجام</p>}</p>
                            </div>
                            <Trash />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}