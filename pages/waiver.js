import React, { useState } from "react";

export default function Waiver() {
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const queryParams = new URLSearchParams({ type, id }).toString();
    const res = await fetch(`/api/v1/waiver?${queryParams}`, {
      method: "GET",
    });

    const data = await res.text();
    setResponse(data);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto m-12">
      <form onSubmit={handleSubmit} className="p-4 bg-blue-500 text-white">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          >
            <option value="">Select Type</option>
            <option value="email">Email</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="id"
          >
            Email/Name
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink bg-blue-700 hover:bg-blue-900 disabled:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          Submit
        </button>
        <div className="mt-4 text-white">
          <h2 className="text-lg font-bold">Response:</h2>
          <pre className="bg-gray-800 p-4 rounded">
            {loading
              ? "Loading..."
              : response === null
              ? "Submit a request"
              : response === "true"
              ? "Waiver submitted"
              : response === "false"
              ? "Waiver not submitted"
              : `Unexpected response ${response}`}
          </pre>
        </div>
      </form>
    </div>
  );
}
