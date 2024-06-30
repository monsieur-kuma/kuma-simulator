import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { translations } from '@/locales/translations';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page! {t(translations.appName)}</p>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
