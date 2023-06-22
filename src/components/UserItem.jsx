import { useDeleteUserMutation } from '../redux/reducers/apiSlice';
import { toast } from 'react-toastify';
const UserItem = ({ username, email, _id }) => {
    const [deleteUser, { isSuccess }] = useDeleteUserMutation();

    const handleDeleteUser = async (id) => {
        await deleteUser(id).unwrap();
        toast(`کاربر ${username} با موفقیت حذف شد💣`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            rtl: true,
        });
    };
    return (
        <div className='uesrs__item'>
            <div className='users__info'>
                <img
                    src='../../img/admin/profile/banana.png'
                    alt='photo user'
                    className='users__img'
                />
                <div className='users__details'>
                    <p className='users__name my-0'>{username}</p>
                    <p lang='en' className='users__email'>
                        {email}
                    </p>
                </div>
            </div>
            <div className='users__btns'>
                <button className='btn-custome btn-custome--gray'>
                    پیام ها
                </button>
                <button className='btn-custome btn-custome__blue'>
                    اطلاعات
                </button>
                <button
                    className='btn-custome btn-custome__red'
                    onClick={() => {
                        handleDeleteUser(_id);
                    }}
                >
                    حذف
                </button>
            </div>
        </div>
    );
};

export default UserItem;
