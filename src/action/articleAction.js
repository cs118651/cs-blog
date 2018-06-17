import Vue from 'vue'
import articleAPI from '../api/articleAPI'

// 新增文章
const newArticle = function (articleInfo) {
  return Vue.http.post(
    articleAPI.POST_NEW_ARTICLE,
    {
      'essayId': articleInfo.essayId,
      'title': articleInfo.title,
      'content': articleInfo.content,
      'picUrl': articleInfo.picUrl
    }
  )
}

// 获取首页文章列表
const getArticleList = function () {
  return Vue.http.get(
    articleAPI.GET_ARTICLE_LIST
  )
}

// 分页
const getPage = function (nextPage) {
  return Vue.http.post(
    articleAPI.POST_ARTICLE_PAGE,
    {
      'nextPage': nextPage
    }
  )
}

// 获取文章详细内容
const getArticleDetail = function (articleId) {
  return Vue.http.get(
    articleAPI.GET_ARTICLE_DETAIL,
    {
      'params': {
        'articleId': articleId
      }
    }
  )
}

export default {
  newArticle,
  getArticleList,
  getPage,
  getArticleDetail
}
