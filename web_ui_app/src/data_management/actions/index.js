export const HeaderComActionTypes = {
    SHOW_MENU_BAR: 'SHOW_MENU_BAR',
    HIDE_MENU_BAR: 'HIDE_MENU_BAR'
};

export const LeftMenuComActionType = {
    SHOW_CUSTOMER_FORM: 'SHOW_CUSTOMER_FORM',
    HIDE_CUSTOMER_FORM: 'HIDE_CUSTOMER_FORM',
    SHOW_ITEM_ENTRY_FORM: 'SHOW_ITEM_ENTRY_FORM',
    HIDE_ITEM_ENTRY_FORM: 'HIDE_ITEM_ENTRY_FORM',
}

export const CustomerActionType = {
    SHOW_CUST_TABLE_PANEL: 'SHOW_CUST_TABLE_PANEL',
    HIDE_CUST_TABLE_PANEL: 'HIDE_CUST_TABLE_PANEL'
}

export function showMenu(isClicked) {
    return {
        type: HeaderComActionTypes.SHOW_MENU_BAR, isClicked
    }
}

export function hideMenu(isClicked) {
    return {
        type: HeaderComActionTypes.HIDE_MENU_BAR, isClicked
    }
}

export function showCustomerForm(isClicked) {
    return {
        type: LeftMenuComActionType.SHOW_CUSTOMER_FORM, isClicked
    }
}

export function hideCustomerForm(isClicked) {
    return {
        type: LeftMenuComActionType.HIDE_CUSTOMER_FORM, isClicked
    }
}

export function showItemEntryForm(isClicked) {
    return {
        type: LeftMenuComActionType.SHOW_ITEM_ENTRY_FORM, isClicked
    }
}

export function hideItemEntryForm(isClicked) {
    return {
        type: LeftMenuComActionType.HIDE_ITEM_ENTRY_FORM, isClicked
    }
}

export function showCustTablePanel(isClicked) {
    return {
        type: CustomerActionType.SHOW_CUST_TABLE_PANEL, isClicked
    }
}

export function hideCustTablePanel(isClicked) {
    return {
        type: CustomerActionType.HIDE_CUST_TABLE_PANEL, isClicked
    }
}