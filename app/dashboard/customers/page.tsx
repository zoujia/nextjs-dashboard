import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customers'
};

export default async function Page() {
    // Tips: https://nextjs.org/learn/dashboard-app/streaming#fixing-the-loading-skeleton-bug-with-route-groups， 该文档的开头描述到，
    // 由于 loading.tsx 是在 dashboard 根目录的,所以其效果会自动应用到其子目录/路径,
    // 即 dashboard/customers, dashboard/invoices 2个页面,
    // 但是如果实际点击左侧导航跳转到相关页面,看不出加载的效果,是因为该 2 个页面没有实际数据,加载太快看不到,
    // 所以,可以添加此行代码，以延迟 2 秒钟; invoices/page.tsx 页面也是类似;
    // 当使用 RouteGroups 之后,可以去掉此代码
    // await new Promise(resolve => setTimeout(resolve, 2000));

    return <p>Customers Page</p>;
}
