import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <div
            style={{
                padding: '10px',
            }}
        >
            <ChatEngine
                height="97vh"
                projectID="906adec1-1649-4806-8dba-44e36a9400cc"
                userName="kbrito30"
                userSecret="123123"
                renderChatFeed={(chatAppProps) => (
                    <ChatFeed {...chatAppProps} />
                )}
            />
        </div>
    );
};

export default App;
