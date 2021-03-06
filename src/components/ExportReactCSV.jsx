import React from 'react';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ExportReactCSV = ({ csvData, fileName }) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    let arr;
    if (csvData) {
      arr = [...csvData.map((item) => Object.assign({}, item))];
      arr.map((item) => delete item._id);
    }
    const ws = XLSX.utils.json_to_sheet(arr);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button className="excel but" variant="warning" onClick={(e) => exportToCSV(csvData, fileName)}>
      Экспорт в эксел
    </button>
  );
};
export default ExportReactCSV;
