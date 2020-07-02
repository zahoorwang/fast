import React from "react";
import {
    ListboxItemHandledProps as BaseListboxItemHandledProps,
    ListboxItemManagedClasses as BaseListboxItemManagedClasses,
    ListboxItemUnhandledProps as BaseListboxItemUnhandledProps,
} from "@microsoft/fast-components-react-base";
import {
    ManagedClasses,
    SelectOptionClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-msft";
import { Subtract } from "utility-types";

export type SelectOptionManagedClasses = ManagedClasses<SelectOptionClassNameContract>;
export interface SelectOptionHandledProps
    extends SelectOptionManagedClasses,
        Subtract<BaseListboxItemHandledProps, BaseListboxItemManagedClasses> {
    /**
     * The select option item glyph render prop
     */
    glyph?: (className: string) => React.ReactNode;
}

export type SelectOptionUnhandledProps = BaseListboxItemUnhandledProps;
export type SelectOptionProps = SelectOptionHandledProps & SelectOptionUnhandledProps;
