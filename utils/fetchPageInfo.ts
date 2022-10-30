import { PageInfo } from '../typings';


export async function fetchPageInfo() {
    const res = await fetch(`https://newportfolio-pml1wvgov-mezher120.vercel.app/api/getpageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
}