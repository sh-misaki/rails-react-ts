import PropTypes from 'prop-types'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IHelloProps {
  name: string
}

const Hello: React.SFC<IHelloProps> = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React with TypeScript" />,
    document.body.appendChild(document.createElement('div')),
  )
})