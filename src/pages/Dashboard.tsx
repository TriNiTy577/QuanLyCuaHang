import { Card, Col, Row, Statistic } from "antd";

function Dashboard() {
  return (
    <>
      <h2>Tổng quan hệ thống</h2>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Tổng sản phẩm" value={300} />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic title="Nhân viên" value={5} />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic title="Phiếu nhập" value={12} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;