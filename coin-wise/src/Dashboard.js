// Dashboard.js
import React, { useEffect } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
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
  // Sample data for the line chart
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

  // Sample transaction data
  const transactionsData = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Shopping', amount: 120 },
    { id: 3, description: 'Dinner', amount: 30 },
  ];

  useEffect(() => {
    // Cleanup as needed
    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div className="dashboard-hero-container">
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="micro-container">
          {/* Combined Card for Total Balance, Streak, and Upcoming Bills */}
          <div className="micro-card combined-card">
            <div className="micro-card-item">
              <h3>Total Balance</h3>
              <p>$5,000</p>
            </div>
            <div className="divider"></div>
            <div className="micro-card-item">
              <h3>Streak</h3>
              <p>15 days</p>
            </div>
            <div className="divider"></div>
            <div className="micro-card-item">
              <h3>Upcoming Bills</h3>
              <p>$1,200</p>
            </div>
          </div>

          {/* Line Chart */}
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
                  stroke="#2ecc71" // Green color
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

        {/* Transaction List */}
        <div className="transaction-list">
          <h2>Transaction List</h2>
          <ul>
            {transactionsData.map((transaction) => (
              <li key={transaction.id}>
                <span>{transaction.description}</span>
                <span>${transaction.amount}</span>
              </li>
            ))}
          </ul>
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

