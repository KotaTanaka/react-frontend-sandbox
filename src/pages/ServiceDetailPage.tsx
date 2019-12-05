import React from 'react';
import { useParams } from 'react-router';

/**
 * Wi-Fiサービス詳細ページ
 * @author kotatanaka
 */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  return (
    <div className="App">
      <div>
        <h1>Wi-Fiサービス詳細</h1>
        <p>サービスID: {serviceId}</p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
