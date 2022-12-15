import { useEffect } from "react";
export default function test() {
    useEffect(() => {
        console.log("component ilk yüklendiğinde çalışır")
        return() => {
            console.log("component destroye")
        }
    } )
    useEffect(() => {
        consele.log("component render oldu!")
    })


    return(
        <div>
            <h3>{postId}</h3>
            <button onClick={() =>setcount(postId => postId+1)}>sonraki konu</button>
            <hr/>
            test componenti
        </div>
    )
        

    
} 

