import React, {useEffect, useState} from 'react';
import ChecksMainPage from './CheckMainPage.module.css';
import Check from "../Check/Check.js";
import axios from "axios";
import {Link} from "react-router-dom";

const CheckMainPage = () => {

    const [data, setData] = useState({
        status: '',
        items: [],
        total_items: 0,
        current_page: 0,
        total_pages: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/cheque/personal/my?page=1&limit=100');
                if (response.status === 200) {
                    setData({
                        status: response.data.status,
                        items: response.data.items,
                        total_items: response.data.total_items,
                        current_page: response.data.current_page,
                        total_pages: response.data.total_pages
                    });
                }
            } catch (e) {
                console.error("Checks error: " + e);
            }
        };

        fetchData();
    }, []);

    const checkData = {
        currency: 'СМЕМЕ',
        amount: '50',
        total: '$50.00'
    };

    return (
        <div className={ChecksMainPage.Main}>
            <h1>
                Your Checks
            </h1>
            <div className={ChecksMainPage.list_of_checks}>
                <Check
                    currency={checkData.currency}
                    amount={checkData.amount}
                    total={checkData.total}
                    onDelete={'handleDelete'}
                />
                <Check
                    currency={checkData.currency}
                    amount={checkData.amount}
                    total={checkData.total}
                    onDelete={'handleDelete'}
                />
                <Check
                    currency={checkData.currency}
                    amount={checkData.amount}
                    total={checkData.total}
                    onDelete={'handleDelete'}
                />
                <div className="add-check">
                    <Link to="/CreateCheck">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 126 125"
                             fill="none">
                            <rect x="0.333984" width="125" height="125" rx="62.5" fill="#6D8069"/>
                            <rect x="57.5332" y="34" width="10.875" height="58" rx="5.4375" fill="#D9FFD2"/>
                            <rect x="92.334" y="57.1992" width="10.875" height="58" rx="5.4375"
                                  transform="rotate(90 92.334 57.1992)" fill="#D9FFD2"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckMainPage;