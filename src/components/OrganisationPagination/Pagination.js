import React from "react";
import "./Pagination.scss";
import { Pagination } from "antd";
import PropTypes from 'prop-types';



export const OrgPagination = ({pageSize,setpage,page}) => {

  return (
    <div className='pagination'>
      <Pagination
        total={45}
        // current = {page+1}
        showTotal={(total, range) => `Showing results ${range[1]} of ${total}`}
        defaultPageSize={pageSize}
        onChange={(page) => setpage(page)}
        defaultCurrent={page}        
      />
    </div>
  );
};


OrgPagination.propTypes = {
  setpage: PropTypes.number,
  pageSize: PropTypes.number,
  page : PropTypes.number
}

