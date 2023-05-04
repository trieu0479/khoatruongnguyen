import React from 'react';

export const useResizeWindow = () => {
  const [isSmall, setIsSmall] = React.useState(false)

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  function checkScreenSize() {
    setIsSmall(window.innerWidth <= 768)
  }

  return {
    isSmall
  }
}
