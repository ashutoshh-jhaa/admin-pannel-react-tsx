import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import SettingSection from "./SettingSection";

interface Account {
  id: number;
  name: string;
  connected: boolean;
  icon: string;
}

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState<Account[]>([
    { id: 1, name: "Google", connected: true, icon: "/google.png" },
    { id: 2, name: "Facebook", connected: false, icon: "/facebook.svg" },
    { id: 3, name: "Twitter", connected: true, icon: "/x.png" },
  ]);

  const toggleConnection = (id: number) => {
    setConnectedAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, connected: !acc.connected } : acc,
      ),
    );
  };

  return (
    <SettingSection icon={HelpCircle} title="Connected Accounts">
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt={`${account.name} icon`}
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => toggleConnection(account.id)}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </SettingSection>
  );
};

export default ConnectedAccounts;
