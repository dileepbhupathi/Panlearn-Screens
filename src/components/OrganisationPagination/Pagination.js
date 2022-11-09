import React from "react";
import "./Pagination.scss";
import { Pagination } from "antd";
import PropTypes from 'prop-types';



export const OrgPagination = (props) => {

  return (
    <div className='pagination'>
      <Pagination
        total={45}
        showTotal={(total, range) => `Showing results ${range[1]} of ${total}`}
        defaultPageSize={props.pageSize}
        defaultCurrent={1}
        onChange={(page) => props.setpage(page)}
        
      />
    </div>
  );
};
OrgPagination.propTypes = {
  setpage: PropTypes.number,
  pageSize: PropTypes.number
}

