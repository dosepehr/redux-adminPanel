import { ContentTabs, BlogBox, Spinner } from '../../components';
import './Blogs.css';
import { useGetArticlesQuery } from '../../redux/reducers/apiSlice';

export default function Blogs() {
    const { data, isLoading } = useGetArticlesQuery();
    return (
        <div className='col-8 content px-0'>
            <div className='content__wrapper d-flex flex-column align-content-between'>
                <ContentTabs />
                <div className='articles'>
                    <div className='articles__list'>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                                data?.map((blog) => <BlogBox {...blog} key={ blog._id} />)
                        )}
                    </div>
                </div>

                <div className='new-article'>
                    <button
                        className='btn-custome btn-custome__blue'
                        data-bs-toggle='modal'
                        data-bs-target='#new-article'
                        id='btn-modal-new-article'
                    >
                        افزودن مقاله جدید
                    </button>
                </div>
            </div>
        </div>
    );
}
