import React, {useEffect, useState} from 'react';
import ChecksMainPage from './CheckMainPage.module.css';
import Check from '../Check/Check.js';
import axios from 'axios';
import {Link} from 'react-router-dom';

const CheckMainPage = () => {
    const [data, setData] = useState({
        status: '',
        items: [],
        total_items: 0,
        current_page: 0,
        total_pages: 0,
    });

    const [multiData, setMultiData] = useState({
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
                    setData(response.data);
                }
                // const multiResponse = await axios.get('/cheque/multi/my?page=1&limit=100');
                // if (multiResponse.status === 200) {
                //     setMultiData(multiResponse.data);
                // }
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
                        state={{
                            name: check.name || 'Check',
                            status: check.status || 'unknown',
                            link: check.link || 'unknown',
                            connected_to_user: check.connected_to_user || 'undefined',
                            currency: check.currency || 'Gmeme',
                            amount: check.amount || '0',
                            total: check.total || '$0.00',
                            onDelete: 'handleDelete',
                            password: check.password,
                            type: "single"
                        }}
                        className={ChecksMainPage.checksCard}
                    >
                        {check.name}
                    </Link>
                ))}
                {(multiData.items || []).map((check, index) => (
                    <Link
                        key={index}
                        to='/Check'
                        state={{
                            name: check.name || 'Check',
                            status: check.status || 'unknown',
                            link: check.link || 'unknown',
                            activation_limit: check.activation_limit,
                            currency: check.currency || 'Gmeme',
                            amount: check.amount || '0',
                            total: check.total || '$0.00',
                            onDelete: 'handleDelete',
                            password: check.password,
                            require_subscriptions: check.require_subscriptions,
                            type: "multi"
                        }}
                        className={ChecksMainPage.checksCard}
                    >
                        {check.name}
                    </Link>
                ))}
                <div className={ChecksMainPage.add_check}>
                    <Link to="/CreateCheck">
                        <span className={ChecksMainPage.add_check_text}>
                            +
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CheckMainPage;
