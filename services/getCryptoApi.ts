export const getApi = async (url:string):Promise<any>=>{
    const data = await fetch(url);
    const res = await data.json();
    return res
}
