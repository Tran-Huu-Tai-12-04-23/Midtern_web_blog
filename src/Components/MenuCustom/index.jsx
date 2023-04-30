import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { v4 as uuid } from "uuid";
import { styled } from "@mui/system";

export default function MenuCustom({ children, menuItems = [], style }) {
  const MyMenu = styled(Menu)({
    "& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
      borderRadius: ".5rem",
      ...style,
    },
    "& ul ": {
      borderRadius: ".5rem",
      ...style,
    },
  });

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)}>{children}</div>
          {menuItems.length > 0 && (
            <MyMenu {...bindMenu(popupState)}>
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
            </MyMenu>
          )}
        </>
      )}
    </PopupState>
  );
}
