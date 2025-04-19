import { useState } from 'react'
import './TwitterFollowCard.css' 

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const buttonText = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar' 
          src={`https://unavatar.io/x/${userName}`} 
          alt={`Avatar of ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{ name }</strong>
          <span className='tw-followCard-infoUserName'>@{ userName }</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className='tw-followCard-text'>
            {buttonText}
          </span>
          <span className='tw-followCard-stopFollow'>
            Stop following
          </span>
        </button>
      </aside>
    </article>
  )
}