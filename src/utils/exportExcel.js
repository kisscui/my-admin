import * as XLSX from "xlsx";
export function exportExcel(json, name, titleArr, sheetName) {
  let data = [];
  let keyAyy = [];
  const getLength = function (obj) {
    let count = 0;
    for (let i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        count++;
      }
    }
    return count;
  };
  for (const key1 in json) {
    if (Object.prototype.hasOwnProperty.call(json, key1)) {
      const element = json[key1];
      let rowDataArray = [];
      for (let key2 in element) {
        if (Object.prototype.hasOwnProperty.call(element, key2)) {
          const element2 = element[key2];
          rowDataArray.push(element2);
          if (keyAyy.length < getLength(element)) {
            keyAyy.push(key2);
          }
        }
      }
      data.push(rowDataArray);
    }
  }
  data.splice(0, 0, keyAyy, titleArr);
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  // 此处隐藏英文字段表头
  var wsrows = [{ hidden: true }];
  ws["!rows"] = wsrows; // ws - worksheet
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  /* generate file and send to client */
  XLSX.writeFile(wb, name + ".xlsx");
}
