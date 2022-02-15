import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/Transaction";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transaction"/>
      <TransactionContent />
    </section>
  );
}
