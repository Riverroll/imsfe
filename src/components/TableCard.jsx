// TableCard.jsx
import React from 'react';

const TableCard = () => {
  return (
    <div className="card bg-primary text-primary-content w-full max-w-full shadow-lg">
      <div className="card-body p-4">
        <h2 className="card-title">Best</h2>
        <div className="overflow-x-auto">
          <div className="flex flex-col w-full"> {/* Use flex to control layout */}
            <table className="table w-full table-auto"> {/* Set table to take full width */}
              {/* head */}
              <thead>
                <tr className="text-black"> {/* Set text color for header */}
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="text-black">Name</th> {/* Ensure header is black */}
                  <th className="text-black">Job</th> {/* Ensure header is black */}
                  <th className="text-black">Favorite Color</th> {/* Ensure header is black */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Row Data */}
                {[
                  {
                    name: "Hart Hagerty",
                    country: "United States",
                    job: "Desktop Support Technician",
                    color: "Purple",
                    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                  },
                  {
                    name: "Brice Swyre",
                    country: "China",
                    job: "Tax Accountant",
                    color: "Red",
                    img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                  },
                  {
                    name: "Marjy Ferencz",
                    country: "Russia",
                    job: "Office Assistant I",
                    color: "Crimson",
                    img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
                  },
                  {
                    name: "Yancy Tear",
                    country: "Brazil",
                    job: "Community Outreach Specialist",
                    color: "Indigo",
                    img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
                  },
                ].map((user, index) => (
                  <tr key={index} className="text-black"> {/* Set text color for body rows */}
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={user.img} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm">{user.country}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.job}</td>
                    <td>{user.color}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
