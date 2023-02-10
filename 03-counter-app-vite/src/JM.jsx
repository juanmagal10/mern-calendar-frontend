import React from 'react'
import PropTypes from 'prop-types'

const JM = ({ nombre }) => {
  

    const getSaludo = () => {
        
        
        return `hola ${nombre}`
    }
  return (
    <div>
      {getSaludo()}
    </div>
  )
}

JM.propTypes = {
  nombre:PropTypes.string.isRequired
}

JM.defaultProps = {
  nombre:'no hay titulo'
}

export default JM
