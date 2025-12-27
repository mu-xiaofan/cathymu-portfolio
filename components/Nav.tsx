'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/software-engineering', label: 'Software Engineering' },
    { href: '/data-ml', label: 'Data / ML' },
    { href: '/research', label: 'Research' },
    { href: '/consulting', label: 'Client-Facing' },
    { href: '/contact', label: 'Contact' },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="nav">
            {navItems.map(item => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}
