import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import { Link } from "react-router-dom";

const AppSideMenu = () => {
  const renderMenu = () => {
    return (
      <Collapse accordion={true} key={Math.random()}>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-house-chimney pe-3"></i>
              {`Masters`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item">
              <Link
                to="/app/vehicle"
                className="text-decoration-none sidebar-link"
              >
                Vehicle
              </Link>
            </li>

            <li className="sidebar-item">
              <Link
                to="/app/routemaster"
                className="text-decoration-none sidebar-link"
              >
                Rate
              </Link>
            </li>

            <li className="sidebar-item">
              <Link
                to="/app/driver"
                className="text-decoration-none sidebar-link"
              >
                Driver
              </Link>
            </li>

            <li className="sidebar-item">
              <Link
                to="/app/customer"
                className="text-decoration-none sidebar-link"
              >
                Party
              </Link>
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-truck-front pe-3"></i>
              {`Trip Master`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            {/* <li className="sidebar-item">
              <Link
                to="/app/trip/expense"
                className="text-decoration-none sidebar-link"
              >
                Expense Master
              </Link>
            </li> */}

            <li className="sidebar-item">
              <Link
                to="/app/trip"
                className="text-decoration-none sidebar-link"
              >
                Trip
              </Link>
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-store pe-3"></i>
              {`Store`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item active">
              <li className="sidebar-item">
                <Link
                  to="/app/store/item"
                  className="text-decoration-none sidebar-link"
                >
                  Items
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="/app/store/voucher"
                  className="text-decoration-none sidebar-link"
                >
                  Purchase Voucher
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="/app/store/issueitem"
                  className="text-decoration-none sidebar-link"
                >
                  Issue Items
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="/app/toll"
                  className="text-decoration-none sidebar-link"
                >
                  Toll
                </Link>
              </li>

              <li className="sidebar-item">
                <Link
                  to="/app/store/othervoucherslist"
                  className="text-decoration-none sidebar-link"
                >
                  Other Vouchers
                </Link>
              </li>
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-file-invoice pe-3"></i>
              {` Accounts`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item active">
              <li className="sidebar-item">
                <Link
                  to="/app/trip/ledgeraccount"
                  className="text-decoration-none sidebar-link"
                >
                  Ledger Accounts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  to="/app/trip/LedgerAccountView"
                  className="text-decoration-none sidebar-link"
                >
                  Ledger Accounts View
                </Link>
              </li>

              {/* <Link to="#" className="text-decoration-none sidebar-link">
                P&L
              </Link> */}
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-square-poll-vertical pe-3"></i>
              {`Reports`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item active">
              <Link
                to="/app/trip/settlementreport"
                className="text-decoration-none sidebar-link"
              >
                {`Settlement Report`}
              </Link>

              <Link
                to="/app/trip/vehicleexpreport"
                className="text-decoration-none sidebar-link"
              >
                {`MIS Report`}
              </Link>

              <Link
                to="/app/trip/TripInvoiceList"
                className="text-decoration-none sidebar-link"
              >
                {`Invoice`}
              </Link>

              <Link
                to="/app/report/profitloss"
                className="text-decoration-none sidebar-link"
              >
                {`Profit & Loss`}
              </Link>

              <Link
                to="/app/report/balancesheet"
                className="text-decoration-none sidebar-link"
              >
                {`Balance Sheet`}
              </Link>
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-gear pe-3"></i>
              {`Configurations`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item active">
              <Link
                to="/app/settings"
                className="text-decoration-none sidebar-link"
              >
                Settings
              </Link>
            </li>
          </ul>
        </Panel>
        <Panel
          header={
            <div>
              <i className="fa-solid fa-truck pe-3"></i>
              {`Others`}
            </div>
          }
          className="themesub-item"
        >
          <ul className="sidebar-dropdown list-unstyled collapse show">
            <li className="sidebar-item active">
              <Link
                to="/app/vehicletracking"
                className="text-decoration-none sidebar-link"
              >
                Vehicle Tracking
              </Link>
            </li>
            <li className="sidebar-item active">
              <Link
                to="/app/grid"
                className="text-decoration-none sidebar-link"
              >
                Beta Grid
              </Link>
            </li>
            <li className="sidebar-item active">
              <Link
                to="/app/userdash"
                className="text-decoration-none sidebar-link"
              >
                Dashboard (User)
              </Link>
            </li>
          </ul>
        </Panel>
      </Collapse>
      // </Panel>
    );
  };

  return (
    <ul className="sidebarmenu-nav">
      <Collapse accordion={true}>{renderMenu()}</Collapse>
    </ul>
  );
};
export default AppSideMenu;
