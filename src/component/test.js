import React from 'react';
import {DropDown} from "@magicniclus/components";

const Test = () => {
    const department = ["Sales", "Marketing", "Enginnering", "Humain Resources", "Legal"]



    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <DropDown title="Hi React !" list={department} callBack={(e)=>e}/>
        </form>
    );
};

export default Test;