import { mock } from "bun:test";
import React from "react";

mock.module("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: any) => {
    return React.createElement("a", { href: String(href), ...props }, children);
  },
}));
