import React from 'react'
import { UserContext,ChannelContext } from './App'

function ComponentF() {
  return (
    <div className='F'>
        <UserContext.Consumer>
          {
            user => {
                return (
                  <ChannelContext.Consumer>
                    {
                      channel =>{
                        return (
                          <div>User Context value is <b>{user}</b>, Channel Context value is <b>{channel}</b></div>
                        )
                      }
                    }
                </ChannelContext.Consumer>)
            }
          }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF