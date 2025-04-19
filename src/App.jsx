import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const users = [
    { userName: 'justinbieber', name: 'Justin Bieber', isFollowing: true },
    { userName: 'realdonaldtrump', name: 'Donald Trump', isFollowing: false },
    { userName: 'cristiano', name: 'Cristiano Ronaldo', isFollowing: true },
    { userName: 'cnnbrk', name: 'CNN Breaking News', isFollowing: false },
  ]

  return (
    <div className='App'>
      <section className='title'>
        <img src='./assets/twitter.png' alt="Twitter logo" />
        <h1>FOLLOW CARD</h1>
      </section>
      <section className='cardList'>
        {
          users.map(({ userName, name, isFollowing }) => (
              <TwitterFollowCard 
                key={userName} 
                userName={userName} 
                name={name} 
                initialIsFollowing={isFollowing} 
              />
            ))
        }
      </section>
    </div>
  )
}