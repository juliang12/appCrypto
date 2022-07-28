export const getApi = async (url)=>{
    const data = await fetch(url);
    const res = await data.json();
    return res
}
