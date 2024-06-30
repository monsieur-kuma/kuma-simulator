import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { translations } from '@/locales/translations';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Home</h1>
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Welcome to the home page! {t(translations.appName)}
        Xin chào các bạn tôi là Hà
      </span>
      <Button>Click me</Button>
      <i className="ri-admin-line"></i>
    </div>
  );
};

export default Home;
