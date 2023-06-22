import { CourseBox, ContentTabs, Spinner } from '../../components';
import './Courses.css';
import { useGetCoursesQuery } from '../../redux/reducers/apiSlice';

const Courses = () => {
    const { data, isLoading } = useGetCoursesQuery();
    return (
        <div className='col-8 content px-0'>
            <div className='content__wrapper d-flex flex-column align-content-between'>
                <ContentTabs />

                {isLoading ? (
                    <Spinner />
                ) : (
                    <div
                        className='products products-container'
                        style={{ overflow: 'scroll' }}
                    >
                        <div className='products__list products-wrapper'>
                            {data?.map((course) => (
                                <CourseBox {...course} key={course.id} />
                            ))}
                        </div>
                    </div>
                )}

                <div className='new-course d-flex gap-2'>
                    <button
                        className='btn-custome btn-custome__blue'
                        data-bs-toggle='modal'
                        data-bs-target='#new-product'
                    >
                        افزودن دوره جدید
                    </button>
                    <button
                        className='btn-custome btn-custome__red'
                        data-bs-toggle='modal'
                        data-bs-target='#add-discount-all-product'
                    >
                        اعمال تخفیف همه دوره‌ها
                    </button>
                    <button
                        className='btn-custome btn-custome__green btn-modal-new-category'
                        data-bs-toggle='modal'
                        data-bs-target='#add-new-category'
                    >
                        افزودن دسته بندی
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
