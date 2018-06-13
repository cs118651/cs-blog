import _ from 'lodash'
import domains from './domains'
const addDomain = domain => path => domain + path
const { csDomain } = domains

const APIs = {
  POST_NEW_ARTICLE: '/api/article/new', // 新建文章接口
  GET_ARTICLE_LIST: '/api/article/list', // 初始化文章首页列表
  POST_ARTICLE_PAGE: '/api/article/page', // 获取某一页文章列表
  GET_ARTICLE_DETAIL: '/api/article/detail' // 获取文章详细内容
}

export default _.each(APIs, (path, key) => {
  APIs[key] = addDomain(csDomain)(path)
})
