import React from 'react';
import { UserItem, ContentTabs, Spinner } from '../../components';
import './Users.css';
import { useGetUsersQuery } from '../../redux/reducers/apiSlice';

const Users = () => {
    const { data, isLoading } = useGetUsersQuery();
    return (
        <div className='col-8 content px-0'>
            <div className='content__wrapper'>
                <ContentTabs />

                <div className='users'>
                    <form
                        action='#'
                        className='form row justify-content-between gap-3 mx-0'
                    >
                        <div className='form__box-input col-8 px-0'>
                            <span className='fa fa-search form__icon form__icon-search'></span>

                            <input
                                type='search'
                                name=''
                                id='search'
                                placeholder='نام یا ایمیل کاربر را وارد کنید '
                                className='form-control form__input'
                                required
                            />
                        </div>
                        <button
                            type='reset'
                            className='btn-custome btn-custome--gray col-3'
                        >
                            حذف کاربر
                        </button>
                    </form>

                    <div className='users__list-container'>
                        <div className='users__list users__list-wrapper'>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                data?.map((user) => (
                                    <UserItem {...user} key={user._id} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
