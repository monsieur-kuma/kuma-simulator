import { ICookie, IGameRecordCard } from 'michos_api';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Waiting from '@/components/Waiting';
import { sendData } from '@/lib/extensions';
import { translations } from '@/locales/translations';

const Home = () => {
  const { t } = useTranslation();
  const [cookies, setCookie] = useState<ICookie>();
  const [games] = useState<IGameRecordCard[]>([]);
  const [loading] = useState(false);

  useEffect(() => {
    sendData('syncCookies').then((res) => {
      const response = res as { cookies: ICookie };
      setCookie(response.cookies);
    });
  }, []);

  console.log('cookies', cookies);

  const getGames = async () => {
    // try {
    //   setLoading(true);
    //   if (cookies) {
    //     const hoyolab = new Hoyolab({ cookie: cookies });
    //     const gameRecordCard = await hoyolab.gameRecordCard();
    //     if (gameRecordCard.length) {
    //       setGames(gameRecordCard);
    //     }
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <div>{t(translations.appName)}</div>
      <div>{t(translations.pages.home)}</div>
      <Button onClick={getGames}>Get Game</Button>
      {loading ? <Waiting /> : null}
      <div>
        {games.map((game) => (
          <Card key={game.game_id}>
            <CardHeader>
              <CardTitle>{game.game_name}</CardTitle>
              <CardDescription>{game.nickname}</CardDescription>
            </CardHeader>
            <CardContent>{game.level}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
