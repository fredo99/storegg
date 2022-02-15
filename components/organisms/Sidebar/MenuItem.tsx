import Image from 'next/image'
import React from 'react'
import cx from 'classnames'

interface MenuItemProps{
    title: string;
    icon: 'overview' | 'rewards' | 'messages' | 'logout' | 'settings' | 'transaction' | 'card'
    active?: boolean;
}

function MenuItem(props : Partial<MenuItemProps>) {
    const { title, icon, active } = props;
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
            <a href="../member/transactions" className="text-lg text-decoration-none">{title}</a>
        </p>
    </div>
    </>
  )
}

export default MenuItem