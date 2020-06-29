export const getPosts = async () => { 
    return [
    {
        title: "İlk Blog Yazım",
        slug: 'ilk-blog-yazim',
        details: require("./posts/ilk-blog-yazim.md").default,
        date: "29 Haziran 2020"
    },
    {
        title: "Adana Çok Sıcak",
        slug: 'adana-cok-sicak',
        details: require("./posts/adana-cok-sicak.md").default,
        date: "29 Haziran 2020"
    },
    {
        title: "İlk React Blogum Nasıl",
        slug: "ilk-blogum",
        details: require("./posts/ilk-blogum.md").default,
        date: "29 Haziran 2020"
    }]
};
    