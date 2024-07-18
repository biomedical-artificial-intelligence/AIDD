import React from 'react'
import PropTypes from 'prop-types'
import './ArticleEmbed.css'

const ArticleEmbed = ({ articles }) => {
  return (
    <div className="article-embed">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
          <p>{article.date}</p>
        </div>
      ))}
    </div>
  )
}

ArticleEmbed.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ArticleEmbed
