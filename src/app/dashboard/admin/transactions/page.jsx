import React from 'react';

const TransactionPage = () => {

        const transactions = [
        {
            _id: 1,
            transactionId: "TXN-1001",
            type: "Purchase",
            email: "john@gmail.com",
            amount: "$150",
            date: "2026-06-24",
        },
        {
            _id: 2,
            transactionId: "TXN-1002",
            type: "Subscription",
            email: "artist@gmail.com",
            amount: "$9.99",
            date: "2026-06-20",
        },
    ];
    
    return (
        <div>
            
            <div className="mt-14">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    All Transactions
                </h2>

                <div className="overflow-x-auto border">

                    <table className="table">

                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Type</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                            {transactions.map((transaction) => (
                                <tr key={transaction._id}>
                                    <td>{transaction.transactionId}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.email}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.date}</td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

export default TransactionPage;