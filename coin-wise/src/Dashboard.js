import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Notification from './Notification';
import StreakModal from './StreakModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCirclePlus, faFire, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import TransactionList from './TransactionList';
import Modal from 'react-modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [selectedStreakType, setSelectedStreakType] = useState('No impulse purchases');

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

  useEffect(() => {
    // Cleanup logic if necessary
    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStreakTypeChange = (selectedType) => {
    setSelectedStreakType(selectedType);
    closeModal();
  };

  const [isAddBillModalOpen, setIsAddBillModalOpen] = useState(false);
  const [isRemoveBillModalOpen, setIsRemoveBillModalOpen] = useState(false);
  const [selectedBillToRemove, setSelectedBillToRemove] = useState(null);
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [bills, setBills] = useState([]);

  const openAddBillModal = () => {
    setIsAddBillModalOpen(true);
  };

  const closeAddBillModal = () => {
    setIsAddBillModalOpen(false);
  };

  const handleAddBill = () => {
    const newBill = {
      name: billName,
      amount: billAmount,
    };

    setBills([...bills, newBill]);
    setBillName('');
    setBillAmount('');
    closeAddBillModal();
  };

  const openRemoveBillModal = (bill) => {
    setIsRemoveBillModalOpen(true);
    setSelectedBillToRemove(bill);
  };

  const closeRemoveBillModal = () => {
    setIsRemoveBillModalOpen(false);
    setSelectedBillToRemove(null);
  };

  const handleRemoveBill = () => {
    if (selectedBillToRemove) {
      const updatedBills = bills.filter((bill) => bill !== selectedBillToRemove);
      setBills(updatedBills);
      closeRemoveBillModal();
    }
  };

  return (
    <div className="dashboard-hero-container">
      <Navbar />
      {/* <Notification /> */}
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
              <h3>Streaks <FontAwesomeIcon icon={faFire} /></h3>
              <p>
                <StreakModal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  input1={input1}
                  input2={input2}
                  setInput1={setInput1}
                  setInput2={setInput2}
                  onSelectStreakType={handleStreakTypeChange}
                />
              </p>
            </div>
            <div className="divider"></div>

            <div className="micro-card-item">
              <h3>
                Upcoming Bills{' '}
                <span className="icon-container">
                  <button className="button-none" onClick={openAddBillModal}>
                    <FontAwesomeIcon icon={faCirclePlus} title="Click here to add upcoming bills." />
                  </button>
                  <button className="button-none" onClick={openRemoveBillModal}>
                    <FontAwesomeIcon icon={faMinusCircle} title="Click here to remove bills." />
                  </button>
                </span>
              </h3>

              {bills.length > 0 && (
                <ul>
                  {bills.map((bill) => (
                    <li key={bill.name} onClick={() => openRemoveBillModal(bill)}>
                      {`${bill.name}: $${bill.amount}`}
                    </li>
                  ))}
                </ul>
              )}

              <p>Total Amount: ${bills.reduce((total, bill) => total + parseFloat(bill.amount), 0).toFixed(2)}</p>

              {/* Add Bill Modal */}
              <Modal
                isOpen={isAddBillModalOpen}
                onRequestClose={closeAddBillModal}
                className="modal"
                overlayClassName="overlay"
              >
                <h2>Add New Bill</h2>
                <label htmlFor="billName">Bill Name:</label>
                <input
                  type="text"
                  id="billName"
                  value={billName}
                  onChange={(e) => setBillName(e.target.value)}
                />
                <label htmlFor="billAmount">Bill Amount:</label>
                <input
                  type="text"
                  id="billAmount"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                />
                <button onClick={handleAddBill}>Add Bill</button>
                <button onClick={closeAddBillModal}>Close</button>
              </Modal>

              {/* Remove Bill Modal */}
              <Modal
                isOpen={isRemoveBillModalOpen}
                onRequestClose={closeRemoveBillModal}
                className="modal"
                overlayClassName="overlay"
              >
                <h2>Remove Bill</h2>
                <p>Select a bill to remove:</p>
                {bills.length > 0 && (
                  <ul className="button-none">
                    {bills.map((bill) => (
                      <li className="button-hover" key={bill.name} onClick={() => setSelectedBillToRemove(bill)}>
                        {bill.name}
                      </li>
                    ))}
                  </ul>
                )}
                <button onClick={handleRemoveBill}>Remove Bill</button>
                <button onClick={closeRemoveBillModal}>Close</button>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <h1>Money Spent by Month</h1>
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
              <Text textAnchor="middle" verticalAnchor="start" x="50%" y={20} className="chart-title">
                Monthly Spending
              </Text>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-container">
        <h1>Recent transactions</h1>
        <TransactionList transactionsData={transactionsData} />
      </div>
    </div>
  );
};

export default Dashboard;
