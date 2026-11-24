
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Badge,
  Dropdown,
  Space
} from "antd";

import {
  HomeOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  InboxOutlined,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  DownOutlined
} from "@ant-design/icons";

import {
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/dashboard",
      icon: <HomeOutlined />,
      label: "Tổng quan"
    },
    {
      key: "/sales",
      icon: <ShoppingCartOutlined />,
      label: "Bán hàng"
    },
    {
      key: "/products",
      icon: <AppstoreOutlined />,
      label: "Sản phẩm"
    },
    {
      key: "/inventory",
      icon: <InboxOutlined />,
      label: "Kho hàng"
    },
    {
      key: "/reports",
      icon: <BarChartOutlined />,
      label: "Báo cáo"
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "Tài khoản"
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Cài đặt"
    }
  ];

  const selectedKey = menuItems.some(
    item => item.key === location.pathname
  ) ? location.pathname : "/dashboard";

  return (
    <Layout className="app-layout">

      <Header className="app-header">
        <div className="header-logo">
          SuperMart POS
        </div>

        <Space size={20}>
          <Badge count={3} size="small">
            <BellOutlined className="header-icon" />
          </Badge>

          <Dropdown
            menu={{
              items: [
                {
                  key: "profile",
                  label: "Thông tin tài khoản"
                },
                {
                  key: "logout",
                  label: "Đăng xuất",
                  onClick: () => navigate("/")
                }
              ]
            }}
            trigger={["click"]}
          >
            <Space className="user-profile">
              <Avatar style={{ backgroundColor: "#2563eb" }}>
                JD
              </Avatar>

              <div className="user-info">
                <Typography.Text strong>
                  Admin
                </Typography.Text>
                <Typography.Text type="secondary">
                  Quản trị viên
                </Typography.Text>
              </div>

              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </Header>

      <Layout className="app-body">

        <Sider
          width={200}
          theme="light"
          className="app-sidebar"
        >
          <div className="sidebar-title">
            <ShoppingCartOutlined />
            <span>POS System</span>
          </div>

          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            className="sidebar-menu"
          />
        </Sider>

        <Content className="app-content">
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
}

export default MainLayout;
