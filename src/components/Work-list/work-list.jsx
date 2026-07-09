import { List } from 'lucide-react';
import { list } from '../mock/work-list';

export const Worklist = (props) => {
    return (
        <div>
            <span><List /><p> لیست کارها</p></span>
            {list.map((work) => {
                return (
                    <div>
                        <p>{work.id}</p>
                        <p>{work.title}</p>
                        <p>{work.status}</p>
                    </div>
                )
            })}
        </div>
    )
}