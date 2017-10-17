import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MobileNavLink = styled(NavLink)`
  display: block;
  &.active {
    background: #238abf;
  }
  i.material-icons {
    font-size: 2.5rem;
  }
`
