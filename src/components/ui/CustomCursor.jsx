import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.08
      followerY += (mouseY - followerY) * 0.08
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)'
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)'
      follower.style.opacity = '0.5'
    }
    const onLeaveLink = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      follower.style.transform = 'translate(-50%, -50%) scale(1)'
      follower.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    animate()

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    // Hide on mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none'
      follower.style.display = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={followerRef} className="cursor-follower" style={{ transform: 'translate(-50%, -50%)' }} />
    </>
  )
}
