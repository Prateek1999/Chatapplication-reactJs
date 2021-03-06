import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css';

const App=() => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="1bcbea80-229b-43cf-b5d6-3fa67785c7db"
             
            userName={localStorage.getItem('username')}

            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        

        />

    );
}

export default App;