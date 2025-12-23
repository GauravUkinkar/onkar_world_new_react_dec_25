import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Translink = ({ children, href, onClick,...props }) => {

      const router = useNavigate();
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleTransition = async (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(250);
    router.push(href);
    await sleep(250);
    body?.classList.remove("page-transition");
  };
  return (
   <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  )
}

export default Translink
