import { useState } from 'react'
import ChatBox from 'react-custom-chat'

const App = () => {
  const [firstPersonMessageList, setFirstPersonMessageList] = useState([])
  const [secondPersonMessageList, setSecondPersonMessageList] = useState([])

  const sendFirstPersonMessage = (newMessage) => {
    const newFirstPersonMessageList = [
      ...firstPersonMessageList, {text: newMessage, person: 'primary'}
    ]

    const newSecondPersonMessageList = [
      ...secondPersonMessageList, {text: newMessage, person: 'secondary'}
    ]

    setFirstPersonMessageList(newFirstPersonMessageList)
    setSecondPersonMessageList(newSecondPersonMessageList)
  }

  const sendSecondPersonMessage = (newMessage) => {
    const newFirstPersonMessageList = [
      ...firstPersonMessageList, {text: newMessage, person: 'secondary'}
    ]

    const newSecondPersonMessageList = [
      ...secondPersonMessageList, {text: newMessage, person: 'primary'}
    ]

    setFirstPersonMessageList(newFirstPersonMessageList)
    setSecondPersonMessageList(newSecondPersonMessageList)
  }

  return (
    <div className="app-layer">
      <ChatBox
        settings={{
          position: 'left',
          navColor: 'blue',
          primaryColor: 'green',
          secondaryColor: 'red',
          navText: 'John Dey'
        }}
        messageList={firstPersonMessageList}
        onSendMessage={sendFirstPersonMessage}
      />
      <ChatBox
        settings={{
          navColor: 'yellow',
          primaryColor: 'red',
          secondaryColor: 'green',
          navText: 'Jane Stowaway'
        }}
        messageList={secondPersonMessageList}
        onSendMessage={sendSecondPersonMessage}
      />
    </div>
  );
}

export default App;
