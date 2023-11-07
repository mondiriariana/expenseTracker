//Dashboard.js

import React, { useEffect } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Notification from './Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import TransactionList from './TransactionList'; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Text,
} from 'recharts';

const Dashboard = () => {
  const chartData = [
    { month: 'Jan', moneySpent: 2000 },
    { month: 'Feb', moneySpent: 1500 },
    { month: 'Mar', moneySpent: 3000 },
    { month: 'Apr', moneySpent: 1000 },
    { month: 'May', moneySpent: 2500 },
    { month: 'Jun', moneySpent: 2000 },
    { month: 'Jul', moneySpent: 1800 },
    { month: 'Aug', moneySpent: 2300 },
    { month: 'Sep', moneySpent: 1200 },
    { month: 'Oct', moneySpent: 1700 },
    { month: 'Nov', moneySpent: 2800 },
    { month: 'Dec', moneySpent: 2100 },
  ];

  const transactionsData = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Shopping', amount: 120 },
    { id: 3, description: 'Dinner', amount: 30 },
  ];

  const streaksData = [{ type: 'No impulse purchases', days: 15 }];
  // const streaksData = [{}];

  useEffect(() => {
    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div className="dashboard-hero-container">
      <Navbar />
      <Notification />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="micro-container">
          <div className="micro-card combined-card">
            <div className="micro-card-item">
              <h3>Total Balance <FontAwesomeIcon icon={faInfoCircle} title="This is the total amount from your accounts." /></h3>
              <p>$5,000</p>
            </div>
            <div className="divider"></div>
            <div className="micro-card-item">
              <h3>Streaks <FontAwesomeIcon icon={faCirclePlus} title="Click here to add streaks."/></h3>
              <p>{streaksData.length > 0 ? `${streaksData[0].type}: ${streaksData[0].days} days` : 'Click the Plus to Add Streaks'}</p>
            </div>
            <div className="divider"></div>
            <div className="micro-card-item">
              <h3>Upcoming Bills <FontAwesomeIcon icon={faInfoCircle} title="These are your upcoming bills."/></h3>
              <p>$1,200</p>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Months', angle: 0, position: 'bottom', offset: 10 }} />
                <YAxis label={{ value: 'Money Spent', angle: -90, position: 'insideLeft', offset: 10 }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="moneySpent"
                  stroke="#2ecc71"
                  strokeWidth={2}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                />
                <Text
                  textAnchor="middle"
                  verticalAnchor="start"
                  x="50%"
                  y={20}
                  className="chart-title"
                >
                  Monthly Spending
                </Text>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <TransactionList transactionsData={transactionsData} />
      </div>
    </div>
  );
};

export default Dashboard;
