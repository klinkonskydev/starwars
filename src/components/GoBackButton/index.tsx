"use client";

import ArrowBackIcon from "../Icons/ArrowBack";

export function GoBackButton() {
  return (
    <button
      className="bg-transparent text-md flex items-center gap-2 cursor-pointer hover:bg-zinc-900 rounded-md pr-3 pl-2 py-1"
      onClick={() => window.history.back()}
    >
      <ArrowBackIcon width={26} height={26} fill="white" />
      <span>Go back</span>
    </button>
  );
}
