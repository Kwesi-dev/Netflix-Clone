import './widgetLg.css'

const WidgetLg = () => {
    const Button = ({type})=>{
        return <button className={"widgetLgBtn "+ type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="" alt="" />
                            <span className="widgetLgName">Chris Luca</span>
                        </td>
                        <td className="widgetLgDate">21 Aug 2021</td>
                        <td className="widgetLgAmount">$133.50</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="" alt="" />
                            <span className="widgetLgName">Chris Luca</span>
                        </td>
                        <td className="widgetLgDate">21 Aug 2021</td>
                        <td className="widgetLgAmount">$133.50</td>
                        <td className="widgetLgStatus"><Button type="Decline"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="" alt="" />
                            <span className="widgetLgName">Chris Luca</span>
                        </td>
                        <td className="widgetLgDate">21 Aug 2021</td>
                        <td className="widgetLgAmount">$133.50</td>
                        <td className="widgetLgStatus"><Button type="Pending"/></td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="" alt="" />
                            <span className="widgetLgName">Chris Luca</span>
                        </td>
                        <td className="widgetLgDate">21 Aug 2021</td>
                        <td className="widgetLgAmount">$133.50</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default WidgetLg