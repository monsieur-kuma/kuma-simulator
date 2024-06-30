import logo from '@/assets/logo.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import S from './styles.module.less';

const siders = [
  {
    name: 'Dashboard',
    key: 'dashboard',
  },
  {
    name: 'Settings',
    key: 'settings',
  },
];

const Sider = () => {
  return (
    <div className={S.sider}>
      <div className="grid p-2 justify-start">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={logo} alt="avatar" />
            <AvatarFallback>HSR</AvatarFallback>
          </Avatar>
          <div className="ml-5 text-white">HSR Simulator</div>
        </div>

        <div className="mt-5">
          {siders.map((sider) => (
            <div key={sider.key} className="flex">
              <i className="ri-corner-down-left-line"></i>
              {sider.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sider;
