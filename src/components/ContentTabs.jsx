import { Link } from 'react-router-dom';
const ContentTabs = () => {
    return (
        <ul class='content__tabs'>
            <li class='content__tab'>
                <Link to='/users' class='content__tab-link'>
                    <span class='fa fa-user'></span>
                    کاربران
                </Link>
            </li>
            <li class='content__tab'>
                <Link to='/infos' class='content__tab-link'>
                    <span class='fa fa-book'></span>
                    اطلاعات
                </Link>
            </li>
            <li class='content__tab'>
                <Link to='/courses' class='content__tab-link'>
                    <span class='fa fa-store'></span>
                    دوره‌ها
                </Link>
            </li>

            <li class='content__tab'>
                <Link to='/blogs' class='content__tab-link'>
                    <span class='fa fa-newspaper'></span>
                    وبلاگ
                </Link>
            </li>
        </ul>
    );
};

export default ContentTabs;
