import {useMemo} from "react";

export const useSortedPosts = (posts, sort) =>{
    const sortedPosts = useMemo(()=>{
        console.log('Posts sorted')
        if (sort && sort === 'id'){
            return [...posts]
                .sort((a, b) => a - b)
        } else if(sort) {
            return [...posts]
                .sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [sort, posts])
    return sortedPosts;
}
export const useSortAndSearch = (posts, sort, search) =>{
    const sortedPosts = useSortedPosts(posts, sort);
    const sortAndSearch = useMemo(() =>{
        if (search){
            return sortedPosts.filter(e => e.title.toLowerCase().includes(search)
                || e.body.toLowerCase().includes(search))
        } else {
            return sortedPosts
        }
    }, [search, sortedPosts])
    return sortAndSearch;
}