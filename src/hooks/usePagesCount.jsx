import {useMemo} from "react";

export const usePagesCount = (total) =>{

    const getPagesArray = useMemo(() => {
        console.log(total)
        let pagesArray = [];
        for (let i = 1; i <= total ; i++) {
            pagesArray.push(i)
        }
        return pagesArray

    }, [total])
    return getPagesArray
}