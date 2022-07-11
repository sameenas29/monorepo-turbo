import * as React from "react";
import { toSlug} from "@acme/utils";
import {CounterButton} from "ui";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = "Button";
