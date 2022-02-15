import Image from 'next/image'
import React from 'react'
import cx from 'classnames'
import Link from 'next/link';

interface MenuItemProps{
    title: string;
    icon: 'overview' | 'rewards' | 'messages' | 'logout' | 'settings' | 'transaction' | 'card'
    active?: boolean;
    href: string;
}

function MenuItem(props : Partial<MenuItemProps>) {
    const { title, icon, active, href } = props;
    const ClassItem = cx({
        'item': true,
        'mb-30': true,
        'active': active
    })
   return (
    <>
    <div className={ClassItem}>
        <div className="me-3">
        <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
            <Link href={href}>
                <a className="text-lg text-decoration-none">{title}</a>
            </Link>
        </p>
    </div>
    </>
  )
}

export default MenuItem