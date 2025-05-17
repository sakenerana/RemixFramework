import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, SwapOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space,
  theme,
  Image,
} from "antd";
import { Link, Outlet } from "@remix-run/react";
import {
  FcDiploma1,
  FcGlobe,
  FcMultipleDevices,
  FcPackage,
  FcPlus,
  FcSalesPerformance,
  FcSearch,
  FcSettings,
} from "react-icons/fc";

const { Header, Sider, Content } = Layout;

export default function BudgetLayoutIndex() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <FcPackage />,
      label: <Link to="/budget/accounts/create-accounts">Accounts</Link>,
    },
    {
      key: "2",
      icon: <FcDiploma1 />,
      label: <Link to="/budget/transactions/create-transactions">Transactions</Link>,
    },
    {
      key: "3",
      icon: <FcMultipleDevices />,
      label: <Link to="/budget/budgets/create-budget">Budgets</Link>,
    },
  ];

  const menuItems = [
    {
      key: "1",
      icon: <FcGlobe />,
      label: <Link to="/budget">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <FcSalesPerformance />,
      label: <Link to="/budget/accounts">Accounts</Link>,
    },
    {
      key: "3",
      icon: <FcDiploma1 />,
      label: <Link to="/budget/transactions">Transactions</Link>,
    },
    {
      key: "4",
      icon: <FcMultipleDevices />,
      label: <Link to="/budget/budgets">Budgets</Link>,
    },
    {
      key: "5",
      icon: <FcMultipleDevices />,
      label: <Link to="/budget/budget-reports">Reports</Link>,
    },
  ]

  return (
    <div className="flex">
      <Layout className="flex flex-col h-full">
        <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Header
            style={{ padding: 0, background: colorBgContainer }}
            className="flex"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div>
              <Image width={270} src="./img/cficoop.svg" />
            </div>
            <div className="flex-1">
              <div className="flex justify-end">
                <Space>
                  <Link to="/landing-page">
                    <Button icon={<SwapOutlined />} type="text">
                      
                    </Button>
                  </Link>
                  {/* <Space.Compact style={{ width: "100%" }}>
                    <Input placeholder="Search by Asset Tag" />
                    <Button icon={<FcSearch />} type="default">
                      Search
                    </Button>
                  </Space.Compact> */}
                  <Dropdown menu={{ items }} placement="topLeft">
                    <Button icon={<FcPlus />}>Create New</Button>
                  </Dropdown>
                  <Link to="/inventory/settings">
                    <Button icon={<FcSettings />} type="text">
                      Settings
                    </Button>
                  </Link>
                </Space>
              </div>
            </div>
          </Header>
          <Content
            className="flex flex-col h-screen"
            style={{
              margin: "24px 16px",
              padding: 24,
              // minHeight: 'auto',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
          <div className="flex justify-between">
            <div className="w-fit pl-5 pb-5">
              Ant Design using Remix <b>©{new Date().getFullYear()}</b> Inspired
              by <b>SnipeIT</b>
            </div>
            <div className="pr-5">
              <b>Email:</b> sakenerana@gmail.com &nbsp; <b>Contact:</b>{" "}
              +6309553713233
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
