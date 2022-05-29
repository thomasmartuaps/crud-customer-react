import { useState } from "react";
import { Address } from "../../types/types";

const indonesia = [
  {
    id: "1",
    name: "DKI Jakarta",
  },
  {
    id: "2",
    name: "Jawa Barat",
  },
];

const jakarta = [
  {
    id: "3",
    name: "Jakarta Selatan",
  },
  {
    id: "4",
    name: "Jakarta Barat",
  },
];

const jawaBarat = [
  {
    id: "5",
    name: "Bandung",
  },
];

interface Area {
  id: string;
  name: string;
  areaType?: string;
  childArea?: Array<Area>;
}

function CustomerCreate() {
  const [province, setProvince] = useState<Area | null>(null);
  const [city, setCity] = useState<Area | null>(null);
  const [subdistrict, setSubdistrict] = useState<Area | null>(null);
  const [village, setVillage] = useState<Area | null>(null);
  const [addresses, setAddresses] = useState([]);

  const handleAreaChange = (area: Area) => {
    switch (area.areaType) {
      case "province":
        setProvince(area);
        setCity(null);
        setSubdistrict(null);
        setVillage(null);
        requestArea();
        break;
      case "city":
        setCity(area);
        setSubdistrict(null);
        setVillage(null);
        requestArea();
        break;
      case "subdistrict":
        setSubdistrict(area);
        setVillage(null);
        requestArea();
        break;
      case "village":
        setVillage(area);
        requestArea();
        break;
      default:
        break;
    }
  };

  const requestArea = () => {
    // do stuff
  };

  const renderProvinceDropdown = () => {
    const areaList = indonesia;
    return (
      <select className="form-control" id="provinceDropdown">
        {areaList.map((ar) => {
          return (
            <option value={ar.id} onClick={() => handleAreaChange(ar)}>
              {ar.name}
            </option>
          );
        })}
      </select>
    );
  };

  const renderCityDropdown = () => {
    const areaList = jakarta;
    return (
      <select className="form-control" id="cityDropdown">
        {areaList.map((ar) => {
          return (
            <option value={ar.id} onClick={() => handleAreaChange(ar)}>
              {ar.name}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Add a new Customer</h4>
        <div className="row">
          <div className="col">
            <form method="post">
              <div
                asp-validation-summary="ModelOnly"
                className="text-danger"
              ></div>
              <div className="form-group">
                <div className="row">
                  <div className="col-4">
                    <label
                      asp-for="Customer.Name"
                      className="control-label font-weight-bold"
                    >
                      Nama
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      id="customerName"
                      asp-for="Customer.Name"
                      className="form-control"
                      placeholder="Masukkan nama perusahaan..."
                    />
                  </div>
                </div>
                <span
                  asp-validation-for="Customer.Name"
                  className="text-danger"
                ></span>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Create"
                  asp-page-handler=""
                  className="btn btn-primary"
                />
              </div>

              <table className="table tablle-striped">
                <thead>
                  <tr>
                    <th>Province</th>
                    <th>City</th>
                    <th>Subdistrict</th>
                    <th>Village</th>
                    <th>Street Name</th>
                    <th>Postal Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{renderProvinceDropdown()}</td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCreate;
