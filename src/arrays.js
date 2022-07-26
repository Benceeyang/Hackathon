export function Arr(g){
    return `${g[0]} ${g.pop()}`
}

export function compareArrays(d,t){
    if (d < t){
        return t
    } else if(d > t){
        return d
    } else {
        return `${d} ${t} are the same`
    }
};