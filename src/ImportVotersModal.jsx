import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Papa from "papaparse";
import axios from "axios"; 

const ImportVotersModal = ({ onClose,onFilePreview }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      file: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [importError, setImportError] = useState(null);

  useEffect(() => {
    setImportError(null);
  }, []);

  const handleFileChange = (event) => {
    const { files } = event.target;
    const selectedFile = files[0];

    const allowedFormats = ["csv", "xls", "xlsx"];
    const extension = selectedFile.name.split(".").pop().toLowerCase();
    if (!allowedFormats.includes(extension)) {
      setImportError(
        "Invalid file format. Please select a CSV, xls or xlsx file."
      );

      const previewData = `<span class="math-inline">\{selectedFile\.name\} \(</span>{selectedFile.size} bytes)`;
    onFilePreview(previewData);

    register('file', { required: true }, true)(selectedFile);
    setValue('file', selectedFile);

      return;
    }

    register("file", { required: true }, true)(selectedFile);
    setValue("file", selectedFile);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await Papa.parse(data.file, { header: true });
      const parsedData = response.data;

      const validatedData = parsedData.map((row) => {
        if (!row.name || !row.email || !row.id) {
          throw new Error("Missing required fields: name, email, id");
        }

        return {
          name: row.name,
          email: row.email,
          id: row.id,
        };
      });

      const apiResponse = await axios.post("/api/import-voters", validatedData);

      if (apiResponse.data.success) {
        onClose();
        alert("Voters imported successfully!");
      } else {
        throw new Error(
          "Server-side import failed: " + apiResponse.data.message
        );
      }
    } catch (error) {
      setImportError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} onChange={handleFileChange} />
        {errors.file && <p className="error-message">{errors.file.message}</p>}
        {importError && <p className="error-message">{importError}</p>}
        <button type="submit" disabled={isLoading} className="btn">
          {isLoading ? "Importing..." : "Import Voters"}
        </button>
      </form>
      <button onClick={onClose} className="btn close">Close</button>
    </div>
  );
};

export default ImportVotersModal;
