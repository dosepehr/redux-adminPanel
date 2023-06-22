import { useDeleteUserMutation } from '../redux/reducers/apiSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
const UserItem = ({ username, email, _id, firstname, lastname, age, city }) => {
    const [deleteUser] = useDeleteUserMutation();

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id).unwrap();
            toast.success(`کاربر با موفقیت حذف شد💣`);
        } catch (err) {
            toast.error('مشکلی به وجود آمد');
        }
    };
    const handleUserDetails = () => {
        Swal.fire({
            icon: 'info',
            title: `${username}`,
            html:
                `نام : ${firstname} <br/>` +
                `نام خانوادگی : ${lastname} <br/>` +
                `سن : ${age} <br/>` +
                `شهر : ${city} <br/>`,
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
                <button
                    className='btn-custome btn-custome__blue'
                    onClick={handleUserDetails}
                >
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
