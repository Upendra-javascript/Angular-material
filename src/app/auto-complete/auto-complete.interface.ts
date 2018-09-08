export interface StateGroup {
    letter : string;
    names : string[];
}

export const filter = (
    opt : string[],
    value : string 
):string[] =>{
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
}