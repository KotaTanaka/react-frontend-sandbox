import React from "react";

// from app
import { IService } from "interfaces/api/Service";
import useGetServices from "hooks/useGetServices";

/**
 * Wi-Fiサービス一覧ページ
 * @author kotatanaka
 */
const ServicesPage: React.FC = () => {
  const { services, isLoading } = useGetServices();

  return (
    <div>
      <h1>Wi-Fiサービス一覧</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {services.serviceList.map((service: IService) => (
            <li key={service.serviceId}>{service.wifiName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicesPage;
