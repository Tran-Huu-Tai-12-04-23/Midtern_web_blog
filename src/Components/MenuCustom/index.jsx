import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { v4 as uuid } from "uuid";

export default function MenuCustom({ children, menuItems = [] }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)}>{children}</div>
          {menuItems.length > 0 && (
            <Menu {...bindMenu(popupState)}>
              {menuItems.length &&
                menuItems.map((menuItem) => {
                  return (
                    <MenuItem
                      className="hover-bg"
                      key={uuid()}
                      onClick={() => {
                        popupState.close();
                        menuItem.handleClick();
                      }}
                    >
                      {menuItem.icon}
                      <div>{menuItem.name}</div>
                    </MenuItem>
                  );
                })}
            </Menu>
          )}
        </>
      )}
    </PopupState>
  );
}
