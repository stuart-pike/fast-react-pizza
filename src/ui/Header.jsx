import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-sm font-bold tracking-wide sm:text-base">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
