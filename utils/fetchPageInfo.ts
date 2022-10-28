import axios from 'axios';
import { PageInfo } from '../typings';


export async function fetchPageInfo() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpageInfo`);
    const pageInfo: PageInfo = res.data.pageInfo;
    return pageInfo;
}