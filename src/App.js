import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <div
            style={{
                padding: '10px',
            }}
        >
            <ChatEngine
                height="97vh"
                projectID="906adec1-1649-4806-8dba-44e36a9400cc"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => (
                    <ChatFeed {...chatAppProps} />
                )}
            />
        </div>
    );
};

export default App;
