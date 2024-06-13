import { Link, useLoaderData } from "react-router-dom";

const Allartcraft = () => {
  const items = useLoaderData();

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">
          All Art & Craft
        </h2>

        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Image</th>
                  <th className="p-3">subcategoryName</th>
                  <th className="p-3">craftName</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <tr
                      key={item._id}
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td className="p-3">
                        <p>
                          <img
                            className="h-[100px] w-[100px] rounded-2xl"
                            src={item.photo}
                            alt=""
                          />
                        </p>
                      </td>
                      <td className="p-3">
                        <p>{item.subcategoryName}</p>
                      </td>
                      <td className="p-3">
                        <p>{item.craftName}</p>
                      </td>
                      <td className="p-3">
                        <p className="dark:text-gray-600">{item.price}</p>
                      </td>
                      <td className="p-3 text-right">
                        <p>{item.stockStatus}</p>
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <span>
                            {" "}
                            <Link to={`/ditels/${item._id}`}>
                              <button>Detiels</button>
                            </Link>{" "}
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allartcraft;
