import React, { useEffect, useState } from 'react';
import ChecksMainPage from './CheckMainPage.module.css';
import Check from '../Check/Check.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CheckMainPage = () => {
    const [data, setData] = useState({
        status: '',
        items: [],
        total_items: 0,
        current_page: 0,
        total_pages: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/cheque/personal/my?page=1&limit=100');
                if (response.status === 200) {
                    setData({
                        name: response.data.name,
                        status: response.data.status,
                        items: response.data.items,
                        total_items: response.data.total_items,
                        current_page: response.data.current_page,
                        total_pages: response.data.total_pages,
                        link: response.data.link,
                        connected_to_user: response.data.connected_to_user
                    });
                }
            } catch (e) {
                console.error('Checks error: ' + e);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={ChecksMainPage.Main}>
            <h1>Your Checks</h1>
            <div className={ChecksMainPage.list_of_checks}>
                {data.items.map((check, index) => (
                    <Link
                        key={index}
                        to='/Check'
                        state = {{
                        name: check.name || 'Check',
                        status: check.status || 'unknown',
                        link: check.link || 'unknown',
                        connected_to_user: check.connected_to_user || 'undefined',
                        currency: check.currency || 'Gmeme',
                        amount: check.amount || '0',
                        total: check.total || '$0.00',
                        onDelete: 'handleDelete',
                    }}
                        className={ChecksMainPage.checksCard}
                    >
                        {check.name}
                    </Link>
                ))}
                <div className={ChecksMainPage.add_check}>
                    <Link to="/CreateCheck">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 124 124"
                             fill="none">
                            <rect width="124" height="124" rx="62" fill="url(#paint0_linear_596_241)"/>
                            <g filter="url(#filter0_d_596_241)">
                                <rect x="56.7432" y="33.7266" width="10.788" height="57.536" rx="5.394" fill="#212121"/>
                                <rect x="91.2646" y="56.7402" width="10.788" height="57.536" rx="5.394"
                                      transform="rotate(90 91.2646 56.7402)" fill="#212121"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_596_241" x="23.7285" y="23.7266" width="77.5361" height="77.5352"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.4 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_596_241"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_596_241"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_596_241" x1="124" y1="0" x2="0" y2="124"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4CAF50"/>
                                    <stop offset="1" stop-color="#FFEB3B"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckMainPage;
