import React from 'react'
import { NavLink } from 'react-router-dom'

const FinancialTracker = () => {
  return (
    <nav className="navbar-ft">
      <div className="container-ft">
        <ul>
            <li>
                <NavLink to="/MonthlyBudget" >Monthly Budget</NavLink>
            </li>
            <li>
                <NavLink to="/Challenge">Challenge</NavLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default FinancialTracker