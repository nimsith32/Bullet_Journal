import React from "react";
import { TiDeleteOutline } from 'react-icons/ti'

export function JournalItems({ item, showModal, deleteItem }) {
  return (
    <div className="flex-col inline-block m-2 pr-5 float-right ">
      <div className="m-4 p-4 w-full h-30 bg-black text-white ">
        <span onClick={() => showModal(item)}>{item.title}</span>
        <div className="flex float-right">
          <span className="date">{item.date}</span>
          <TiDeleteOutline onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red" }}/>
        </div>
      </div>
    </div>
  );
}
export default JournalItems