import React from "react";
import "./Pagination.scss";
import { Pagination } from "antd";

export const OrgPagination = ({ setpage, pageSize }) => {
  return (
    <div className='pagination'>
      <Pagination
        total={40}
        showTotal={(total, range) => `Showing results ${range[1]} of ${total}`}
        defaultPageSize={pageSize}
        defaultCurrent={1}
        onChange={(page) => setpage(page)}
        
      />
    </div>
  );
};
