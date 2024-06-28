import React from 'react'
import PropTypes from 'prop-types'
import './Organization.css'

const OrganizationChart = ({ org, onNodeClick }) => {
  // const childCount = org.organizationChildRelationship
  //   ? org.organizationChildRelationship.length
  //   : 0

  return (
    <div className="root" onClick={() => onNodeClick(org)}>
      <div className="card-header">
        <div className="card-header-title">
          <div className="tooltip">
            <div className="avatar">
              <span role="img" aria-label="business">
                🏢
              </span>
            </div>
            <span>&ensp;{org.tradingName}</span>
            {/* <div className="tooltip-content">{`${childCount} Sub Profile`}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

// PropTypes 정의
OrganizationChart.propTypes = {
  org: PropTypes.shape({
    tradingName: PropTypes.string.isRequired, // 조직의 이름
    organizationChildRelationship: PropTypes.arrayOf(
      PropTypes.shape({
        tradingName: PropTypes.string.isRequired, // 자식 노드의 이름
      })
    ).isRequired, // 자식 노드 배열 (필수)
  }).isRequired, // org prop은 필수
  onNodeClick: PropTypes.func.isRequired,
}

export default OrganizationChart
