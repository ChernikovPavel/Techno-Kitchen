import { Badge, Button, Typography } from '@mui/material';
import styles from './HomePage.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ChatComponent from '../../components/chat/ui/ChatComponent';
import useChat from '../../hooks/useChat';
import { useAppSelector } from '../../redux/hooks';

export default function HomePage(): JSX.Element {
  const { user } = useAppSelector((store) => store.user);
  const navigate: NavigateFunction = useNavigate();
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const { newMessagesCount, resetCount } = useChat();
  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <Typography variant="h3" component="h2">
            Конфигуратор ПК
          </Typography>
          <Typography variant="h6" component="h4">
            <br />
            Добро пожаловать в Конфигуратор Идеального ПК!
            <br />
            На нашем сайте вы можете создать компьютер, полностью адаптированный
            под ваши задачи и предпочтения.
            <br />
            Просто выберите необходимые компоненты, и конфигуратор поможет вам
            собрать ПК вашей мечты!
            <br />
            Соберите свой идеальный компьютер уже сегодня – начните прямо
            сейчас!
          </Typography>
        </div>
        <img className={styles.photo} src="/landingPic2.png"></img>
      </div>
      <div className={styles.button}>
        <Button onClick={() => navigate('/configs')} variant="contained">
          Собрать ПК
        </Button>
        {user.email && (
          <Badge
            badgeContent={newMessagesCount}
            color="error"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Button
              onClick={() => {
                setChatOpen(true);
                resetCount();
              }}
              variant="contained"
            >
              Chat
            </Button>
          </Badge>
        )}
      </div>
      {isChatOpen && <ChatComponent setChatOpen={setChatOpen} />}
    </div>
  );
}
