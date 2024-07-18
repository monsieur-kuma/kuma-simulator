import { ICookie, IGameRecordCard } from 'michos_api';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { backendService } from '@/services';

const Home = () => {
  const { t } = useTranslation();
  const [cookies, setCookie] = useState<ICookie>();
  const [games, setGames] = useState<IGameRecordCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sendData('syncCookies').then((res) => {
      const response = res as { cookies: ICookie };
      setCookie(response.cookies);
    });
  }, []);

  console.log('cookies', cookies);

  const getGames = async () => {
    try {
      setLoading(true);
      if (cookies) {
        const result = await backendService.post<IGameRecordCard[]>(
          'hoyolab/gameRecords',
          {
            cookie: cookies,
          },
        );
        if (result.kind === 'ok') {
          console.log(result.data);
          setGames(result.data);
        }
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{t(translations.pages.home)}</h1>
      <div className="flex items-center m-3">
        <b>{t(translations.gameInAccount)}</b>
        <Button className="ml-5" size="sm" onClick={getGames}>
          {t(translations.actions.update)}
        </Button>
      </div>
      {loading ? <Waiting /> : null}
      <div className="grid grid-cols-3">
        {games.map((game) => (
          <Card
            key={game.game_id}
            className="cursor-pointer m-3 text-sm"
            onClick={() => window.open(game.url)}
          >
            <CardHeader>
              <div className="flex">
                <div>
                  <Avatar className="mr-2">
                    <AvatarImage src={game.logo} />
                    <AvatarFallback>{game.game_name}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-start">
                  <CardTitle>{game.game_name}</CardTitle>
                  <CardDescription>
                    {game.nickname}: {game.level} ({game.region_name})
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="items-start">
              {game.data.map((content) => {
                return (
                  <div
                    className="flex justify-between p-2 rounded border-2 mt-2"
                    key={content.name}
                  >
                    <b>{content.name}:</b>
                    <span>{content.value}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
