import { NavLink } from 'react-router'
export default function Nav({ className, ...props }) {
  return (
    <nav className={`flex items-center gap-3 ${className}`} {...props}>
      <NavLink className={ ({isActive}) => (isActive ? 'font-bold underline text-secondary' : '')} to='/'>Shop</NavLink>
      <NavLink className={ ({isActive}) => (isActive ? 'font-bold underline text-secondary' : '')} to='/about'>About</NavLink>
      <NavLink className={ ({isActive}) => (isActive ? 'font-bold underline text-secondary' : '')} to='/account'>Account</NavLink>
    </nav>
  )
}
