import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportEmployeesToExcel = (employees) => {
  // Convert to worksheet
  const worksheet = XLSX.utils.json_to_sheet(employees);
  const workbook = XLSX.utils.book_new();

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

  // Generate buffer
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create blob and trigger download
  const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(fileData, "EmployeeData.xlsx");
};
