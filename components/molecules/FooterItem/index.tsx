import Link from 'next/link'
import React from 'react'

interface FooterItemProps{
  title: string;
  href?: string[];
  items?: string[];
}

function FooterItem(props: FooterItemProps) {
  const { href, title, items } = props;
  let href1=["/", "/", "/", "/#"];

  href1.map(function(value, i){
    console.log(value);
    )
  }
  let items1=["About Us", " Press Release", "Terms of Use","Privacy & Policy"];
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
        <ul className="list-unstyled">
            <li className="mb-6">
            <Link href={href1[0]}>
            <a  className="text-lg color-palette-1 text-decoration-none"></a>
            </Link>
            </li>
            <li className="mb-6">
            <Link href={href1[1]}>
            <a  className="text-lg color-palette-1 text-decoration-none"></a>
            </Link>
            </li>
            <li className="mb-6">
            <Link href={href1[2]}>
            <a  className="text-lg color-palette-1 text-decoration-none"></a>
            </Link>
            </li>
            <li className="mb-6">
            <Link href={href1[3]}>
            <a className="text-lg color-palette-1 text-decoration-none"></a>
            </Link>
            </li>
            <li className="mb-6">
            <Link href={href1[4]}>
            <a className="text-lg color-palette-1 text-decoration-none"></a>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default FooterItem