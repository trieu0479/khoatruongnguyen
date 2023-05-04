import React from 'react'

function MemoComponent({ user, handleUpdate }) {
  console.log('render MemoComponent', { user});
  return (
    <div>MemoComponent <button type="button" onClick={handleUpdate}>check useCallback</button></div>
  )
}

export default React.memo(MemoComponent)

// export default React.memo(MemoComponent, customEquality)
// function customEquality(prevProps, nextProps) {
//   return prevProps.user.title === nextProps.user.title;
// }