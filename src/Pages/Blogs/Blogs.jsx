import React from 'react';
import { ContentTabs, BlogBox } from '../../components';
import './Blogs.css';

export default function Blogs() {
    return (
        <div class='col-8 content px-0'>
            <div class='content__wrapper d-flex flex-column align-content-between'>
                <ContentTabs />
                <div class='articles'>
                    <div class='articles__list'>
                        <BlogBox />
                        <BlogBox />
                    </div>
                </div>

                <div class='new-article'>
                    <button
                        class='btn-custome btn-custome__blue'
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
