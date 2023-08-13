import { request } from "../request";

export const getArticles = (params) => {
    return request({
        method: "GET",
        url: "/articles",
        params,
    });
}

export const likeArticle = (slug) => {
    return request({
        method: "POST",
        url: `/articles/${slug}/favorite`,
    });
}