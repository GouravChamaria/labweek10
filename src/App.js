import React, { useState } from "react";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    }

    if (Object.keys(errors).length === 0) {
      setSubmittedData(formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="data-entry-form">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          {formErrors.address && (
            <span className="error">{formErrors.address}</span>
          )}
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            value={formData.address2}
            onChange={(e) =>
              setFormData({ ...formData, address2: e.target.value })
            }
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </div>
        <div>
          <label>Province:</label>
          <select
            value={formData.province}
            onChange={(e) =>
              setFormData({ ...formData, province: e.target.value })
            }
          >
            <option value="">Select Province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {formErrors.province && (
            <span className="error">{formErrors.province}</span>
          )}
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
          />
          {formErrors.postalCode && (
            <span className="error">{formErrors.postalCode}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p>Email: {submittedData.email}</p>
          <p>Name: {submittedData.name}</p>
          <p>Address: {submittedData.address}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default DataEntryForm;
