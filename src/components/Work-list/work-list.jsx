import { Check, List } from 'lucide-react';
import { list } from '../mock/work-list';
import { Trash } from 'lucide-react';
import "./work-list.css";
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../server/constants';
const getData = async ()=>{
   const data = await fetch(`${BASE_URL}/toDos`);
   const res = await data.json();
   return res
}

export const Worklist = (props) => {

    const [toDos, setToDOs] = useState([]);

    useEffect(() => {
    getData().then((res)=>{setToDOs(res)})
        // console.log(data);
        // setToDOs(data)
    },[])
    


    return (
        <div className='workList'>

            <span className='workList-title'><List /><p> لیست کارها</p></span>

            {toDos.map((work) => {
                return (
                    <div className='work-cart-container'>
                        {/* <p>{work.id}</p> */}
                        <input className='work-cart-check' type='checkbox'></input>
                        <div className='work-cart' >
                            <div className='work-cart-text' >
                                <p className='work-cart-title'>{work.title}</p>
                                <p>{work.status === "done" ? <p className="status-done status">انجام شده</p> : <p className='status-doing status'>در حال انجام</p>}</p>
                            </div>
                            <span className='cart-trashIcon'><Trash style={{ color: "red" }} /></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}