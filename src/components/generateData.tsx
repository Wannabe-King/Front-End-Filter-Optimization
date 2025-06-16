import React, { useRef, useState } from "react";
import { DataRow } from "../types";
import Papa from "papaparse";

interface GenerateDataProps {
  onDataUpdate: (data: DataRow[]) => void;
}

const GenerateData: React.FC<GenerateDataProps> = ({ onDataUpdate }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [csvFileName, setCsvFileName] = useState<string | null>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCsvFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData: DataRow[] = result.data.map((row: any) => ({
          number: Number(row.number),
          mod3: Number(row.mod3),
          mod4: Number(row.mod4),
          mod5: Number(row.mod5),
          mod6: Number(row.mod6),
        }));
        onDataUpdate(parsedData);
      },
      error: (error) => {
        console.error("CSV Parsing Error:", error);
      },
    });
  };

  return (
    <div className=" flex">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Upload CSV File
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
          className="mb-2"
        />
        {csvFileName && (
          <p className="text-sm text-green-600">Loaded file: {csvFileName}</p>
        )}
      </div>
      <button
        onClick={triggerFileInput}
        className="w-90px h-20px flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 rounded-lg transition-colors duration-200"
      >
        Upload CSV
      </button>
    </div>
  );
};

export default GenerateData;
